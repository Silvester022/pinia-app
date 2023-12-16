
export const Footer = () => {

    return (
        <>
            <div className="container" style={{backgroundColor: "f4f5f8"}}>
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Acerca de Pinia</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a className="nav-link p-0 text-body-secondary">Quienes somos</a></li>
                                <li className="nav-item mb-2"><a className="nav-link p-0 text-body-secondary">Trabaja con nosotros</a></li>
                                <li className="nav-item mb-2"><a className="nav-link p-0 text-body-secondary">Mercados</a></li>
                                <li className="nav-item mb-2"><a className="nav-link p-0 text-body-secondary">Pinia Solidario</a></li>
                                <li className="nav-item mb-2"><a className="nav-link p-0 text-body-secondary">Fundación Pinia</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Servicios</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a className="nav-link p-0 text-body-secondary">FullPinia</a></li>
                                <li className="nav-item mb-2"><a className="nav-link p-0 text-body-secondary">Expriencias únicas</a></li>
                                <li className="nav-item mb-2"><a className="nav-link p-0 text-body-secondary">Puntos de venta</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Productos</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a className="nav-link p-0 text-body-secondary">Destacados</a></li>
                                <li className="nav-item mb-2"><a className="nav-link p-0 text-body-secondary">Promociones</a></li>
                                <li className="nav-item mb-2"><a className="nav-link p-0 text-body-secondary">Cupones</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 offset-md-1 mb-3">
                            <form>
                                <h5>¿Quieres recibir ofertas y promociones?</h5>
                                <p>Recibe los mejores descuentos y novedades</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Correo</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Dejanos acá tu e-mail" />
                                    <button className="btn" style={{backgroundColor: "#47ba87", color: "white"}} type="button">Suscribirme</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </footer>
            </div>

            <div className="d-flex justify-content-center align-items-center py-3" style={{backgroundColor: "#44596c"}}>
                <p style={{color: "white", margin: "0"}}>© 2023 Pinia. All rights reserved.</p>

                <ul className="list-unstyled d-flex" style={{margin: "0"}}>
                    <li className="ms-3">
                        <a className="link-body-emphasis" href="">
                            <img src="/img/icons/instagram.png" className="bi" ></img>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="link-body-emphasis" href="">
                            <img src="/img/icons/twitter.png" className="bi" ></img>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
