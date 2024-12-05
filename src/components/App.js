import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import Login from "./Login.js";
import Register from "./Register.js";
import ProtectedRoute from "./ProtectedRoute.js";

import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

import api from "../utils/api";
import * as auth from "../utils/auth.js";
import { setToken, getToken, removeToken } from "../utils/token";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleRegistration = ({ email, password }) => {
    if (password) {
      auth
        .register(email, password)
        .then(() => {
          setSuccess(true);
          setIsTooltipOpen(true);
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          setSuccess(false);
          console.log("F");

          setIsTooltipOpen(true);
        });
    }
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) return;
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setUserEmail(email);
          setToken(data.token);
          setLoggedIn(true);
          setSuccess(true);
          navigate("/");
        }
      })
      .catch((error) => {
        setSuccess(false);
        setIsTooltipOpen(true);
        console.log(error);
      });
  };

  const handleLogout = () => {
    removeToken();
    setLoggedIn(false);
    setSuccess(false);
  };

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    });
  }, []);

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) return;

    auth
      .checkToken(jwt)
      .then((response) => {
        if (response.data) {
          const { email } = response.data;
          setUserEmail(email);
          setLoggedIn(true);
          navigate("/");
        } else {
          navigate("/signup");
        }
      })
      .catch((error) => {
        console.error(error);
        navigate("/login");
      });
  }, [navigate]);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsTooltipOpen(false);
    setSelectedCard(null);
  };

  const handleUpdateUser = (userData) => {
    api
      .editUserInfo(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateAvatar = (data) => {
    api
      .editPicture(data)
      .then((updatedAvatar) => {
        setCurrentUser(updatedAvatar);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Envía una petición a la API y obtén los datos actualizados de la tarjeta
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  function handleAddPlace(data) {
    console.log(data);
    api
      .addNewCard(data)
      .then((card) => {
        setCards([card, ...cards]);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn} userEmail={userEmail} onLogout={handleLogout} />
        <main>
          <Routes>
            <Route
              path="/login"
              element={
                <Login
                  handleLogin={handleLogin}
                  success={success}
                  isOpen={isTooltipOpen}
                  onClose={closeAllPopups}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  handleRegistration={handleRegistration}
                  success={success}
                  isOpen={isTooltipOpen}
                  onClose={closeAllPopups}
                />
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={
                    <Main
                      onEditAvatarClick={handleEditAvatarClick}
                      onEditProfileClick={handleEditProfileClick}
                      onAddPlaceClick={handleAddPlaceClick}
                      onCardClick={handleCardClick}
                      selectedCard={selectedCard}
                      onClose={closeAllPopups}
                      cards={cards}
                      onCardLike={handleCardLike}
                      onCardDelete={handleCardDelete}
                    />
                  }
                />
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
