import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'
import './Styles/categorias.css';

function Categorias() {
    const { id } = useParams();

    const [categorias, setCategorias] = useState({
      nombre:"",
      descripcion:""
    })
  
  const handleText = e => {
         
      setCategorias({
        ...categorias,
        [e.target.name]: e.target.value
      })
      console.log(categorias)
  }
  
  const handleSubmit = (event)  => {
  
      let {nombre, descripcion} = categorias;
  
      event.preventDefault();
      if ( nombre === '' || descripcion === '' ) {
          alert('Todos los campos son obligatorios')
          return
      }
  
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('descripcion', descripcion);
  
      const requestInit = {
          method: 'POST',
          body: formData
      }
  
      fetch('http://localhost:5000/postCategoria', requestInit)
      .then ((res) => res.json())
      .then ((res) => {
          console.log(res);
          window.location.reload(); 
      })
      .catch(err => { 
          console.error(err)
      })
  
  
  }
  
  const handleCategorias = (event)  => {
  
      event.preventDefault();
      // Obtener elementos del DOM
      var modal = document.getElementById('myModal');
      var span = document.getElementsByClassName('close')[0];
  
      // Función para abrir la ventana modal
      modal.style.display = 'block';
      
      // Función para cerrar la ventana modal al hacer clic en la "X"
      span.onclick = function() {
      modal.style.display = 'none';
      };
  
      // Función para cerrar la ventana modal al hacer clic fuera de ella
      window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  };
  
  }
  
  
  
    return (
      <div>
    
      <div className="admin-container">
                  <div className="admin-header">
                      <h2>Administrar Categorias</h2>
                  </div>
                  <table className="admin-table">
                      <thead>
                          <tr>
                              <th>Nombre de Categoria</th>
                              <th>Descripcion</th>
                          </tr>
                      </thead>
                      <tbody>
                          {/* Aquí se agregarán los datos de la tabla */}
                      </tbody>
                  </table>
                  <div className="admin-buttons">
                      <button onClick = {handleCategorias} > Agregar</button>
                      <button onClick = {handleCategorias}> Modificar</button>
                      <button>Eliminar</button>
                  </div>
              </div>
  
              <div id="myModal" class="modal">
                              <div class="modal-content">
                              <span class="close">&times;</span>
                                  <form onSubmit={handleSubmit}> 
                                  <div>
                                      Nombre Categoria:
                                      <input type="text" name="nombre" onChange={handleText}/>
                                  </div>
                                  <div>
                                      Descripcion:
                                      <textarea type="text" name="descripcion" onChange={handleText}/>
                                  </div>
                                  <div className="boton-guardar">
                                      <button type="submit" /* onClick={guardarProducto}*/>Guardar Categoria</button> 
                                  </div>
                                  </form>
                              </div>
                          </div>
      </div>
    );
  }

export default Categorias;

