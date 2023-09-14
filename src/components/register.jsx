import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Styles/login.css';
import miImagen from "./images/LoginBDM.jpeg";
import miImagenR from "./images/registerBDM.png";


const Register = () => {

  const [errors, setErrors] = useState({}); // Estado para almacenar errores

  const [user, setUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [cnumber, setCnumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página

    //REVISAR QUE NO ESTEN VACIOS

    if (firstName.trim() === "") {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    if (lastName.trim() === "") {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    if (email.trim() === "") {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    if (cnumber.trim() === "") {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    if (pass.trim() === "") {
      alert("Por favor, rellena todos los campos.");
      return;
    }

        if (user.trim() === "") {
      alert("Por favor, rellena todos los campos.");
      return;
    }

  // Validación para campos "First Name" y "Last Name" (sin números)
    if (/\d/.test(firstName)) {
      alert("Por favor, no ingrese numeros en el campo de First Name.");
      return;
    }

    if (/\d/.test(lastName)) {
      alert("Por favor, no ingrese numeros en el campo de Last Name.");
      return;
    }

     // Validación para el campo "Email"

     if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      alert("Por favor, ingrese un formato de correo electronico valido.");
      return;
    }

    // Validacion para campo de Numero

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      alert("Por favor, ingrese un formato de correo electronico valido.");
      return;
    }

        // Validación para el campo "Password"

    if (!/^\d+$/.test(cnumber)) {
          alert("Por favor, el numero de contacto solo puede tener caracteres numericos");
          return;
        }

    // Ahora puedes enviar los datos al servidor o realizar otras acciones necesarias
    // Por ejemplo, podrías enviar los datos a través de una solicitud HTTP

    window.location.href = "http://localhost:3000/";
    // Luego puedes redirigir al usuario a otra página, si es necesario
    // Ejemplo: history.push('/dashboard');
  };


    return (
      <div className="container-register">

      <div className="center-container">

        <img src={miImagenR} alt="Descripción de la imagen" className="imagen-izquierdaR"/>

        <form action="" className="form_register" onSubmit={handleSubmit}>
          <h1 className="heading2">Register</h1>

          
          <h5 className="user-passw">First Name</h5>
          <div className="inputContainer">
            <input type="text" name="firstN" onChange={(e) => setFirstName(e.target.value)} className="inputField" />
          </div>

          <h5 className="user-passw">Last Name</h5>
          <div className="inputContainer">
            <input type="text" name="LastN" onChange={(e) => setLastName(e.target.value)} className="inputField" />
          </div>

          <h5 className="user-passw">User</h5>
          <div className="inputContainer">
            <input type="text" name="user" onChange={(e) => setUser(e.target.value)} className="inputField" />
          </div>

          <h5 className="user-passw">Email</h5>
          <div className="inputContainer">
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="inputField" />
          </div>

          <h5 className="user-passw">Password</h5>
          <div className="inputContainer">
            <input type="password" name="password" onChange={(e) => setPass(e.target.value)} className="inputField" />
          </div>

          <h5 className="user-passw">Contact Number</h5>
          <div className="inputContainer">
            <input type="gmail" name="Cnumber" onChange={(e) => setCnumber(e.target.value)} className="inputField" />
          </div>
  
          <div className="user-passw-container">
          <h5 className="user-passw">Birthday</h5>
          <h5 className="user-passw">Gender</h5>
          </div>
          <div className="inputContainer">
            <input type="date" name="birtday" onChange={(e) => setBirthdate(e.target.value)} className="inputField2" />
            <select name="rol" onChange={(e) => setGender(e.target.value)} className="inputField2">
              <option value="value1">M</option>
              <option value="value2" selected>F</option>
            </select>
          </div>

          <div className="user-passw-container">
          <h5 className="user-passw">Rol</h5>
          </div>

          <div className="inputContainer">
            <select name="rol" onChange={(e) => setGender(e.target.value)} className="inputField3">
              <option value="value1">Vendedor</option>
              <option value="value2" selected>Comprador</option>
              <option value="value3">Vendedor/Comprador</option>
            </select>
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