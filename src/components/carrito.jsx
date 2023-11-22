import React, { useState, useEffect } from "react";
import miImagen from "./images/registerBDM.png";
import { useParams } from 'react-router-dom';
import './Styles/Carrito.css';


function CarritoDeCompra() {
  const {id} = useParams();
  

  const [productoData, setproductoData] = useState([{}])

  useEffect ( () => { 
    fetch(`http://localhost:5000/getCarrito/${(id)}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      }).then(
          response => response.json()
      ).then((data) => {
        console.log(data)
        
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
        
    
}, [id]) 
  
  const handleConfirmarCompra = (id) => {

    const ConfirmarCompra = {total: totalPrecio, id: id}
    
    fetch('http://localhost:5000/putCarritoProducto', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(ConfirmarCompra),
      }).then(
          res => res.json()
      ).then((res) => {
        console.log(res)
        alert('Compra realizada!!!')

      })
      .catch((error) => {
        console.error('Fetch error:', error);
    });


  };

  const handleEliminarArticulo = (id_producto) => { 
    fetch(`http://localhost:5000/deleteCarrito/${id_producto}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((res) => res.json())
    .then((data) => {
        
      console.log('Element deleted:', data);
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error deleting element:', error);
    });
    window.location.reload();
  }; 


  const totalPrecio = productoData.reduce((total, producto) => total + producto.total_price, 0);

  return (
    <div>
      <div className='banner'>
        <h2 className='subt'>
          Carrito de Compra
        </h2>
      </div>

      <div className='contenedor-productos'>
        {productoData.map((row, index) =>  (
          <div className="producto" key={index}>
                {row.img_prod && (
              <img
                src={URL.createObjectURL(new Blob([new Uint8Array(row.img_prod.data)]))}
                alt="Descripción de la imagen"
              />
                )}
        
            <h1 className="titulo-producto">{row.nombreP}</h1>
            <p className="descripcion">{row.descripcion}</p>
            <div className="acciones">
            <button className="boton-eliminar" onClick={() => handleEliminarArticulo(row.id_producto)}>Eliminar</button>
            </div>
            <br />
            <p>Cantidad: {row.count_id_producto}</p>
            <p>Subtotal: ${row.total_price}</p>

          </div>
        ))}
        <p>Total: ${totalPrecio} </p>
        <div className="acciones-carrito">
          <button className="boton-confirmar" onClick={() => handleConfirmarCompra(productoData[0].id_carrito)}>Confirmar Compra</button>
        </div>
      </div>
    
    </div>
  );
}

export default CarritoDeCompra;
