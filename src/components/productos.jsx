import React, { useState } from "react";
import miImagen from "./images/registerBDM.png";
import { Link } from 'react-router-dom';
import './Styles/Carrito.css';

function CarritoDeCompra() {
  const [items, setItems] = useState([
    { id: 1, nombre: 'Producto 1', descripcion: 'Lorem ipsum dolor...', cantidad: 1 },
    { id: 2, nombre: 'Producto 2', descripcion: 'Lorem ipsum dolor...', cantidad: 1 },
  ]);

  const handleConfirmarCompra = () => {
    // Implementa la lógica para confirmar la compra aquí
    alert('Compra confirmada');
  };

  const handleEliminarArticulo = (itemId) => {
    // Implementa la lógica para eliminar un artículo aquí
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const handleAumentarCantidad = (itemId) => {
    // Implementa la lógica para aumentar la cantidad de un artículo aquí
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setItems(updatedItems);
  };

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
      <div className='banner'>
        <h2 className='subt'>
          Carrito de Compra
        </h2>
      </div>

      <div className='contenedor-productos'>
        {items.map((item) => (
          <div className="producto" key={item.id}>
            <img
              src={miImagen} // Reemplaza con la fuente de tus imágenes
              alt="Descripción de la imagen"
              className={`imagen-producto ${ampliarImagen1 ? "ampliada" : ""}`}
            />
            <h1 className="titulo-producto">{item.nombre}</h1>
            <p className="descripcion">{item.descripcion}</p>
            <div className="acciones">
              <button className="boton-eliminar" onClick={() => handleEliminarArticulo(item.id)}>Eliminar</button>
              <button className="boton-aumentar" onClick={() => handleAumentarCantidad(item.id)}>Aumentar Cantidad</button>
            </div>
            <br />
            <p>Cantidad: {item.cantidad}</p>
          </div>
        ))}

        <div className="acciones-carrito">
          <button className="boton-confirmar" onClick={handleConfirmarCompra}>Confirmar Compra</button>
        </div>
      </div>
    </div>
  );
}

export default CarritoDeCompra;
