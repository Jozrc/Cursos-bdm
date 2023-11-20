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
        cant_disp: '',
    });


    const [categoria, setcategoria] = useState({
        nombreC: '',
    });
    

    const handleText = e => {
       
        setproducto({
          ...producto,
          [e.target.name]: e.target.value
        })
        console.log(producto)
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

    let {nombreP, descripcion, precio, cant_disp} = producto;
    const  id_user  = userdata.data.user.id_user;
   
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

    const handleSubmit = (event) => {
        event.preventDefault();

        if ( nombreP === '' || descripcion === '' || precio === '' || cant_disp === '') {
            alert('Todos los campos son obligatorios')
            return
        }

        const formData = new FormData();
        formData.append('id_user', id_user);
        formData.append('nombreP', nombreP);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);
        formData.append('cant_disp', cant_disp);
        formData.append('img_prod', image);

        const requestInit = {
            method: 'POST',
            body: formData
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


    // const handleSubmitC = (event) => {
    //     event.preventDefault();

    //     if ( nombreC === '' ) {
    //         alert('Todos los campos son obligatorios')
    //         return
    //     }

    //     const formData = new FormData();
    //     formData.append('id_user', id_user);
    //     formData.append('nombreC', nombreC);
    

    //     const requestInit = {
    //         method: 'POST',
    //         body: formData
    //     }

    //     fetch('http://localhost:5000/postProducto', requestInit)
    //     .then ((res) => res.json())
    //     .then ((res) => {
    //         console.log(res);
    //         window.location.reload(); 
    //     })
    //     .catch(err => { 
    //         console.error(err)
    //     })

    //     setproducto({
    //         nombreP: '',
    //         descripcion: '',
    //         precio: '',
    //         can_disp: '',
    //     })
        


    //     document.getElementById('fileinput').value = null;

    //     console.log(formData);
    //     setImage(null);
    // }


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

                    <div className="form-group">
                                Categoria:
                                <select className="form-control custom-input"
                                id='fileinput'/>
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

                    <div className="boton-addcategoria">
                        <button onClick={handleCategorias} >Crear Categoria</button> 
                    </div>

                    <div className="boton-guardar">
                        <button type="submit" /* onClick={guardarProducto}*/>Guardar Producto</button> 
                    </div>
                </div>
    
            </form>
                    {/* <div id="myModal" class="modal">
                            <div class="modal-content">
                            <span class="close">&times;</span>
                                <form onSubmit={handleSubmit2}> 
                                <div>
                                    Nombre Categoria:
                                    <input type="text" id= "nombre" name="nombre" onChange={handleText}/>
                                </div>
                                <div>
                                    Descripcion:
                                    <textarea type="text" id= "descripcion" name="descripcion" onChange={handleText}/>
                                </div>
                                <div className="boton-guardar">
                                    <button type="submit">Guardar Categoria</button> 
                                </div>
                                </form>
                            </div>
                        </div> */}


        </div>
    );
}

export default Producto;