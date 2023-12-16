import { useNavigate, useParams } from "react-router-dom";

export const OrderPage = ({ data }) => {

    const {
        total,
        products,
        hora,
        hora2,
        status,
        titulo,
        enLocal
    } = data;

    const product0 = data.products[0];
    const product1 = data.products[1];

    // Desestructurar los atributos de los productos
    const {
        id: id0,
        name: name0,
        price_per_unit: pricePerUnit0,
        type_of_measure: typeOfMeasure0,
        units_per_measure: unitsPerMeasure0,
        description: description0,
        amount: amount0,
        stock: stock0,
        total: total0,
        merchant: merchant0,
        merchant_name: merchantName0,
        create_at: createdAt0,
    } = product0 || {}; // Si product0 es undefined, asigna un objeto vacío para evitar errores

    const {
        id: id1,
        name: name1,
        price_per_unit: pricePerUnit1,
        type_of_measure: typeOfMeasure1,
        units_per_measure: unitsPerMeasure1,
        description: description1,
        amount: amount1,
        stock: stock1,
        total: total1,
        merchant: merchant1,
        merchant_name: merchantName1,
        create_at: createdAt1,
    } = product1 || {};

    return (
        <>

            <div className="my-5">
                <div className="p-4 text-center bg-body-tertiary">
                    <div className="container py-5">
                        {
                            (titulo === "Tu pedido se ha realizado con exito") && (
                                <>
                                    <img src="/img/icons/reload.png" />
                                    <h1 className="text-body-emphasis mt-2">{titulo}</h1>
                                </>
                            )
                        }

                        {
                            (titulo === "Tu pedido ha sido entregado") && (
                                <>
                                    <img src="/img/icons/checklist.png" />
                                    <h1 className="text-body-emphasis mt-2">{titulo}</h1>
                                </>
                            )
                        }

                        {
                            (titulo === "Tu pedido ha sido cancelado") && (
                                <>
                                    <img src="/img/icons/cancel.png" />
                                    <h1 className="text-body-emphasis mt-2">{titulo}</h1>
                                </>
                            )
                        }

                        <p className="col-lg-8 mx-auto lead">
                            La entrega sera en/a <kbd>
                                {
                                    (data.enLocal)
                                        ? "local"
                                        : "domicilio"
                                }
                            </kbd>
                        </p>
                        {
                            (data.hora === 6) && (
                                <>
                                    <h5>Tienes {data.hora} hrs antes de que se retire el pedido</h5>
                                </>
                            )
                        }
                        {
                            (data.hora === 0) && (
                                <>
                                    <h5>Ya fue entregado</h5>
                                </>
                            )
                        }
                        {
                            (data.hora === 2) && (
                                <>
                                    <h5>Fue cancelado</h5>
                                </>
                            )
                        }
                    </div>
                </div>

                <h1 className="mt-3"><strong>Mis ordenes</strong>
                    <code> en {
                        (enLocal)
                            ? "local"
                            : "domicilio"
                    }
                    </code>
                </h1>
                {
                    (status === "progreso") && (
                        <>
                            <h5 className="orders">Todos (1) | En proceso(1) | Entregados(0) | Cancelado(0) | Expirados(0)</h5>
                        </>
                    )
                }

                {
                    (status === "entregado") && (
                        <>
                            <h5 className="orders">Todos (1) | En proceso(0) | Entregados(1) | Cancelado(0) | Expirados(0)</h5>
                        </>
                    )
                }

                {
                    (status === "cancelado") && (
                        <>
                            <h5 className="orders">Todos (1) | En proceso(0) | Entregados(0) | Cancelado(1) | Expirados(0)</h5>
                        </>
                    )
                }

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Orden
                                    </label>
                                </div>
                            </th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Status</th>
                            <th scope="col">Mercado</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="d-flex d-flex justify-content-betwee">
                                fabian00
                                <img
                                    style={{ marginLeft: "10px" }}
                                    src="/img/icons/eye.png" alt="" />
                            </td>
                            <td>{(hora2) ? hora2 : '--'}</td>

                            {
                                (status === "progreso") && (
                                    <>
                                        <td style={{ backgroundColor: "#ffd600", color: "white", fontWeight: "bold" }}>en {status}</td>
                                    </>
                                )
                            }
                            {
                                (status === "entregado") && (
                                    <>
                                        <td style={{ backgroundColor: "#008721", color: "white", fontWeight: "bold" }}>{status}</td>
                                    </>
                                )
                            }
                            {
                                (status === "cancelado") && (
                                    <>
                                        <td style={{ backgroundColor: "#fe0000", color: "white", fontWeight: "bold" }}>{status}</td>
                                    </>
                                )
                            }
                            <td>{merchantName0}, {merchantName1}</td>
                        </tr>
                    </tbody>
                </table>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"># 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>En</th>
                            <th>Unidades</th>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td>{name0}</td>
                            <td>{pricePerUnit0}</td>
                            <td>{typeOfMeasure0}</td>
                            <td>{unitsPerMeasure0} un</td>
                            <td>{description0}</td>
                            <td>{amount0}</td>
                            <td>$ {total0}</td>
                        </tr>
                        <tr>
                            <td>{name1}</td>
                            <td>{pricePerUnit1}</td>
                            <td>{typeOfMeasure1}</td>
                            <td>{unitsPerMeasure1} un</td>
                            <td>{description1}</td>
                            <td>{amount1}</td>
                            <td>$ {total1}</td>
                        </tr>
                        <tr>
                            <td colSpan="5"></td>
                            <th>TOTAL</th>
                            <td>$ {total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <hr className="featurette-divider" />
        </>
    )
}