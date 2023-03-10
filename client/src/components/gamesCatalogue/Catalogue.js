import { Link } from 'react-router-dom';

export const Catalogue = () => {
    return (
        <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto mb-5" style={{maxWidth: 600}}>
            <h1 className="display-5 text-uppercase mb-4">Browse <span className="text-primary">Games</span></h1>
        </div>
        <div className="row g-5">
            <div className="col-lg-4 col-md-6">
                <div className="bg-light">
                    <img className="img-fluid" src="img/resident-evil.jpg" alt=""/>
                    <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <span>Category: action</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</span>
                            </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Resident Evil</h4>
                        <Link className="text-uppercase fw-bold" to="/">See more <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="bg-light">
                    <img className="img-fluid" src="img/need4speed.jpg" alt=""/>
                    <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <span>Category: cars</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</span>
                            </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Need For Speed</h4>
                        <Link className="text-uppercase fw-bold" to="/">See more <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="bg-light">
                    <img className="img-fluid" src="img/fifa.jpg" alt=""/>
                    <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <span>Category: sport</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</span>
                            </div>
                        </div>
                        <h4 className="text-uppercase mb-3">FIFA</h4>
                        <Link className="text-uppercase fw-bold" to="/">See more <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="bg-light">
                    <img className="img-fluid" src="img/assassin.jpeg" alt=""/>
                    <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <span>Category: action</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</span>
                            </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Assassin's Creed</h4>
                        <Link className="text-uppercase fw-bold" to="/">See more <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="bg-light">
                    <img className="img-fluid" src="img/sims.jpg" alt=""/>
                    <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <span>Category: life</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</span>
                            </div>
                        </div>
                        <h4 className="text-uppercase mb-3">SIMS 4</h4>
                        <Link className="text-uppercase fw-bold" to="/">See more <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="bg-light">
                    <img className="img-fluid" src="img/hitman.jpg" alt=""/>
                    <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <span>Category: action</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</span>
                            </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Hitman</h4>
                        <Link className="text-uppercase fw-bold" to="/">See more <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="bg-light">
                    <img className="img-fluid" src="img/mortal.jpg" alt=""/>
                    <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <span>Category: fighter</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</span>
                            </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Mortal Kombat</h4>
                        <Link className="text-uppercase fw-bold" to="/">See more <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="bg-light">
                    <img className="img-fluid" src="img/awayout.jpg" alt=""/>
                    <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <span>Category: Co-Op</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</span>
                            </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Link way out</h4>
                        <Link className="text-uppercase fw-bold" to="/">See more <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-lg justify-content-center m-0">
                    <li className="page-item disabled">
                      <Link className="page-link rounded-0" to="/" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </Link>
                    </li>
                    <li className="page-item active"><Link className="page-link" to="/">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                    <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                    <li className="page-item">
                      <Link className="page-link rounded-0" to="/" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
            </div>
        </div>
    </div>
    );
}