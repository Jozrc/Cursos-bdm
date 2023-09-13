import React, { useState } from "react";
import { Link } from 'react-router-dom';
//import miImagen from "./images/banmer.jpg";
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
          Welcome
        </h2>
    </div>

<div>
  <ul className="opciones">
    <li>Bodas</li>
    <li>Paquetes</li>
    <li>Ofertas</li>
    <li>Restaurantes</li>
  </ul>
</div>

    <div className='fondo'>
    
     <div className="planner">
      
     <div id="imagen-contenedor" onClick={toggleAmpliar1}>
     <img
      // src={miImagen}
       alt="Descripción de la imagen" 
       id="imagen" 
       className={`imagen-planner ${ampliarImagen1 ? "ampliada" : ""}`} // Aplica el estilo de zoom a la imagen
       />
     </div>

     <h1 className="titulo-planner">Titulo-Nombre</h1>
     <p className="descripcion">Descripcion: 
     Bienvenidos a "Amor Eterno", un evento mágico diseñado y coordinado por nuestro experimentado equipo
     de wedding planners. Esta es una celebración única y personalizada que marca el inicio de una vida
     juntos llena de amor y promesas. En "Amor Eterno", creamos un entorno encantador donde los sueños se
     hacen realidad y los corazones se unen en un día inolvidable.</p>
     <Link to="/Carrito"><button className="button-planner">Ver más</button></Link>
     
     
     </div>

    <div className="planner">

    <div id="imagen-contenedor" onClick={toggleAmpliar2}>
     <img
      // src={miImagen}
       alt="Descripción de la imagen" 
       id="imagen" 
       className={`imagen-planner ${ampliarImagen2 ? "ampliada" : ""}`} // Aplica el estilo de zoom a la imagen
       />
     </div>

     <h1 className="titulo-planner">Titulo-Nombre</h1>
     <p className="descripcion">Descripcion: 
     Bienvenidos a "Amor Eterno", un evento mágico diseñado y coordinado por nuestro experimentado equipo
     de wedding planners. Esta es una celebración única y personalizada que marca el inicio de una vida
     juntos llena de amor y promesas. En "Amor Eterno", creamos un entorno encantador donde los sueños se
     hacen realidad y los corazones se unen en un día inolvidable.</p>
     <Link to="/Carrito"><button className="button-planner">Ver más</button></Link>
     
     </div>

    </div>

</div>
    
  );
}

export default HeaderAndFooterExample;