import { useContext } from "react";
import { AuthContext } from "../../auth";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogout = () => {
        logout();

        navigate('/login', {
            replace: true
        });
    }

    return (
        <>
            <header className="p-3" style={{backgroundColor: "#44596c"}}>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link
                            to="/home"
                            className="d-flex align-items-center px-2 mb-lg-0 text-white text-decoration-none">
                            <img src="/img/icons/pinia.png" className="bi me-2" height="45" role="img" />
                            Pinia
                        </Link>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 px-2">
                            <li className="nav-item nav-link ">
                                <Link
                                    to="/home"
                                    className="nav-link text-white px-2">
                                    Inicio
                                </Link>
                            </li>

                            <li className="nav-item dropdown nav-link px-2">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Provincias
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink
                                            className="dropdown-item disabled"
                                            to="/">
                                            Bocas del toro
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item disabled"
                                            to="/">
                                            Chiriquí
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item"
                                            to="/cocle">
                                            Coclé
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item disabled"
                                            to="/">
                                            Colón
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item disabled"
                                            to="/">
                                            Darién
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item disabled"
                                            to="/">
                                            Herrera
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item disabled"
                                            to="/">
                                            Los Santos
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item"
                                            to="/pma-oeste">
                                            Panamá Oeste
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item"
                                            to="/pma">
                                            Panamá
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item disabled"
                                            to="/">
                                            Veraguas
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item nav-link ">
                                <Link
                                    to="/search"
                                    className="nav-link text-white px-2">
                                    Buscar productos
                                </Link>
                            </li>
                            
                            <li className="nav-item nav-link ">
                                <Link
                                    to="/orders"
                                    className="nav-link text-white px-2">
                                    Mis Pedidos
                                </Link>
                            </li>
                        </ul>

                        {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-bg-light" placeholder="Buscar..." aria-label="Search" />
                        </form> */}

                        <span className="nav-item nav-link" style={{ color: 'white', marginRight: '18px' }}>
                            {user?.name}
                        </span>

                        <div className="text-end">

                            <button
                                type="button"
                                className="btn"
                                style={{backgroundColor: "white"}}
                                onClick={onLogout} >
                                <img src="/img/icons/logout.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="b-example-divider"></div>
        </>
    )
}