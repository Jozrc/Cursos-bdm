import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export const Cotizaciones = ({userdata}) => {
    const {id} = useParams();

    const [cotizacionForm, setCotizacionForm] = useState({
        id_catizacion: '',
        nombreP: '',
        descripcion: '',
        precio: '',
        img_prod: '',
        cant_disp: '',
        fechafin: ''
    })
    console.log(cotizacionForm)

    const [cotizacion, setCotizacion] = useState({
        total: ''
    })

    const handleClick = e => {

        setCotizacion({
          ...cotizacion,
          [e.target.name]: e.target.value
        })
        console.log(cotizacion);
    }
    
    useEffect (() => { 
        fetch(`http://localhost:5000/getCotizaciones/${(id)}`, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
          }).then(
              res => res.json()
          ).then((data) => {
            console.log(data)
            setCotizacionForm({
                id_cotizacion: data.id_cotizacion,
                nombreP: data.nombreP,
                descripcion: data.descripcion,
                precio: data.precio,
                img_prod: data.img_prod,
                cant_disp: data.cant_disp,
                fechafin: data.fechafin
            });
             
          })
          .catch((error) => {
            console.error('Fetch error:', error);
          });
            
      
    }, [id]);
    
    const date = new Date(cotizacionForm.fechafin)
    const formattedDate = date.toLocaleString("es-ES", {
        dateStyle: "short"
    });

    
    const handleSubmit = (iduser, id_cotizacion) => { 

        const cotizacionUser = {id_user: iduser, id_cotizacion: id_cotizacion,total: cotizacion.total} 

        if (iduser === '' || cotizacion.total === ''){
          alert('Favor de dar una cantidad')
          return
        }
      
        const requestInit = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(cotizacionUser),
        }
    
        fetch('http://localhost:5000/postCotizacionesUser', requestInit)
        .then ((res) => res.json())
        .then ((res) => {
            console.log(res)
            setCotizacion({
                total: ''
            })
        })
    
    
      }
    
      const [cotizacionUserData, setcotizacionUserData] = useState([{}])
      useEffect(() => {
          fetch(`http://localhost:5000/getCotizacionesUser`, {
              method: 'GET',
              headers: {'Content-Type': 'application/json'},
              }).then(
                  res => res.json()
              ).then((data) => {
                  console.log(data)
                  if (Array.isArray(data)) {
                      const formattedData = data.map((rows) => {
                          return {
                            ...rows,
                          };
                         
                      }); 

                      formattedData.sort((a, b) => b.total - a.total);

                      setcotizacionUserData(formattedData);
                  } else {
                      console.log('Invalid data format:', data);
                  }
              })
              .catch((error) => {
              console.error('Fetch error:', error);
          }); 
      
      }, []);

    return(
        <div>
            <div className="admin-container">
            <div>
            <img 
            src={URL.createObjectURL(new Blob([new Uint8Array(cotizacionForm.
            img_prod.data)]))}
            alt="Descripción de la imagen"/>
            </div>       
            <div>
                <h1>{cotizacionForm.nombreP}</h1>
                <h5>Descripcion: {cotizacionForm.descripcion}</h5>
                <h5>Precio: ${cotizacionForm.precio}</h5>
                <h5>Fecha fin: {formattedDate}</h5>
            </div>
            </div>
            <form onSubmit={() => handleSubmit(userdata.data?.user.id_user, cotizacionForm.id_cotizacion)} className="profile-info">
            <div className="admin-container">
                <label>Cantidad:</label> 
                <input type="number" name="total" onChange={handleClick}/>
            <div className="save-button">
                <button type="Submit" name="submit" >Puja</button>
            </div>

            </div>
      
            </form>

        <div className="admin-container">
        <div className="admin-header">
  
                    <h2>Consulta de Pedidos</h2>
                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                        <th>Usuario</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad de puja</th>
                        </tr>
                    </thead>
                      
                    <tbody>
                    {Array.isArray(cotizacionUserData) && cotizacionUserData.length > 0 ? (
                        cotizacionUserData.map(item => (
                            <tr key={item.id_cotizacion_user}>
                                <td>{item.usuario}</td>
                                <td>{item.nombreP}</td>
                                <td>${item.precio}</td>
                                <td>${item.total}</td>
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
    );
}

export default Cotizaciones