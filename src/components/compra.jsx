import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Compra = () => {
    const {id} = useParams();

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

    return(

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
                                <td>${item.Total}</td>
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

    );
}

export default Compra