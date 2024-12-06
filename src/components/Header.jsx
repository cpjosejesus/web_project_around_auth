import logo from "../images/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    props.onLogout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header__info">
        <img src={logo} alt="Logo del site Around USA" className="header__logo" />
        <div className="header__profile">
          {props.loggedIn ? (
            <>
              <span className="header__email">{props.userEmail}</span>
              <button className="header__btn-logout" onClick={handleLogout}>
                Cerrar sesion
              </button>
            </>
          ) : (
            <>
              {location.pathname === "/login" ? (
                <Link to="/register" className="header__link">
                  Registrate
                </Link>
              ) : (
                <Link to="/login" className="header__link">
                  Iniciar sesion
                </Link>
              )}
            </>
          )}
        </div>
      </div>
      <div className="header__separator"></div>
    </header>
  );
}

export default Header;
