import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import miImagen from "./images/registerBDM.png";
//import Imagenlogo from "./images/register.png";
import './Styles/index.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function HeaderAndFooterExample({userdata}) {
  const {id_user} = userdata.data?.user

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const [productoForm, setproductoForm] = useState({
    nombreP: "",
  })

  const handleChange = e => {
    setproductoForm({
        ...productoForm,
        [e.target.name]: e.target.value
    })
};

  const [cotizacion, setCotizacion ] = useState({
    fechafin: ''
  })

  const handleClickCotizacion = e => {

    setCotizacion({
      ...cotizacion,
      [e.target.name]: e.target.value
    })
    console.log(cotizacion);
  }

  const handleSubmitCotizacion = (id_producto) => { 
    
    if (cotizacion.fechafin === ''){
      alert('Favor de llenar la fecha')
      return
    }

    const reqbody = {
        id_producto: id_producto,
        fechafin: cotizacion.fechafin
    }

    const requestInit = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(reqbody),
    }

    fetch('http://localhost:5000/postCotizaciones', requestInit)
    .then ((res) => res.json())
    .then ((res) => {
      console.log(res)
      alert("Cotizacion agregada :)")
    })


  }

  const toggleAmpliar1 = (index) => {
    setSelectedImageIndex(index === selectedImageIndex ? null : index);
  };

  const [productoData, setproductoData] = useState([{}])

  const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect ( () => { 

      const nombreP = productoForm.nombreP;
      fetch('http://localhost:5000/getProducto', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        }).then(
            response => response.json()
        ).then((data) => {
          if (Array.isArray(data)) {
            const filteredData = data.filter(
              (producto) =>
                producto.nombreP.toLowerCase().includes(nombreP.toLowerCase()) &&
                (selectedCategory ? producto.id_categoria === selectedCategory : true)
            );

                console.log(data)
                setproductoData(filteredData);
            } else {
              console.log('Invalid data format:', data);
            } 
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
          
    
    }, [productoForm, selectedCategory])  

    const selectedProduct = productoData.find((producto) => {
      if (!selectedCategory) {
        return true; // Mostrar todos si no hay categoría seleccionada
      }
      // Filtrar por categoría seleccionada
      return producto.id_categoria === selectedCategory;
    });
    
    // Verificar si se encontró un producto antes de mapear
    const productsToDisplay = selectedProduct ? [selectedProduct] : [];

    const [categoriasTab, setCategoriasTab] = useState([{}])
    

    useEffect ( () => { 
      fetch('http://localhost:5000/getAllCategorias', {
        method: 'GET'
        }).then(
            response => response.json()
        ).then((data) => {
          console.log(data)
          if (Array.isArray(data)) {
            const formattedData = data.map((rows) => {
                return {
                  ...rows
                };   
           });
           setCategoriasTab(formattedData)
           console.log(data)
          } else {
            console.log('Invalid data format:', data);
          }
          
        }) .catch((error) => {
          console.error('Fetch error:', error);
      });
          
      
  }, []) 

   

    useEffect ( () => { 
      fetch(`http://localhost:5000/getCarritoProducto/${(id_user)}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        }).then(
            response => response.json()
        ).then((data) => {
          console.log(data)
          setCarritoProd({
            id_carrito: data.id_carrito
          })
        })
        .catch((error) => {
          console.error('Fetch error:', error);
      });
          
      
  }, [id_user]) 

  const [carritoProd, setCarritoProd] = useState(
    {
      id_carrito: ""
    }
  );
    const handleSubmit = (id_post) => { 
      
      
      const reqbody = {
          id_post: id_post,
          id_carrito: carritoProd.id_carrito
      }
      console.log()
      const requestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reqbody),
      }
  
      fetch('http://localhost:5000/postCarrito', requestInit)
      .then ((res) => res.json())
      .then ((res) => {
        console.log(res)
        alert("Producto agregado a carrito :)")
      })
  
  
    }


  return (
<div>
<input
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              name="nombreP"
            />
    <div className='baner'>
        <h2 className='subt'>
          Bienvenido
        </h2>
    </div>
<div>
<ul className="opciones">
    {categoriasTab.map((categoria, index) => (
        <li key={index} onClick={() => setSelectedCategory(categoria.id_categoria)}>{categoria.nombre}</li>
       ))}
  </ul>
</div>

   
    <div className='fondo'>

    {productsToDisplay.map((row, index) => (
           
              <div className="planner" key={index}>
                
              <div id="imagen-contenedor" onClick={() => toggleAmpliar1(index)}>
              {row.img_prod && (
              <img
                src={URL.createObjectURL(new Blob([new Uint8Array(row.img_prod.data)]))}
                alt="Descripción de la imagen" 
                className={`imagen-planner ${selectedImageIndex === index ? "ampliada" : ""}`} 
                />
                )}
              </div>
                
              <h1 className="titulo-planner">{row.nombreP}</h1>
              <h5 className="descripcion">
              {row.descripcion}</h5>
              {userdata.data?.user.id_user ? (
                <div >
                  <button type="submit" value="Submit" onClick={() => handleSubmit(row.id_producto)} className="button-planner">Agregar</button>
                  <div>
                  {userdata.data?.user.rol === 0 ? (
                    <div className="custom_cotizacion">
                      Añadir a cotizaciones:
                      <input type="date" name="fechafin"  onChange={handleClickCotizacion}/>
                      <button type="submit" value="Submit" onClick={() => handleSubmitCotizacion(row.id_producto)} className="button-planner">Agregar</button>
                    </div>
                  ) : userdata.data?.user.rol === 2 ? (
                    <div className="custom_cotizacion">
                      Añadir a cotizaciones:
                      <input type="date" name="fechafin" onChange={handleClickCotizacion}/>
                      <button type="submit" value="Submit" onClick={() => handleSubmitCotizacion(row.id_producto)} className="button-planner">Agregar</button>
                    </div>
                ) :
                  (<> </>)}
                  </div>
                </div>

              ) : 
              (<> </>)}
              </div>
               
              ))}
    
    </div>

</div>
    
  );
}

export default HeaderAndFooterExample;