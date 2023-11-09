import React, { useState } from "react";
import { AiFillStar } from 'react-icons/ai'
import "./Styles/producto.css"

function EditarProducto(){

    
    const handleSubmit = (event) => {
        event.preventDefault();

        if ( nombreP === '' || descripcion === '' || precio === '' || cant_disp === '') {
            alert('Todos los campos son obligatorios')
            return
        }

        setproducto({
            nombreP: '',
            descripcion: '',
            precio: '',
            can_disp: '',
        })
        
        document.getElementById('fileinput').value = null;

        console.log(formData);
        setImage(null);
    }

    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <div className="container">
                    <div>
                        Producto:
                        <input type="text" name="nombreP" onChange={handleText}/>
                    </div>
                    <div>
                        Descripcion:
                        <textarea type="text" name="descripcion" onChange={handleText}/>
                    </div>
                    <div>
                        Precio:
                        <input type="number" name="precio" onChange={handleText}/>
                    </div>
                    <div>
                        Cantidad disponible:
                        <input type="number" name="cant_disp" onChange={handleText}/>
                    </div>

                    <div className="form-group">
                                Load image: 
                                <input type="file" className="form-control custom-input" accept="image/*" 
                                onChange={handleImageChange} id='fileinput'/>
                    </div>
                    {/* <div className="star-widgeet">
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
                
                    </div> */}
                </div>
                <div className="boton-guardar">
                    <button type="submit" /* onClick={guardarProducto}*/>Guardar Producto</button> 
                    </div>

            </form>
        </div>
    );
}

export default EditarProducto;