import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { getProductByName } from "../use-cases/getProductByName";
import { ShoppingCard } from "../components";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../auth";

export const SearchPage = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        navigate(`?q=${searchText}`)
    }

    // const findMarketName = async (id) => {

    //     try {
    //         const marketName = await getMarketNameById(id);
            
    //         return marketName;

    //     } catch (error) {
    //         throw 'Error fetching product ', error;
    //     }
    // }

    const [product, setProduct] = useState(null);
    const [sendProduct, setSendProduct] = useState([]);

    const productSelected = (event, id) => {
        event.preventDefault();

        const res = product.find(product => product.id === id);

        setSendProduct([...sendProduct, res]);
    }

    useEffect(() => {
        const fetchData = async () => {

            try {
                const productData = await getProductByName(q);

                if (!productData) {
                    return;
                } else {
                    setProduct(productData);
                }

            } catch (error) {
                throw 'Error fetching product ', error;
            }
        }

        fetchData();

    }, [q, navigate]);

    if (!product)
        return <p>Cargando...</p>

    return (
        <>
            <div className="container py-5">
                <div className="row align-items-md-stretch">

                    {/* parte 1. buscar un producto por nombre */}
                    <div className="col-md-6 animate__animated animate__fadeIn">
                        <div className="p-5 rounded-3"
                            style={{ backgroundColor: "#3a4f63" }}
                        >
                            <form onSubmit={onSearchSubmit}>
                                <h2 className="mb-3 fw-normal"
                                    style={{ color: "white" }}
                                >
                                    <strong><i>Ingresa un producto</i></strong></h2>

                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Producto"
                                        name="searchText"
                                        autoComplete="off"
                                        value={searchText}
                                        onChange={onInputChange}
                                    />
                                    <label className="text-black" htmlFor="floatingInput">Producto</label>
                                </div>

                                <button
                                    className="btn btn-lg px-3 me-md-2 fw-bold mt-4"
                                    style={{ backgroundColor: "#296d4f", color: "white" }}
                                    type="submit">
                                    Buscar →
                                </button>

                                <p style={{margin: "0"}} className="mt-3">
                                    <small
                                        className="text-white text-align-end">
                                        Resultados: {product.length}
                                    </small>
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* parte 3. llenar el carrito de compras */}
                    {
                        sendProduct.length > 0 && (<ShoppingCard product={sendProduct} />)
                    }

                </div>

                {/* parte 2. mostrar los productos encontrados */}
                <div className="album p-3 mt-5 mb-5 bg-body-tertiary rounded-3">
                    <div className="container animate__animated animate__fadeIn">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                                {
                                    product.map( (product) => (
                                        <div className="col" key={product.id}>
                                            <div className="card shadow-sm">
                                                <img src={`./img/products/${product.id}.jpg`} className="bd-placeholder-img card-img-top" height="250" />

                                                <div className="card-body">
                                                    <h4 className="card-text">{product.name}</h4>
                                                    <h5 className="card-text">{product.description}</h5>
                                                    <h6 className="card-text">{ product.merchant_name }</h6>

                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                
                                                                <th scope="col">Precio</th>
                                                                <th scope="col">Por</th>
                                                                <th scope="col">Trae</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody style={{textAlign: "center"}}>
                                                            <tr>
                                                                <td>
                                                                    <small>$ </small>
                                                                    {product.price_per_unit}</td>
                                                                <td>{product.type_of_measure}</td>
                                                                <td>{product.units_per_measure}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                    <h2
                                                        style={{textAlign: "end"}}>
                                                        $ {product.total}
                                                    </h2>

                                                    <div className="d-flex justify-content-between">
                                                        <div className="btn-group" role="group">
                                                            <button
                                                                type="button"
                                                                className="btn btn-lg px-3 me-md-2 fw-bold mt-4"
                                                                style={{backgroundColor: "rgb(41, 109, 79)", color: "white"}}
                                                                onClick={(event) => productSelected(event, product.id)} >
                                                                <strong>+</strong>
                                                            </button>
                                                        </div>
                                                        <div>No incluye ITBMS</div>
                                                        <div>Stock: {product.stock}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    )
                                }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}