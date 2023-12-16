import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth";
import { Link } from "react-router-dom";
import { saveSale } from "../use-cases/saveSale";

export const ShoppingCard = ({ product }) => {

    const { user } = useContext(AuthContext);

    const [cardProducts, setCardProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [enLocal, setEnLocal] = useState(true);

    useEffect(() => {
        const handleAddProduct = () => {

            const newProduct = product.filter(product => !cardProducts.some(p => p.id === product.id))

            if (newProduct.length > 0)
                setCardProducts(prevProducts => [...prevProducts, ...newProduct]);
        }

        handleAddProduct();

    }, [setCardProducts, product]);

    const onRemoveItem = (event) => {
        event.preventDefault();

        const productId = event.currentTarget.dataset.productId;

        setCardProducts((prevProducts) => {
            const updatedProducts = prevProducts.map((product) =>
                (product.id === productId) && (product.amount > 0)
                    ? { ...product, amount: product.amount - 1 }
                    : product
            );

            const totalAcumulado = updatedProducts.reduce((cont, product) => cont + product.total, 0);

            setTotal(totalAcumulado);

            return updatedProducts.filter((product) => product.amount > 0);
        });

        setCardProducts((prevProducts) => {
            const updatedProducts = prevProducts.map((product) => {
                const totalValue = (product.price_per_unit * product.units_per_measure * product.amount).toFixed(2);
                const totalFormatted = totalValue.includes('.') ? totalValue : totalValue + '.00';

                return {
                    ...product,
                    total: totalFormatted,
                };
            });

            const totalAcumulado = updatedProducts.reduce((cont, product) => cont + product.total, 0);

            setTotal(totalAcumulado);

            return updatedProducts;
        });
    };

    const onAddItem = (event) => {
        event.preventDefault();

        const productId = event.currentTarget.dataset.productId;

        setCardProducts((prevProducts) => {
            const updatedProducts = prevProducts.map((product) =>
                product.id === productId
                    ? { ...product, amount: product.amount + 1 }
                    : product
            );
            return updatedProducts;
        });

        setCardProducts((prevProducts) => {
            const updatedProducts = prevProducts.map((product) => {
                const totalValue = (product.price_per_unit * product.units_per_measure * product.amount).toFixed(2);
                const totalFormatted = totalValue.includes('.') ? totalValue : totalValue + '.00';

                return {
                    ...product,
                    total: totalFormatted,
                };
            });

            return updatedProducts;
        });
    };

    useEffect(() => {
        const updateTotal = () => {
            setCardProducts((prevProducts) => {
                const updatedProducts = prevProducts.map((product) => {
                    const totalValue = (product.price_per_unit * product.units_per_measure * product.amount).toFixed(2);
                    const totalFormatted = totalValue.includes('.') ? totalValue : totalValue + '.00';

                    return {
                        ...product,
                        total: totalFormatted,
                    };
                });

                const totalAcumulado = updatedProducts.reduce((cont, product) => cont + parseFloat(product.total), 0).toFixed(2);

                setTotal(totalAcumulado);

                return updatedProducts;
            });
        };

        updateTotal();
    }, [cardProducts]);

    const onShopping = async(event) => {
        event.preventDefault();

        const res = confirm("¿Quieres realizar la compra?");

        if(res === true) {
            event.preventDefault();

            saveSale( cardProducts, total, enLocal );
            
            alert("Tu pedido se ha realizado con exito :)")
            
        } else {
            return;
        }
    }

    const handleSwithChange = () => {
        setEnLocal(prevEnLocal => !prevEnLocal)
    }

    return (
        <>
            <div className="col-md-6 animate__animated animate__fadeIn">
                <div className="p-5 bg-body-tertiary border rounded-3">

                    <h1
                        className="d-flex justify-content-between mb-3"
                        style={{ fontSize: "22px" }}
                    >
                        <span>
                            Tu carrito, {user.name}
                        </span>

                        <span className="badge bg-primary rounded-pill">{cardProducts.length}</span>
                    </h1>

                    <ul className="list-group">
                        {
                            cardProducts?.map((product) => (
                                <li key={product.id} className="list-group-item d-flex justify-content-between lh-sm">
                                    <div className="me-auto">
                                        <h6 className="my-0"><strong>{product.name}</strong></h6>
                                        <h6
                                            className="text-dark"
                                            style={{ fontSize: "17px" }}>
                                            {product.merchant_name}</h6>
                                        <h6
                                            className="text-dark"
                                            style={{ fontSize: "17px" }}>
                                            {product.units_per_measure} x {product.type_of_measure}</h6>
                                    </div>

                                    <div
                                        className="d-flex justify-content-center align-items-center p-4"
                                        style={{ backgroundColor: "#dcdee2", marginRight: "4px", borderRadius: "5px" }}
                                    >
                                        {product.amount}
                                    </div>

                                    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-product-id={product.id}
                                            onClick={onAddItem} >
                                            +
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-product-id={product.id}
                                            onClick={onRemoveItem} >
                                            -
                                        </button>

                                    </div>

                                    <div className="btn-group-vertical ms-3">
                                        <span className="">
                                            <small>$ </small>
                                            <span
                                                style={{ fontSize: "17px" }}>
                                                {product.total}</span>
                                        </span>
                                    </div>
                                </li>
                            )
                            )
                        }

                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$ {total}</strong>
                        </li>

                        <li className="d-flex justify-content-between mt-2">
                            <small><i>* no incluye ITBMS</i></small>
                        </li>

                        <h6
                            style={{ marginTop: "15px" }}
                        >Forma de retiro</h6>

                        <div>
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckChecked"
                                    checked={enLocal}
                                    onChange={handleSwithChange}
                                />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                    En local
                                </label>
                            </div>
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                    checked={!enLocal}
                                    onChange={handleSwithChange}
                                />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                    A domicilio
                                </label>
                            </div>
                        </div>

                        <form className="card p-2"
                            style={{ marginTop: "15px" }}>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Codigo Promocional" />
                                <button type="submit" className="btn btn-outline-primary">Canjear</button>
                            </div>
                        </form>

                        <form onSubmit={ onShopping }>
                            <button
                                className="btn btn-lg px-3 me-md-2 fw-bold mt-4"
                                style={{ backgroundColor: "#296d4f", color: "white" }}
                                type="submit"
                                >
                                Comprar
                            </button>
                        </form>
                    </ul>
                </div>
            </div >
        </>
    )
};