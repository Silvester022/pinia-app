import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../use-cases";

export const LoginPage = () => {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogin = async(event) => {
        event.preventDefault();
    
        const { username, pass } = event.target.elements;

        const user = await getUser(username.value, pass.value);
        
        const lastPath = localStorage.getItem('lastPath') || '/';
        login( user.id, user.name );

        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <>
            <div className="b-example-divider"></div>

            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <div>
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-4">
                                <i style={{ color: "#44596c" }}>Inicia Sesión</i><small> para comenzar</small>
                            </h1>
                        </div>
                        
                        <p className="col-lg-10 fs-4">
                            ¡Bienvenido a PINIA, tu destino online para explorar mercados y descubrir productos
                            frescos en cualquier temporada! Sumérgete en la experiencia única, donde la
                            búsqueda de tus productos favoritos es tan fácil como un clic.

                        </p>
                    </div>

                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-2 p-md-4 border rounded-3 bg-body-tertiary" onSubmit={ onLogin }>

                            <div className="d-flex justify-content-center align-items-right mb-3">
                                <span style={{ fontSize: "30px", marginTop: "5px", marginRight: "7px" }}>Pinia</span>
                                <img src="/img/icons/pinia.png" height={50} />
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="lorem-ipsum" name="username" />
                                <label htmlFor="floatingInput">Usuario</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="password" name="pass" />
                                <label htmlFor="floatingPassword">Contraseña</label>
                            </div>

                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Recuerdame
                                </label>
                            </div>

                            <button className="w-100 btn btn-lg" style={{ backgroundColor:"#44596c", color: "white" }} type="submit">Iniciar sesión</button>

                            <hr className="my-4" />

                            <div className="text-body-secondary">
                                ¿No tienes cuenta? <Link to="/register" >REGISTRATE</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}