import React, { useState, useEffect } from "react";
import Index from "./components/index.jsx";
import Footer from "./components/footer.jsx";
import NavbarReact from "./components/nav.jsx";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import Producto from "./components/producto.jsx";
import Carrito from "./components/carrito.jsx"; 
import { Route, Routes, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'



function App() {

  const [user, setUser] = useState({
    usuario:'', 
    correo:'', 
    contrasena:'', 
    nombre:'', 
    apellidoP:'', 
    fnacimiento:'', 
    sexo:'',
    rol:''
  });

  const [token, setToken] = useState('');
  
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {

    const requestInit = {
      method: 'GET',
      headers: {'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token },
      body: JSON.stringify()
    }
    fetch('http://localhost:5000/home', requestInit)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Error en la solicitud');
      }
      return res.json();
    })
    .then((data) => { 
      setUser(data);
      console.log(data);

    })
  .catch((error) => {

    console.error(error);
  });
  localStorage.setItem('token', token);
  }, [token]);


  const location = useLocation();

  return (
    <div className="App">
      {/* Renderizar NavbarReact solo si no estás en la página de inicio de sesión */}
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <NavbarReact  user={user} setUser={setUser} setToken={setToken}/>
      )}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} setToken={setToken}/>} />
        <Route path="/register" element={<Register user = {user} setUser = {setUser}/>} />
        <Route path="/producto" element={<Producto />} />
      </Routes>

      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </div>
  );
}

export default App;
