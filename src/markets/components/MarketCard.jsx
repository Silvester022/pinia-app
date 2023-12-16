import { Link } from "react-router-dom";

export const MarketCard = ({ id,  name, status, address, time, province, country }) => {

    const imageUrl = `./img/markets/${ id }.jpg`;
    const { weekdays, weekend } = time;
    return (
        <> 
            <div className="mt-5 mb-5 animate__animated animate__fadeIn">
                <div className="row p-3 pb-0 pe-lg-0 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h3 className="display-5 fw-bold lh-1">{ name }</h3>
                    
                        <h4 className="mb-4"><i>{ address }</i></h4>

                        <h5 dangerouslySetInnerHTML={{ __html: weekdays }} />

                        <h5 dangerouslySetInnerHTML={{ __html: weekend }} />

                        <div className="d-grid d-md-flex justify-content-md-center mb-lg-3 mt-4">
                            <Link 
                                type="button" 
                                className="btn btn-lg px-3 me-md-2 fw-bold"
                                style={{backgroundColor: "#296d4f", color: "white"}}
                                to={ `/market/${ id }` } >
                                Entrar →
                            </Link>
                            <button 
                                type="button" 
                                className={
                                    (status === "Abierto") ? "btn btn-lg px-4 text-success" :
                                    (status === "Cerrado") ? "btn btn-lg px-4 text-danger" :
                                    (status === "En reparación") ? "btn btn-lg px-4 text-secondary" :
                                    (status === "Operativo") ? "btn btn-lg px-4 text-primary" :
                                    (status === "Irregular") ? "btn btn-lg px-4 text-warning" :
                                    (status === "En construcción") ? "btn btn-lg px-4 text-dark" : ""
                                }
                                autoFocus={false}>
                                    { status }
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-3" src={ imageUrl } width="450" height="450" />
                    </div>
                </div>
            </div>
        </>
    )
}