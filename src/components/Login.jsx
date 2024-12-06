import { useState } from "react";
import { Link } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleOnChange(evt) {
    evt.preventDefault();
    const key = evt.target.name;
    const value = evt.target.value;
    setUser((state) => ({
      ...state,
      [key]: value,
    }));
  }

  function handleSubmitLogin(evt) {
    evt.preventDefault();
    props.handleLogin(user);
  }

  return (
    <>
      <section className="auth">
        <h2 className="auth__title">Inicia sesion</h2>
        <form className="auth__form" onSubmit={handleSubmitLogin}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo electronico"
            value={user.email}
            onChange={handleOnChange}
            className="auth__input"
            required
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contrasena"
            value={user.password}
            onChange={handleOnChange}
            className="auth__input"
            required
          />
          <button className="auth__button">Inicia sesion</button>
          <span className="auth__text">
            Aun no eres miembro?{" "}
            <Link to="/register" className="auth__link">
              Registrate aqui
            </Link>
          </span>
        </form>
      </section>
      <InfoTooltip success={props.success} isOpen={props.isOpen} onClose={props.onClose} />
    </>
  );
}

export default Login;
