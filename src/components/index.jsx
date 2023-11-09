import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import miImagen from "./images/registerBDM.png";
//import Imagenlogo from "./images/register.png";
import './Styles/index.css';


function HeaderAndFooterExample({userdata}) {

  const [ampliarImagen1, setAmpliarImagen1] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  
  const toggleAmpliar1 = (index) => {
    setSelectedImageIndex(index === selectedImageIndex ? null : index);
  };

  const [productoData, setproductoData] = useState([{}])

    useEffect ( () => { 
      fetch('http://localhost:5000/getProducto', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        }).then(
            response => response.json()
        ).then((data) => {
            if (Array.isArray(data)) {
                const formattedData = data.map((rows) => {
                    return {
                      ...rows
                    };
                   
                });
                console.log(data)

                setproductoData(formattedData);
            } else {
              console.log('Invalid data format:', data);
            }

           
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
          
    
    }, []) 

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
      
    {productoData.map((row, index) => (
     <div className="planner" key={index}>
      
     <div id="imagen-contenedor" onClick={() => toggleAmpliar1(index)}>
     {row.img_prod && (
     <img
      src={URL.createObjectURL(new Blob([new Uint8Array(row.img_prod.data)]))}
       alt="Descripción de la imagen" 
       className={`imagen-planner ${selectedImageIndex === index ? "ampliada" : ""}`} 
       />
       )}
     </div>
  
     <h1 className="titulo-planner">{row.nombreP}</h1>
     <p className="descripcion">
     {row.descripcion}</p>
     {userdata.data?.user.id_user ? (
      <Link to="/Carrito"><button className="button-planner">Agregar</button></Link>
     ) : 
     (<> </>)}

     
     
     </div>
    ))}
    
    </div>

</div>
    
  );
}

export default HeaderAndFooterExample;