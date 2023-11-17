import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'
import './Styles/categorias.css';

function Categorias() {
  const { id } = useParams();

  const [userForm, setuserForm] = useState({
    nombre:"",
    apellido_p:"",
    usuario:"",
    rol:"",
    correo:""
  })

  useEffect ( () => { 
    fetch(`http://localhost:5000/getEditUser/${(id)}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      }).then(
          response => response.json()
      ).then((data) => {
        console.log(data)
        setuserForm({
            nombre: data.nombre,
            apellido_p: data.apellido_p,
            usuario: data.usuario,
            rol: data.rol,
            correo:data.correo
        });
      })
      .catch((error) => {
        console.error('Fetch error:', error);
    }); 
    
}, [id]) 

const handleChange = e => {
    setuserForm({
        ...userForm,
        [e.target.name]: e.target.value
    })
};

let {nombre, apellido_p, usuario, rol, correo} = userForm

const handleSubmit = () => {

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('apellido_p', apellido_p);
    formData.append('usuario', usuario);
    formData.append('rol', rol);
    formData.append('correo', correo);

    const requestInit = {
        metod: "PUT",
        body: formData
    }

    fetch(`http://localhost:5000/putUser/${(id)}`, requestInit)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error));
    
};

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
    if (event.target == modal) {
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
                                <form > 
                                <div>
                                    Nombre Categoria:
                                    <input type="text" name="nombreC" />
                                </div>
                                <div>
                                    Descripcion:
                                    <textarea type="text" name="descripcionC" />
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

