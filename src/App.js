import React, { useState } from "react";
import Index from "./components/index.jsx";
import NavbarReact from "./components/nav.jsx";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import Carrito from "./components/carrito.jsx"; 
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'



function App() {
  
  const [ user, setUser ] = useState({
    user:'',
    firstN: '',
    LastN: '',
    email: '',
    password: '',
    Cnumber: '',
  });

  const location = window.location.pathname;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Index/> } />

        <Route path="/Carrito" element={ <Carrito/> } />
        
        <Route path="/login" element={ <Login user={ user } setUser={ setUser }/> }/>
        <Route path="/register" element={ <Register user={ user } setUser={ setUser }/> }/>
      </Routes>
    </div>

  );
}

export default App;
