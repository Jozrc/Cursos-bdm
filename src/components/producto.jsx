import React, { useState } from "react";
import { AiFillStar } from 'react-icons/ai'
import "./Styles/producto.css"

function Producto({userdata}){

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null)
    
    const [image, setImage] = useState(null);

    const [producto, setproducto] = useState({
        nombreP: '',
        descripcion: '',
        precio: '',
        can_disp: '',
    });

    const { id_user } = userdata.data.user.id_user;

    const handleText = e => {
       
        setproducto({
          ...producto,
          [e.target.name]: e.target.value
        })
        
    }

    const handleImageChange = (event) => {
        const selectedImage = setImage(event.target.files[0]);

        if (selectedImage) {
            const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
            if (selectedImage.size > maxSizeInBytes) {
                alert('Image size is too large. Please select a smaller image.');
                event.target.value = null; // Clear the input
                setImage(null); // Clear the state
            } else {
                setImage(selectedImage);
            }
        }
    };

    let {nombreP, descripcion, precio, can_disp} = producto;

    const handleSubmit = (event) => {
        event.preventDefault();

        if ( nombreP === '' || descripcion === '' || precio === '' || can_disp === '') {
            alert('Todos los campos son obligatorios')
            return
        }

        const formData = new FormData();
        formData.append('id_user', id_user);
        formData.append('nombreP', nombreP);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);
        formData.append('can_disp', can_disp);
        formData.append('img_prod', image);

        const requestInit = {
            method: 'POST',
            body: JSON.stringify(formData)
        }

        fetch('http://localhost:5000/postProducto', requestInit)
        .then ((res) => res.json())
        .then ((res) => {
            console.log(res);
            window.location.reload(); 
        })
        .catch(err => { 
            console.error(err)
        })

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
                        <input type="number" name="can_disp" onChange={handleText}/>
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
                    <button /* onClick={guardarProducto}*/>Guardar Producto</button> 
                    </div>

                    <div className="select-product">
                        <label htmlFor="products">Editar:</label>
                        <select id="products" /*</div>onChange={seleccionarProducto}*/>
                            <option value="">--Seleccione un producto--</option>
                            <option value="producto1">Producto 1</option>
                            <option value="producto2">Producto 2</option>
                            <option value="producto3">Producto 3</option>
                            {/* Agrega más opciones de productos según sea necesario */}
                        </select>
                    </div>
            </form>
        </div>
    );
}

export default Producto;