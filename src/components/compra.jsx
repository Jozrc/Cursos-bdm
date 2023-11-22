import React from "react";
import { useParams } from "react-router-dom";

const Compra = () => {
    const {id} = useParams();

    return(

        <div className="admin-container">
          <div className="admin-header">
                            <h2>Consulta de Pedidos</h2>
                        </div>
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Numero de Pedido</th>
                                    <th>Producto</th>
                                    <th>Total</th>
                                    <th>Cantidad</th>
                                    <th>Fecha de Compra</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Aquí se agregarán los datos de la tabla */}
                            </tbody>
                        </table>
          </div>

    );
}

export default Compra