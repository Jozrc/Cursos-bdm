import React from "react";
import { Link } from 'react-router-dom';
import './Styles/login.css';
import miImagen from "./images/login.png";
import miImagenR from "./images/register.png";


const Register = () => {
    return (
        <div className="container">

        <div className="center-container">
  
          <img src={miImagenR} alt="Descripción de la imagen" className="imagen-izquierdaR"/>
  
          <form action="" className="form_main2">
            <h1 className="heading2">Register</h1>
  
            <div className="user-passw-container">
            <h5 className="user-passw">First Name</h5>
            <h5 className="user-passw">Last Name</h5>
            </div>
            <div className="inputContainer">
              <input type="text" className="inputField2" />
              <input type="text" className="inputField2" />
            </div>
    
            <h5 className="user-passw">Gmail</h5>
            <div className="inputContainer">
              <input type="gmail" className="inputField" />
            </div>

            <h5 className="user-passw">Password</h5>
            <div className="inputContainer">
              <input type="password" className="inputField" />
            </div>

            <h5 className="user-passw">Contact Number</h5>
            <div className="inputContainer">
              <input type="gmail" className="inputField" />
            </div>
    
            <div className="user-passw-container">
            <h5 className="user-passw">Date</h5>
            <h5 className="user-passw">Country</h5>
            </div>
            <div className="inputContainer">
              <input type="date" className="inputField2" />
              <input type="text" className="inputField2" />
            </div>

            <button className="button">Submit</button>
            <p className="dont-account">Do you already have an account? </p>
            <Link to="/login" className="RegisterLink">Log in</Link>
  
          </form>
        </div>
  
        </div>

    );
  };
  
  export default Register;