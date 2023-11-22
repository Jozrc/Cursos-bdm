import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'
import './Styles/Perfiles.css';

export const Perfiles = () =>{
  const { id } = useParams();
  const [userForm, setuserForm] = useState({
    nombre:"",
    apellido_p:"",
    usuario:"",
    correo:""
  })

  const [userRol, setuserRol] = useState({
    rol:"",
  })

  const [user, setUser] = useState({
    usuario:'', 
    correo:'', 
    contrasena:'', 
    nombre:'', 
    apellidoP:'', 
    fnacimiento:'', 
    sexo:'',
    rol:''
  });


useEffect ( () => { 
    fetch(`http://localhost:5000/getEditUser/${(id)}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      }).then(
          response => response.json()
      ).then((data) => {
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
};

const handleChangeEdit = e => {
    setEditUserForm({
        ...editUserForm,
        [e.target.name]: e.target.value
    })
};

const handleChangeAdd = e => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })
    console.log(user)
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

const handleSubmitEdit = (id_user) => {

    const formeditprofile = 
    {  
        nombre: editUserForm.nombre,
        apellidoP: editUserForm.apellido_p,
        usuario: editUserForm.usuario,
        correo: editUserForm.correo
    };

    const requestInit = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formeditprofile),
    };

    fetch(`http://localhost:5000/putUser/${id_user}`, requestInit)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error));
    
};

let {usuario, correo, contrasena, nombre, apellidoP, fnacimiento, sexo, rol} = user

const handleSubmitAdd = () => {

    if (usuario === '' || correo === '' || contrasena === '' || nombre === '' || apellidoP === '' || fnacimiento === '' || sexo === '' || rol === ''){
        alert('Todos los campos son obligatorios')
        return
      }
    
      const requestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
      }
  
      fetch('http://localhost:5000/postUser', requestInit)
      .then ((res) => res.json())
      .then ((res) => {
          console.log(res)
      })
  
      //reload state
      setUser({
        usuario:'', 
        correo:'', 
        contrasena:'', 
        nombre:'', 
        apellidoP:'', 
        fnacimiento:'', 
        sexo:'', 
        rol:''
      })
  
    
};

    const [ventasData, setventasData] = useState([{}])
    console.log(ventasData)

    useEffect(() => {
        fetch(`http://localhost:5000/getVentaId/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            }).then(
                response => response.json()
            ).then((data) => {
                if (Array.isArray(data)) {
                    const formattedData = data.map((rows) => {
                        return {
                          ...rows
                        };
                       
                    });  
                    setventasData(formattedData);
                } else {
                    console.log('Invalid data format:', data);
                }
            })
            .catch((error) => {
              console.error('Fetch error:', error);
          }); 
          
    }, [id]);

    const [userData, setuserData] = useState([{}])
    console.log(userData)

    useEffect(() => {

        fetch('http://localhost:5000/getAllUser', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            }).then(
                response => response.json()
            ).then((data) => {
                if (Array.isArray(data)) {
                    const formattedData = data.map((rows) => {
                        return {
                          ...rows
                        };
                       
                    });  
              setuserData(formattedData);
                } else {
                    console.log('Invalid data format:', data);
                }
            })
            .catch((error) => {
              console.error('Fetch error:', error);
          }); 

    }, []);

    const [compraData, setcompraData] = useState([{}])
    useEffect(() => {
        fetch(`http://localhost:5000/getVentaD/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            }).then(
                res => res.json()
            ).then((data) => {
                console.log(data)
                if (Array.isArray(data)) {
                    const formattedData = data.map((rows) => {
                        return {
                          ...rows
                        };
                       
                    });  
                    setcompraData(formattedData);
                } else {
                    console.log('Invalid data format:', data);
                }
            })
            .catch((error) => {
            console.error('Fetch error:', error);
        }); 
    
    }, [id]);


const [detallesData, setDetallesData] = useState([])

const handleverDetalles = (id) => { 

    const obtenerDetalles = async () => {
        try {
            const response = await fetch(`http://localhost:5000/getVentaD/${(id)}`);
            const jsonData = await response.json();
            setDetallesData(jsonData);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    obtenerDetalles();

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



const [editUserForm, setEditUserForm] = useState({})
const [idedit, setIdedit] = useState(null);

  const handleEditUser = (id) => { 

    var modal = document.getElementById('myModalEditUsers');
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
    setIdedit(id)
}

const handleAddUser = (id) => { 

    var modal = document.getElementById('myModalAddUsers');
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
    setIdedit(id)
}

    useEffect(() => {
        fetch(`http://localhost:5000/getEditUser/${idedit}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            }).then(
                res => res.json()
            ).then((data) => {
                console.log(data)
                setEditUserForm({
                    nombre: data.nombre,
                    apellido_p: data.apellido_p,
                    usuario: data.usuario,
                    correo:data.correo
                });
            
            })
            .catch((error) => {
            console.error('Fetch error:', error);
        }); 

    }, [idedit]);

    

    const handleDeleteUser = (id) => { 
        fetch(`http://localhost:5000/putDeleteUser/${id}`, {
            method: 'PUT'
            }).then(
                res => res.json()
            ).then((res) => {
                console.log(res)
            })
            .catch((error) => {
            console.error('Fetch error:', error);
        }); 
       
    }

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
          
                            <h2>Consulta de Pedidos</h2>
                        </div>
                        <table className="admin-table">
                            <thead>
                                <tr>
                                <th>Vendedor</th>
                                <th>Producto</th>
                                <th>Total</th>
                                <th>Cantidad</th>
                                <th>Fecha de Compra</th>
                                </tr>
                            </thead>
                              
                            <tbody>
                            {Array.isArray(compraData) && compraData.length > 0 ? (
                                compraData.map(item => (
                                    <tr key={item.id_venta}>
                                        <td>{item.usuario}</td>
                                        <td>{item.nombreP}</td>
                                        <td>{item.Total}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.fecha}</td>
                                    </tr>
                                ))
                            ): (
                                <tr>
                                    <td colSpan="4">No hay datos disponibles</td>
                                </tr>
                            )}
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
                                    <th>Nombre de Producto</th>
                                    <th>Cantidad comprada</th>
                                    <th>Precio por unidad</th>
                                </tr>
                            </thead>
   
                          
                            <tbody>
                            {Array.isArray(ventasData) && ventasData.length > 0 ? (
                                ventasData.map(item => (
                                    <tr key={item.id_venta}>
                                        <td>{item.nombreP}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.precio}</td>
                                        <td>
                                        <div className="admin-buttons">
                                            <button onClick={() => handleverDetalles(item.id_venta)}>Ver detalles</button>
                                        </div>
                                        </td>
                                    </tr>
                                ))
                            ): (
                                <tr>
                                    <td colSpan="4">No hay datos disponibles</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                        <div className="admin-buttons">
                            <button>Ver detalles</button>
                        </div>
             </div>
    </div>
       
        
    ) :  (
        <div>
                
                {/* AQUI SOLO PODRIA VERLO EL ADMIN */}
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
                                <th>Gestionar</th>
                            </tr>
                            {Array.isArray(userData) && userData.length > 0 ? (
                                userData.map(item => (
                                    <tr key={item.id_user}>
                                        <td>{item.usuario}</td>
                                        {item.rol == 0 ? (
                                            <td>Vendedor</td>
                                            ) : item.rol == 1 ? (
                                            <td>Vendedor</td>
                                            ) : item.rol == 2 ? (
                                            <td>Admin</td>
                                            ) :(<></>)
                                        }
                                        
                                        <td>{item.regdate}</td>
                                        <td>
                                        <div className="admin-buttons">
                                            <button onClick={() => handleEditUser(item.id_user)}>Modificar</button>
                                            <button onClick={() => handleDeleteUser(item.id_user)} >Eliminar</button>
                                            {/* <button onClick={() => handleverDetalles(item.id_venta)}>Ver detalles</button> */}
                                        </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No hay datos disponibles</td>
                                </tr>
                            )}
                        </thead>
                        <tbody>
                            {/* Aquí se agregarán los datos de la tabla */}
                        </tbody>
                    </table>
                    <div className="admin-buttons">
                        <button onClick={handleAddUser}>Agregar</button>
                    </div>
            </div>
            <div className="admin-container">
                        <div className="admin-header">
                            <h2>Ventas</h2>
                        </div>
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Nombre de Producto</th>
                                    <th>Cantidad comprada</th>
                                    <th>Precio por unidad</th>
                                </tr>
                            </thead>
   
                          
                            <tbody>
                            {Array.isArray(ventasData) && ventasData.length > 0 ? (
                                ventasData.map(item => (
                                    <tr key={item.id_venta}>
                                        <td>{item.nombreP}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.precio}</td>
                                    </tr>
                                ))
                            ): (
                                <tr>
                                    <td colSpan="4">No hay datos disponibles</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
             </div>
             <div className="admin-container">
                <div className="admin-header">
          
                            <h2>Consulta de Pedidos</h2>
                        </div>
                        <table className="admin-table">
                            <thead>
                                <tr>
                                <th>Vendedor</th>
                                <th>Producto</th>
                                <th>Total</th>
                                <th>Cantidad</th>
                                <th>Fecha de Compra</th>
                                </tr>
                            </thead>
                              
                            <tbody>
                            {Array.isArray(compraData) && compraData.length > 0 ? (
                                compraData.map(item => (
                                    <tr key={item.id_venta}>
                                        <td>{item.usuario}</td>
                                        <td>{item.nombreP}</td>
                                        <td>{item.Total}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.fecha}</td>
                                    </tr>
                                ))
                            ): (
                                <tr>
                                    <td colSpan="4">No hay datos disponibles</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
          </div>
        </div>

    )}

      <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Nombre de Producto</th>
                        <th>Cantidad comprada</th>
                        <th>Precio por unidad</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(detallesData) && detallesData.length > 0 ? (
                    detallesData.map(item => (
                        <tr key={item.nombreP}>
                            <td>{item.nombreP}</td>
                            <td>{item.cantidad}</td>
                            <td>{item.precio_u}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No hay datos disponibles</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
        
    </div>

    <div id="myModalEditUsers" class="modal">
    <div className="profile-container">
        <div className="profile-header">
            <h1>Editar Perfil de {editUserForm.usuario}</h1>
        </div>
    <form className="profile-info" onSubmit={() => handleSubmitEdit(idedit)}>

            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" onChange={handleChangeEdit}  value={editUserForm.nombre} />
            </div>
            
            <div>
                <label>Apellido:</label>
                <input type="text" name="apellido_p" onChange={handleChangeEdit}  value={editUserForm.apellido_p}/>
            </div>
            <div>
                <label>Nombre de Usuario:</label>
                <input type="text" name="usuario" onChange={handleChangeEdit}  value={editUserForm.usuario}/>
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <input type="email" name="correo" onChange={handleChangeEdit}  value={editUserForm.correo}/>
            </div>
            <div className="save-button">
            <button type="submit" value="Submit">Guardar Cambios</button>
            </div>
        </form>
    </div>
    </div>

    
    <div id="myModalAddUsers" class="modal">
    <div className="profile-container">
        <div className="profile-header">
            <h1>Agregar un Perfil</h1>
        </div>
    <form className="profile-info" onSubmit={handleSubmitAdd}>

            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" onChange={handleChangeAdd}/>
            </div>
            <div>
                <label>Apellido:</label>
                <input type="text" name="apellidoP" onChange={handleChangeAdd}/>
            </div>
            <div>
                <label>Nombre de Usuario:</label>
                <input type="text" name="usuario" onChange={handleChangeAdd}/>
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <input type="email" name="correo" onChange={handleChangeAdd}/>
            </div>
            <h5>Password</h5>
            <div>
            <input type="password" name="contrasena" onChange={handleChangeAdd}  />
            </div>
            <div>
            <label>Birthday</label>
            <input type="date" name="fnacimiento" onChange={handleChangeAdd} className="inputField2" />
            </div>
            <div>
                <label>Gender</label>
                <select name="sexo" onChange={handleChangeAdd} className="inputField2">
                    <option value="0">M</option>
                    <option value="1" selected>F</option>
                </select>
            </div>
            <div>
            <label>Rol</label>
            <select name="rol" onChange={handleChangeAdd}>
                <option value="0">Vendedor</option>
                <option value="1" selected>Comprador</option>
                <option value="2">Vendedor/Comprador</option>
            </select>
            </div>
            <div className="save-button">
            <button type="submit" value="Submit">Guardar Cambios</button>
            </div>
        </form>
    </div>
    </div>
</div>

  );
}

export default Perfiles;

