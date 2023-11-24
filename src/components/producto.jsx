import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
        categoria: ''
    });

    const Navegate = useNavigate();

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

    let {nombreP, descripcion, precio, cant_disp, categoria} = producto;
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

        if ( nombreP === '' || descripcion === '' || precio === '' || cant_disp === ''|| categoria === '') {
            alert('Todos los campos son obligatorios')
            return
        }

        const formData = new FormData();
        formData.append('id_user', id_user);
        formData.append('nombreP', nombreP);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);
        formData.append('cant_disp', cant_disp);
        formData.append('categoria', categoria);
        formData.append('img_prod', image);

        const requestInit = {
            method: 'POST',
            body: formData
        }

        fetch('http://localhost:5000/postProducto', requestInit)
        .then ((res) => res.json())
        .then ((res) => {
            console.log(res);
            Navegate('/') 
        })
        .catch(err => { 
            console.error(err)
        })

        setproducto({
            nombreP: '',
            descripcion: '',
            precio: '',
            can_disp: '',
            categoria: ''
        })
        


        document.getElementById('fileinput').value = null;

        console.log(formData);
        setImage(null);
    }

    const handleSubmit2 = (event)  => {
  
        var nombre = document.getElementById('nombre').value;
        var descripcion = document.getElementById('descripcion').value;
    
        event.preventDefault();
        if ( nombre === '' || descripcion === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
    
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);

        var cat= { nombre:nombre, descripcion:descripcion};
     
    
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cat)
        }
    
        fetch('http://localhost:5000/postCategoria', requestInit)
        .then ((res) => res.json())
        .then ((res) => {
            console.log(res);
            alert('Categoria agregada correctamente.')
            window.location.reload(); 
        })
        .catch(err => { 
            console.error(err)
            alert('Categoria no agregada.')
        })
    
    
    }

    const [categoriasData, setCategoriasData] = useState([])

    useEffect(() => {


        const requestInit = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }
    
        fetch('http://localhost:5000/getAllCategorias', requestInit)
        .then ((res) => res.json())
        .then ((data) => {
            console.log(data);
            if (Array.isArray(data)) {
                const filteredData = data.map((rows) => {
                    return {
                        ...rows,
   
                    }  
                });
                 setCategoriasData(filteredData);
            } else {
                console.log('Invalid data format:', data);
            } 
          
        })
        .catch(err => { 
            console.error(err)
            alert('Categoria no agregada.')
        })
    }, []);



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
                                <select className="form-control custom-input" name="categoria" onChange={handleText} id='fileinput'>
                                {categoriasData.map(item => (
                                    <option key={item.id_categoria} value={item.id_categoria}>
                                        {item.nombre}
                                    </option>
                                ))}
                                </select>
                    </div>

                    <div className="boton-addcategoria">
                        <button onClick={handleCategorias} >Crear Categoria</button> 
                    </div>

                    <div className="boton-guardar">
                        <button type="submit" /* onClick={guardarProducto}*/>Guardar Producto</button> 
                    </div>
                </div>
    
            </form>
                    {<div id="myModal" class="modal">
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
                        </div> }


        </div>
    );
}

export default Producto;