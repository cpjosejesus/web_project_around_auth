import { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRegistration(user);
  };

  return (
    <section className="auth">
      <h2 className="auth__title">Registrate</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Correo electronico"
          value={user.email}
          onChange={handleChange}
          className="auth__input"
          required
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contrasena"
          value={user.password}
          onChange={handleChange}
          className="auth__input"
          required
        />
        <button className="auth__button">Registrate</button>
        <span className="auth__text">
          Ya eres miembro?{" "}
          <Link to="/login" className="auth__link">
            Inicia sesion aqui
          </Link>
        </span>
      </form>
    </section>
  );
}

export default Register;
