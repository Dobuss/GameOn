import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';

export const Navigation = () => {
    const {isAuthenticated} = useContext(AuthContext);
    return (
        <div className="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
        <nav className="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
            <Link to="/" className="navbar-brand">
                <h1 className="m-0 display-4 text-uppercase text-white"><i className="fas fa-gamepad"></i> GameOn</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/games" className="nav-item nav-link">Games Catalogue</Link>
                    <Link to="/team" className="nav-item nav-link">Our Team</Link>
                    {isAuthenticated && <Link to="/logout" className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block">Logout <i className="bi bi-arrow-right"></i></Link>}  
                    {!isAuthenticated && (
                    <>
                    <Link to="/login" className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block">Sign in <i className="bi bi-arrow-right"></i></Link>
                    <Link to="/register" className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block">Register <i className="bi bi-arrow-right"></i></Link>
                    </>
                    )} 
                </div>
            </div>
        </nav>
    </div>
    );
}