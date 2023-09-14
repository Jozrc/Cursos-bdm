import React from "react";
import { Link } from 'react-router-dom';
import './Styles/login.css';
import miImagen from "./images/LoginBDM.jpeg";

const Login = () => {
    return (
      <div className="container-login">

      <div className="center-container">

        <img src={miImagen} alt="Descripción de la imagen" className="imagen-izquierda"/>

        <form action="" className="form_main">
          <h1 className="heading">Login</h1>

          <h5 className="user-passw">Username</h5>
          <div className="inputContainer">
            <input type="text" className="inputField" id="username" />
          </div>
  
          <h5 className="user-passw">Password</h5>
          <div className="inputContainer">
            <input type="password" className="inputField" id="password" />
          </div>
          <Link to="/" className="forgotLink">Forgot your password?</Link>
  
          <Link to="/"><button className="button">Submit</button></Link>
          <p className="dont-account">Don´t have an account yet? </p>
          <Link to="/register" className="RegisterLink">Create an account</Link>

        </form>
      </div>

      </div>
    );
  };
  
  export default Login;