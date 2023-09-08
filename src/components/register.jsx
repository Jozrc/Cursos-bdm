import React from "react";
import { Link } from 'react-router-dom';
import './Styles/login.css';
import miImagen from "./images/LoginBDM.jpeg";
import miImagenR from "./images/registerBDM.png";


const Register = ({user, setUser}) => {
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
            <h5 className="user-passw">User</h5>
            <div className="inputContainer">
              <input type="text" className="inputField" />
            </div>
            <h5 className="user-passw">Email</h5>
            <div className="inputContainer">
              <input type="email" className="inputField" />
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
            <h5 className="user-passw">Birthday</h5>
            <h5 className="user-passw">Gender</h5>
            </div>
            <div className="inputContainer">
              <input type="date" className="inputField2" />
              <input type="text" className="inputField2" />
            </div>

            <Link to="/"><button className="button">Submit</button></Link>
            <p className="dont-account">Do you already have an account? </p>
            <Link to="/login" className="RegisterLink">Log in</Link>
  
          </form>
        </div>
  
        </div>

    );
  };
  
  export default Register;