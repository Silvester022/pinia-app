
export const HomePage = () => {

    return (
        <>
            <div className="d-none d-md-block">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/img/home/carousel1.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/home/carousel2.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/home/carousel3.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="container-fluid my-3 pb-3 text-center">
                <div className="row mb-2">
                    <div className="col-md-4">
                        <div className="col-auto d-none d-lg-block">
                            <img src="/img/home/oferta2.webp" width="300" height="200" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-auto d-none d-lg-block">
                            <img src="/img/home/oferta1.webp" width="300" height="200" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-auto d-none d-lg-block">
                            <img src="/img/home/oferta3.jpg" width="300" height="200" alt="" /> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="container marketing text-center mt-5">
                <h2 style={{fontWeight: "600", marginTop: "60px"}}>Categorías más BUSCADAS</h2>
    
                <div className="row">
                    <div className="col-lg-3">
                        <img src="/img/home/frutasyverduras1.jpg" width="140" height="140" className="bd-placeholder-img rounded-circle"
                            alt="" />
                            <p style={{marginTop: "10px"}}>Frutas y Verduras</p>
                    </div>
                    <div className="col-lg-3">
                        <img src="/img/home/carneyaves2.jpg" width="140" height="140" className="bd-placeholder-img rounded-circle"
                            alt="" />
                            <p style={{marginTop: "10px"}}>Carnes y Aves</p>
                    </div>
                    <div className="col-lg-3">
                        <img src="/img/home/Granos y Legumbres.webp" width="140" height="140"
                            className="bd-placeholder-img rounded-circle" alt="" />
                            <p style={{marginTop: "10px"}}>Granos y Legumbres</p>
                    </div>

                    <div className="col-lg-3">
                        <img src="/img/home/Hierbas y Especias.jpg" width="140" height="140"
                            className="bd-placeholder-img rounded-circle" alt="" />
                            <p style={{marginTop: "10px"}}>Hierbas y Especias</p>
                    </div>
                </div>
            </div>

            <h1 className="ml2 mb-5"
                style={{textAlign: "center", marginTop: "100px", marginBottom: "20px", color: "#296d4f", fontFamily: "Arial, Helvetica, sans-serif"}}>
                Celebra
                la Navidad con ahorros Mágicos</h1>

            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/azucar.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h6>Azucar Like Morena 1820Gr</h6>
                            <p className="item-price"><strike>$3.25</strike> <span>$2.72</span></p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/carne.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h6>Carne Molida x kg</h6>
                            <p className="item-price"><strike>$2.50</strike> <span>$1.89</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/cebolla.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h6>Cebolla Amarilla x kg</h6>
                            <p className="item-price"><strike>$0.99</strike> <span>$0.69</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/chuleta.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h6>Chuleta Especial 1/2 lb</h6>
                            <p className="item-price"><strike>$1.88</strike> <span>$1.58</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/culantro.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h6>Culantro</h6>
                            <p className="item-price"><strike>$5.00</strike> <span>$2.99</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/lechuga.webp" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h6>Lechuga</h6>
                            <p className="item-price"><strike>$5.00</strike> <span>$3.99</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/guineo.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h6>Guineo Amarillo</h6>
                            <p className="item-price"><strike>$25.00</strike> <span>$23.99</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/huevo.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content mb-5">
                            <h6>Huevos</h6>
                            <p className="item-price"><strike>$3.20</strike> <span>$2.99</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/pollo.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h6>Pollo x 1/2 lb</h6>
                            <p className="item-price"><strike>$1.00</strike> <span>$0.52</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/puerco.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h6>Pechuga de Pollo 1/2 lb</h6>
                            <p className="item-price"><strike>$1.20</strike> <span>$0.75</span></p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/salchicha.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h6>Salchicha</h6>
                            <p className="item-price"><strike>$2.52</strike> <span>$2.12</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/zanahoria.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content mb-5">
                            <h6>zanahoria</h6>
                            <p className="item-price"><strike>$0.79</strike> <span>$0.39</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/pepino.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h6>Pepino x 1/2 lb</h6>
                            <p className="item-price"><strike>$0.42</strike> <span>$0.22</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/papa.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h6>Papa Nacional 1/2 lb</h6>
                            <p className="item-price"><strike>$0.89</strike> <span>$0.49</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/oreo.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h6>Galletas Oreo</h6>
                            <p className="item-price"><strike>$5.00</strike> <span>$3.99</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="img-box">
                            <img src="/img/home/leche.png" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content mb-5">
                            <h6>Leche Chiricana</h6>
                            <p className="item-price"><strike>$2.99</strike> <span>$2.69</span></p>

                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="featurette-divider" />
        </>
    )
}