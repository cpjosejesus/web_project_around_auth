import Card from "./Card.jsx";
import { useContext } from "react";
import ImagePopup from "./ImagePopup.jsx";
import editBtn from "../images/edit-btn.svg";

import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__container">
            <img
              src={currentUser.avatar}
              alt="Profile"
              className="profile__image"
              onClick={props.onEditAvatarClick}
            />
            <img
              src={editBtn}
              alt="Edit button"
              className="profile__picture-edit"
              onClick={props.onEditAvatarClick}
            />
          </div>

          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__button-edit"
                onClick={props.onEditProfileClick}
              ></button>
            </div>
            <p className="profile__type">{currentUser.about}</p>
          </div>
        </div>

        <button
          type="button"
          className="profile__button-add"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        {props.cards.map((card, idx) => {
          return (
            <Card
              key={idx}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
              selectedCard={props.selectedCard}
            />
          );
        })}
      </section>
      {props.selectedCard && (
        <ImagePopup selectedCard={props.selectedCard} onClose={props.onClose} />
      )}
    </main>
  );
}

export default Main;
