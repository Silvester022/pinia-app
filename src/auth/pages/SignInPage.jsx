import { Link, useNavigate } from "react-router-dom";
import { saveUser } from "../use-cases/save-user";
import { useState } from "react";

export const SignInPage = () => {

    const navigate = useNavigate();

    const [ optionSelected, setOptionSelected ] = useState('consumer');

    const onRadioChange = ( event ) => {
        setOptionSelected( event.target.value );
    }

    const onCreateUser = (event) => {
        event.preventDefault();

        const { name, username, email, password, checkbox } = event.target.elements;

        const formValues = {
            name: name.value,
            username: username.value,
            email: email.value,
            password: password.value,
            type_of_user: checkbox.value
        };

        const user = saveUser(formValues);

        if (!user) throw new Error('Ha ocurrido un error');

        navigate('/login');
    }

    return (
        <>
            <div className="b-example-divider"></div>

            <div className="modal modal-sheet position-static d-block bg-body-secondary p-2 py-md-3" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-4 pb-4 border-bottom-0">
                            <h1 className="fw-bold mb-0 fs-2"><i>¡Registrate gratis!</i></h1>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>

                        <div className="modal-body p-4 pt-0 mb-4">
                            <form className="" onSubmit={ onCreateUser }>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-3" id="floatingInput1" placeholder="example" name="name" />
                                        <label htmlFor="floatingInput">Nombre</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-3" id="floatingInput2" placeholder="example" name="username" />
                                        <label htmlFor="floatingInput">Usuario</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-3" id="floatingInput3" placeholder="name@example.com" name="email" />
                                        <label htmlFor="floatingInput">Correo</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" name="password" />
                                        <label htmlFor="floatingPassword">Contraseña</label>
                                </div>

                                <hr/>

                                <p className="text-body-secondary"><strong>Tipo de cuenta</strong></p>

                                <div className="list-group list-group-radio d-grid gap-2 border-0 mb-3">
                                    <div className="position-relative">
                                        <input 
                                            className="form-check-input position-absolute top-50 end-0 me-3 fs-5" 
                                            type="radio" 
                                            name="checkbox" 
                                            id="listGroupRadioGrid1" 
                                            value="consumer" 
                                            onChange={ onRadioChange } 
                                            defaultChecked={ optionSelected === 'consumer' } />
                                            <label className="list-group-item py-3 pe-4" htmlFor="listGroupRadioGrid1">
                                                <strong className="fw-semibold">Usuario</strong>
                                                <span className="d-block small opacity-75">Accede, explora y realiza pedidos con comodidad.</span>
                                            </label>
                                    </div>

                                    <div className="position-relative">
                                        <input 
                                            className="form-check-input position-absolute top-50 end-0 me-3 fs-5" 
                                            type="radio" 
                                            name="checkbox" 
                                            id="listGroupRadioGrid2" 
                                            value="merchant"
                                            onChange={ onRadioChange } 
                                            defaultChecked={ optionSelected === 'merchant' } />
                                            <label className="list-group-item py-3 pe-5" htmlFor="listGroupRadioGrid2">
                                                <strong className="fw-semibold">Comerciante</strong>
                                                <span className="d-block small opacity-75">Recibe y envía pedidos con eficacia.</span>
                                            </label>
                                    </div>
                                </div>

                                <button className="w-100 mb-3 btn btn-lg rounded-3" style={{ backgroundColor:"#44596c", color: "white" }} type="submit">Registrarse</button>

                                <small className="text-body-secondary">Al registrarte, estás aceptando nuestros <a href="">términos y condiciones</a></small>

                                <div className="mt-4">
                                    <p>
                                        ¿Ya tienes cuenta? <Link to="/login">INICIA SESION</Link>
                                    </p>
                                </div>

                                <hr className="my-4" />
                                
                                <button className="w-100 mb-3 btn btn-lg rounded-3">
                                    <span>
                                        <img src="/img/icons/facebook.png"/>
                                    </span>
                                    <span className="ms-3">
                                        <img src="/img/icons/google.png" />
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}