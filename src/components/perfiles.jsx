import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'
import './Styles/Perfiles.css';

export const Perfiles = () =>{
  const { id } = useParams();
  console.log(id)
  const [userForm, setuserForm] = useState({
    nombre:"",
    apellido_p:"",
    usuario:"",
    correo:""
  })

  const [userRol, setuserRol] = useState({
    rol:"",
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
            correo:data.correo
        });
        setuserRol({
            rol: data.rol
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
    console.log(userForm)
};


const handleSubmit = () => {

    const formeditprofile = 
    {  
        nombre: userForm.nombre,
        apellidoP: userForm.apellido_p,
        usuario: userForm.usuario,
        correo: userForm.correo
    };

    const requestInit = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formeditprofile),
    };

    fetch(`http://localhost:5000/putUser/${id}`, requestInit)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error));
    
};


  return (
    <div>
    { userRol.rol === 1 ? ( 
        <div>

          <div className="profile-container">
          <div className="profile-header">
              <h1>Perfil de Usuario</h1>
          </div>
          <form className="profile-info" onSubmit={() => handleSubmit(id)}>
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

    ) : userRol.rol === 0 ? (
    <div>
        
                 {/* AQUI SOLO PODRIA VERLO EL VENDEDOR */}
         <div className="profile-container">
        <div className="profile-header">
            <h1>Perfil de Vendedor</h1>
        </div>
        <form className="profile-info" onSubmit={() => handleSubmit(id)}>
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
    </div>
       
        
    ) :  (
        <div>
                
                {/* AQUI SOLO PODRIA VERLO EL VENDEDOR */}
        <div className="profile-container">
        <div className="profile-header">
        <h1>Perfil de Administrador</h1>
        </div>
        <form className="profile-info" onSubmit={() => handleSubmit(id)}>
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
                <label>Correo Electrónico:</label>
                <input type="email" name="correo" onChange={handleChange}  value={userForm.correo}/>
            </div>
            <div className="save-button">
            <button type="submit" value="Submit">Guardar Cambios</button>
            </div>
        </form>
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

