import React, { useState } from "react";
import miImagen from "./images/registerBDM.png";
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'
import './Styles/Perfiles.css';

function Perfiles() {
 
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null)
  const [imagen, setImagen] = useState(null); 

  return (
    <div>
    <div className="profile-container">
        <div className="profile-header">
            <h1>Perfil de Usuario</h1>
        </div>
        <div className="profile-info">
            <div>
                <label>Nombre:</label>
                <input type="text" defaultValue="John" />
            </div>
            <div>
                <label>Apellido:</label>
                <input type="text" defaultValue="Doe" />
            </div>
            <div>
                <label>Nombre de Usuario:</label>
                <input type="text" defaultValue="JohnDoe123" />
            </div>
            <div>
                <label>Tipo de Usuario:</label>
                <input type="text" defaultValue="Usuario Regular" />
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <input type="email" defaultValue="johndoe@example.com" />
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" defaultValue="********" />
            </div>
            <div>
                <label>Número de Contacto:</label>
                <input type="text" defaultValue="123456789" />
            </div>
        </div>
        <div className="save-button">
            <button>Guardar Cambios</button>
        </div>
    </div>
    <div className="profile-container">
        <div className="profile-header">
            <h1>Perfil de Vendedor</h1>
        </div>
        <div className="profile-info">
            <div>
                <label>Nombre:</label>
                <input type="text" defaultValue="Jane" />
            </div>
            <div>
                <label>Apellido:</label>
                <input type="text" defaultValue="Smith" />
            </div>
            <div>
                <label>Nombre de Usuario:</label>
                <input type="text" defaultValue="JaneSmith" />
            </div>
            <div>
                <label>Tipo de Usuario:</label>
                <input type="text" defaultValue="Usuario Regular" />
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <input type="email" defaultValue="janesmith@example.com" />
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" defaultValue="********" />
            </div>
            <div>
                <label>Número de Contacto:</label>
                <input type="text" defaultValue="987654321" />
            </div>
        </div>
        <div className="save-button">
            <button>Guardar Cambios</button>
        </div>
    </div>
    <div className="product-container">
   
    <div className="product-header">
            <h1>Productos Aprobados</h1>
        </div>

        <form>
            <div className="container">
                <div>
                    Producto:
                    <input type="text" />
                </div>
                <div>
                    Descripción:
                    <input type="textarea" />
                </div>
                <div>
                    Precio:
                    <input type="number" />
                </div>
                <div>
                    Cantidad disponible:
                    <input type="number" />
                </div>
                <div className="star-widget">
                    Rating:
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;

                        return (
                            <label key={currentRating}>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={currentRating}
                                />
                                <AiFillStar
                                    className="star"
                                    size={25}
                                    color={
                                        currentRating <= (hover || rating)
                                            ? "#ffc107"
                                            : "#e4e5e9"
                                    }
                                    onMouseEnter={() =>
                                        setHover(currentRating)
                                    }
                                    onMouseLeave={() => setHover(null)}
                                />
                            </label>
                        );
                    })}
                </div>
            </div>
        </form>
    </div>

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

  );
}

export default Perfiles;

