import React, { useState } from "react";
import { Link } from 'react-router-dom';
import miImagen from "./images/registerBDM.png";
//import Imagenlogo from "./images/register.png";
import './Styles/index.css';


function HeaderAndFooterExample() {

  const [ampliarImagen1, setAmpliarImagen1] = useState(false);
  const [ampliarImagen2, setAmpliarImagen2] = useState(false);

  const toggleAmpliar1 = () => {
    setAmpliarImagen1(!ampliarImagen1);
  };

  const toggleAmpliar2 = () => {
    setAmpliarImagen2(!ampliarImagen2);
  };

  return (
<div>
    <div className='baner'>
        <h2 className='subt'>
          Bienvenido
        </h2>
    </div>

<div>
  <ul className="opciones">
    <li>Electronica</li>
    <li>Comestibles</li>
    <li>Videojuegos</li>
    <li>Peliculas</li>
  </ul>
</div>

    <div className='fondo'>
    
     <div className="planner">
      
     <div id="imagen-contenedor" onClick={toggleAmpliar1}>
     <img
      src={miImagen}
       alt="Descripción de la imagen" 
       id="imagen" 
       className={`imagen-planner ${ampliarImagen1 ? "ampliada" : ""}`} // Aplica el estilo de zoom a la imagen
       />
     </div>

     <h1 className="titulo-planner">Producto 1</h1>
     <p className="descripcion">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     <Link to="/Carrito"><button className="button-planner">Agregar</button></Link>
     
     
     </div>

    <div className="planner">

    <div id="imagen-contenedor" onClick={toggleAmpliar2}>
     <img
      src={miImagen}
       alt="Descripción de la imagen" 
       id="imagen" 
       className={`imagen-planner ${ampliarImagen2 ? "ampliada" : ""}`} // Aplica el estilo de zoom a la imagen
       />
     </div>

     <h1 className="titulo-planner">Producto 2</h1>
     <p className="descripcion">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     <Link to="/Carrito"><button className="button-planner">Agregar</button></Link>
     
     </div>

    </div>

</div>
    
  );
}

export default HeaderAndFooterExample;