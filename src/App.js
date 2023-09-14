import React, { useState } from "react";
import Index from "./components/index.jsx";
import Footer from "./components/footer.jsx";
import NavbarReact from "./components/nav.jsx";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import Carrito from "./components/carrito.jsx"; 
import { Route, Routes, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'



function App() {
  const location = useLocation();

  // Verificar si la ruta actual es
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  // Mostrar NavbarReact solo si no estás en la página de inicio de sesión o registro
  const showNavbar = !isLoginPage && !isRegisterPage;

  // Mostrar Footer solo si no estás en la página de inicio de sesión o registro
  const showFooter = !isLoginPage && !isRegisterPage;

  return (
    <div className="App">
      {/* Renderizar NavbarReact solo si no estás en la página de inicio de sesión */}
      {showNavbar && <NavbarReact />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {showFooter && <Footer />}
    </div>
  );
}

export default App;
