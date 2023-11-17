import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'
import './Styles/Perfiles.css';

function Perfiles() {
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


  return (
    <div>
    { userForm.rol === 1 ? ( 
          <div className="profile-container">
          <div className="profile-header">
              <h1>Perfil de Usuario</h1>
          </div>
          <form className="profile-info" onSubmit={handleSubmit}>
              <div>
                  <label>Nombre:</label>
                  <input type="text"  name="nombre" onChange={handleChange} value={userForm.nombre} />
              </div>
              <div>
                  <label>Apellido:</label>
                  <input type="text"  name="apellido_p" onChange={handleChange}  value={userForm.apellido_p}/>
              </div>
              <div>
                  <label>Nombre de Usuario:</label>
                  <input type="text"  name="usuario" onChange={handleChange}  value={userForm.usuario}/>
              </div>
              <div>
                  <label>Tipo de Usuario:</label>
                  <select name="rol" onChange={handleChange} className="inputField3" value={userForm.rol}>
                        <option value="0">Vendedor</option>
                        <option value="1">Comprador</option>
                        <option value="2">Vendedor/Comprador</option>
                  </select>
                 
              </div>
              <div>
                  <label>Correo Electrónico:</label>
                  <input type="email" name="correo" onChange={handleChange}  value={userForm.correo}/>
              </div>
            <div className="save-button">
              <button type="submit" value="Submit">Guardar Cambios</button>
            </div>
          </form>
          <div className="admin-container">
                        <div className="admin-header">
                            <h2>COnsulta de Pedidos</h2>
                        </div>
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Numero de Pedido</th>
                                    <th>Producto</th>
                                    <th>Fecha de Compra</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Aquí se agregarán los datos de la tabla */}
                            </tbody>
                        </table>
                        <div className="admin-buttons">
                            <button>Ver detalles</button>
                        </div>
             </div>
      </div>
    ) : (
    <div>
        
                 {/* AQUI SOLO PODRIA VERLO EL VENDEDOR */}
         <div className="profile-container">
        <div className="profile-header">
            <h1>Perfil de Vendedor</h1>
        </div>
        <form className="profile-info" onSubmit={handleSubmit}>
                <div>
                  <label>Nombre:</label>
                  <input type="text" name="nombre" onChange={handleChange}  value={userForm.nombre} />
              </div>
              <div>
                  <label>Apellido:</label>
                  <input type="text" name="apellido_p" onChange={handleChange}  value={userForm.apellido_p}/>
              </div>
              <div>
                  <label>Nombre de Usuario:</label>
                  <input type="text" name="usuario" onChange={handleChange}  value={userForm.usuario}/>
              </div>
              <div>
                  <label>Tipo de Usuario:</label>
                  <select name="rol" onChange={handleChange} className="inputField3" value={userForm.rol}>
                        <option value="0">Vendedor</option>
                        <option value="1">Comprador</option>
                        <option value="2">Vendedor/Comprador</option>
                   </select>
              </div>
              <div>
                  <label>Correo Electrónico:</label>
                  <input type="email" name="correo" onChange={handleChange}  value={userForm.correo}/>
              </div>
              <div className="save-button">
                <button type="submit" value="Submit">Guardar Cambios</button>
              </div>
        </form>
    </div>
    <div className="admin-container">
                        <div className="admin-header">
                            <h2>Ventas</h2>
                        </div>
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Numero de Venta</th>
                                    <th>Comprador</th>
                                    <th>Fecha de Registro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Aquí se agregarán los datos de la tabla */}
                            </tbody>
                        </table>
                        <div className="admin-buttons">
                            <button>Ver detalles</button>
                        </div>
             </div>
          {/* AQUI SOLO PODRIA VERLO EL SUPER ADMIN */}
            <div className="admin-container">
                        <div className="admin-header">
                            <h2>Administrar Perfiles</h2>
                        </div>
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Nombre de Usuario</th>
                                    <th>Rol de Usuario</th>
                                    <th>Fecha de Registro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Aquí se agregarán los datos de la tabla */}
                            </tbody>
                        </table>
                        <div className="admin-buttons">
                            <button>Agregar</button>
                            <button>Modificar</button>
                            <button>Eliminar</button>
                        </div>
             </div>
    </div>
       
        
    )}
  
  
</div>

  );
}

export default Perfiles;

