import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { getMarketById } from "../use-cases/getMarketById";
import { getProductByMarket } from "../use-cases/getProductByMarket";

export const MarketPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [market, setMarket] = useState(null);
    const [productList, setProductList] = useState([]);

    const onNavigateBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        const fetchData = async () => {

            try {
                const marketData = await getMarketById(id);

                if (!marketData) {
                    //TODO: modificar para que vaya al inicio
                    navigate('/pma');
                } else {
                    setMarket(marketData);
                }

            } catch (error) {
                throw 'Error fetching market', error
            }
        }

        const fetchData2 = async () => {

            try {
                const products = await getProductByMarket(id);
                setProductList(products);

            } catch (error) {
                console.error("Error", error);
            }
        }

        fetchData();
        fetchData2();

    }, [id, navigate])

    if (!market) return <p>Cargando...</p>

    const {
        id: identifier,
        name,
        province,
        country,
        address,
        status
    } = market;

    return (
        <>
            <div className="mt-5"><strong style={{ fontSize: "40px" }}>{province}</strong>, <span style={{ fontSize: "30px" }}>{country}</span></div>

            <div className="container my-5">
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    <h1 className="text-body-emphasis">{name}</h1>
                    <h2 className="text-body-emphasis">{address}</h2>

                    <span
                        style={{ width: "220px", margin: "auto" }}
                        className={
                            (status === "Abierto") ? "badge d-flex text-success-emphasis border border-success-subtle rounded-pill mt-3" :
                                (status === "Cerrado") ? "badge d-flex text-danger-emphasis border border-danger-subtle rounded-pill mt-3" :
                                    (status === "En reparación") ? "badge d-flex text-secondary-emphasis border border-secondary-subtle rounded-pill mt-3" :
                                        (status === "Operativo") ? "badge d-flex text-primary-emphasis border border-primary-subtle rounded-pill mt-3" :
                                            (status === "Irregular") ? "badge d-flex text-warning-emphasis border border-warning-subtle rounded-pill mt-3" :
                                                (status === "En construcción") ? "badge d-flex text-dark-emphasis border border-dark-subtle rounded-pill mt-3" : ""
                        }>
                        <span className="fs-5 mx-auto">{status}</span>
                    </span>

                    <p className="lead">
                        {/* TODO: agregar una descripcion */}
                    </p>

                    <Link
                        type="button"
                        className="btn btn-lg px-3 me-md-2 fw-bold "
                        style={{ backgroundColor: "#296d4f", color: "white" }}
                        onClick={onNavigateBack} >
                        ← Regresar
                    </Link>
                </div>
            </div>

            <div className="container marketing">

                {
                    productList.map((product, index) => (

                        <div key={index}>
                            <hr className="featurette-divider" />

                            <div className="row featurette">
                                <div className="col-md-6" style={{ textAlign: "end" }}>
                                    <h2 className="featurette-heading fw-normal lh-1">
                                        {product.name}
                                    </h2>

                                    <h5
                                        className="text-body-secondary">
                                        {product.description}
                                    </h5>

                                    <p>
                                        <small>$ </small>
                                        <span style={{ fontSize: "50px" }}>
                                            {product.price_per_unit}
                                        </span>
                                    </p>

                                    <small style={{ fontSize: "15px" }}>
                                        ({product.units_per_measure} unidades x {product.type_of_measure})
                                    </small>
                                </div>

                                <div className="col-md-6">
                                    <img src={`/img/products/${product.id}.jpg`} alt="" />
                                </div>
                            </div>

                        </div>
                    ))
                }
                <hr className="featurette-divider" />
            </div>
        </>
    )
}