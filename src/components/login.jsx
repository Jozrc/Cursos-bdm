import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Styles/login.css';
import miImagen from "./images/LoginBDM.jpeg";

const Login = () => {
  // Define estados para almacenar los valores de los campos de entrada
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página

    // Aquí puedes realizar validaciones y procesamiento de datos
    if (username.trim() === "") {
      alert("Por favor, ingresa un nombre de usuario.");
      return;
    }

    if (password.trim() === "") {
      alert("Por favor, ingresa una contraseña.");
      return;
    }

    // Ahora puedes enviar los datos al servidor o realizar otras acciones necesarias
    // Por ejemplo, podrías enviar los datos a través de una solicitud HTTP

    console.log("Nombre de usuario:", username);
    console.log("Contraseña:", password);

    window.location.href = "http://localhost:3000/";
    // Luego puedes redirigir al usuario a otra página, si es necesario
    // Ejemplo: history.push('/dashboard');
  };

  return (
    <div className="container">
      <div className="center-container">
        <img src={miImagen} alt="Descripción de la imagen" className="imagen-izquierda" />
        <form onSubmit={handleSubmit} className="form_main">
          <h1 className="heading">Login</h1>
          <h5 className="user-passw">Username</h5>
          <div className="inputContainer">
            <input
              type="text"
              className="inputField"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <h5 className="user-passw">Password</h5>
          <div className="inputContainer">
            <input
              type="password"
              className="inputField"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/" className="forgotLink">Forgot your password?</Link>
          <button className="button">Submit</button>
          <p className="dont-account">Don't have an account yet? </p>
          <Link to="/register" className="RegisterLink">Create an account</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;