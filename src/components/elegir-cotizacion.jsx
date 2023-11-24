import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export const Elegircotizaciones = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const toggleAmpliar1 = (index) => {
        setSelectedImageIndex(index === selectedImageIndex ? null : index);
    };

    const [productoData, setproductoData] = useState([{}])
    console.log(productoData)
    useEffect (() => { 
      fetch('http://localhost:5000/getAllCotizaciones', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        }).then(
            res => res.json()
        ).then((data) => {
            if (Array.isArray(data)) {
                const formattedData = data.map((rows) => {
                    return {
                      ...rows
                    }; 
                });

                setproductoData(formattedData);
                console.log(formattedData)
            } else {
              console.log('Invalid data format:', data);
            }

           
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
          
    
    }, []);

    

    return(
        <div>
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
                <Link to={`./${row.id_cotizacion}`}><button className="button-planner">Cotizar</button></Link>               
                </div>
            ))} 
        </div>
    );
}

export default Elegircotizaciones