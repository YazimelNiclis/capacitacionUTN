import React, { useState } from "react";
import "./style.css";
import { iniciarSesion } from "../../api/Rule_auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await iniciarSesion({ email: email, password: password })
      .then(() => {
        navigate("/Home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="app">
      <div className="contenedor">
        <form onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>

          <br />
          <label htmlFor="Correo" className="item">
            <p>Email *</p>
            <input placeholder="Email*" type="email" onChange={onChangeEmail} />
            <br />
          </label>
          <br />
          <label htmlFor="Password" className="item">
            <br />
            <p>Password *</p>
            <input
              type="password"
              placeholder="Password*"
              onChange={onChangePassword}
            />
            <br />
          </label>

          <br />
          <br />

          <br />
          <button className="button" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
