import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as auth from "../utils/auth";

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();
  const form = useRef();

  return (
    <section className="auth">
      <h2 className="auth__title">Entrar</h2>
      <form className="auth__form">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={user.email}
          className="auth__input"
          required
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="123qwea"
          value={user.password}
          className="auth__input"
          required
        />
        <button className="auth__button">Entrar</button>
        <span className="auth__text">
          Aun no eres miembro?{" "}
          <Link to="/register" className="auth__link">
            Inscribite aqui
          </Link>
        </span>
      </form>
    </section>
  );
}

export default Login;
