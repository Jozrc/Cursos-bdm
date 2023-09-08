import React from "react";
import { Link } from 'react-router-dom';
import './Styles/login.css';
import miImagen from "./images/LoginBDM.jpeg";
import miImagenR from "./images/registerBDM.png";


const Register = ({user, setUser}) => {

    const handleClick = e => {

      setUser({
        ...user,
        [e.target.name]: e.target.value
      })
      console.log(user);
    }

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
            <input type="text" name="firstN" onChange={handleClick} className="inputField2" />
            <input type="text" name="LastN" onChange={handleClick} className="inputField2" />
          </div>
          <h5 className="user-passw">User</h5>
          <div className="inputContainer">
            <input type="text" name="user" onChange={handleClick} className="inputField" />
          </div>
          <h5 className="user-passw">Email</h5>
          <div className="inputContainer">
            <input type="email" name="email" onChange={handleClick} className="inputField" />
          </div>

          <h5 className="user-passw">Password</h5>
          <div className="inputContainer">
            <input type="password" name="password" onChange={handleClick} className="inputField" />
          </div>

          <h5 className="user-passw">Contact Number</h5>
          <div className="inputContainer">
            <input type="gmail" name="Cnumber" onChange={handleClick} className="inputField" />
          </div>
  
          <div className="user-passw-container">
          <h5 className="user-passw">Birthday</h5>
          <h5 className="user-passw">Gender</h5>
          </div>
          <div className="inputContainer">
            <input type="date" name="birtday" onChange={handleClick} className="inputField2" />
            <select name="rol" onChange={handleClick} className="inputField2">
              <option value="value1">M</option>
              <option value="value2" selected>F</option>
            </select>
          </div>

          <div className="user-passw-container">
          <h5 className="user-passw">Rol</h5>
          </div>

          <div className="inputContainer">
            <select name="rol" onChange={handleClick} className="inputField3">
              <option value="value1">Vendedor</option>
              <option value="value2" selected>Comprador</option>
              <option value="value3">Vendedor/Comprador</option>
            </select>
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