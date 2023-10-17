import React, { useState } from "react";
import { AiFillStar } from 'react-icons/ai'
import "./Styles/producto.css"

function Producto(){

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null)
    const [imagen, setImagen] = useState(null); 
    

    return(
        <div>
            <form>
                <div className="container">
                    <div>
                        Nombre:
                        <input type="text"/>
                    </div>
                    <div>
                        Descripcion:
                        <input type="textarea"/>
                    </div>
                    <div>
                        Precio:
                        <input type="number"/>
                    </div>
                    <div>
                        Cantidad disponible:
                        <input type="number"/>
                    </div>

                    <div className="star-widgeet">
                        Rating:
                        {[...Array(5)].map((star, index) => {
                            const currentRating = index + 1;
                            
                            return(
                                <label>
                                    <input 
                                        type="radio" 
                                        name="rating" 
                                        value={currentRating}
                                        onClick={() => setRating(currentRating)}
                                    />
                                    <AiFillStar 
                                        className='star' 
                                        size={25}
                                        color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                        onMouseEnter={() => setHover(currentRating)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label> 
                            );  
                            
                        })}
                    
                        {/* <input type="radio" name="rate" className="rate" id="rate-5"/>
                        <label for="rate-5" className="fas fa-star"></label> */}
                    </div>

                    <div>
                        <div className="image-container ">
                            Cargar imagen:
                            <input className="image-container input" type="file" /*onChange={cargarImagen} */ />
                        </div>
                        {imagen && (
                            <div>
                                <img src={imagen} alt="Producto" />
                            </div>
                        )}
                    </div>

                    <div className="boton-guardar">
                    <button /* onClick={guardarProducto}*/>Guardar Producto</button> 
                    </div>

                </div>
                
            </form>
        </div>
    );
}

export default Producto;