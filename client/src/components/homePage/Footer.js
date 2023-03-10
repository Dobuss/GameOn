import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
        <div className="footer container-fluid position-relative bg-dark bg-light-radial text-white-50 py-6 px-5">
        <div className="row g-5">
            <div className="col-lg-6 pe-lg-5">
                <Link to="index.html" className="navbar-brand">
                    <h1 className="m-0 display-4 text-uppercase text-white"><i className="fas fa-gamepad text-primary me-2"></i>GameOn</h1>
                </Link>
                <p>Hi there, friend! We would love to hear from you! You can find us at:</p>
                <p><i className="fa fa-map-marker-alt me-2"></i>Alexander Malinov Blvd, Sofia, Bulgaria</p>
                <p><i className="fa fa-phone-alt me-2"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope me-2"></i>gameon@email.com</p>
                <div className="d-flex justify-content-start mt-4">
                    <Link className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" to="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
                    <Link className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" to="https://facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" to="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></Link>
                    <Link className="btn btn-lg btn-primary btn-lg-square rounded-0" to="https://instagram.com/"><i className="fab fa-instagram"></i></Link>
                </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
                <div className="row g-5">
                    <div className="col-sm-6">
                        <h4 className="text-white text-uppercase mb-4">Quick Links</h4>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white-50 mb-2" to="/"><i className="fa fa-angle-right me-2"></i>Home</Link>
                            <Link className="text-white-50 mb-2" to="/games"><i className="fa fa-angle-right me-2"></i>Games Catalogue</Link>
                            <Link className="text-white-50 mb-2" to="/contact"><i className="fa fa-angle-right me-2"></i>Contact us</Link>
                            <Link className="text-white-50 mb-2" to="/login"><i className="fa fa-angle-right me-2"></i>Sign in</Link>
                            <Link className="text-white-50" to="/register"><i className="fa fa-angle-right me-2"></i>Register</Link>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <h4 className="text-white text-uppercase mb-4">Newsletter</h4>
                        <div className="w-100">
                            <div className="input-group">
                                <input type="text" className="form-control border-light" style={{padding: 30}} placeholder="Your Email Address"/><button className="btn btn-primary px-4">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark bg-light-radial text-white border-top border-primary px-0">
        <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="py-4 px-5 text-center text-md-start">
                <p className="mb-0">&copy; <Link className="text-primary" to="/">GameOn</Link>. All Rights Reserved.</p>
            </div>
            <div className="py-4 px-5 bg-primary footer-shape position-relative text-center text-md-end">
                <p className="mb-0">Designed by <Link className="text-dark" to="https://htmlcodex.com">GameOn Crew</Link></p>
            </div>
        </div>
    </div>
        </>
    );
}