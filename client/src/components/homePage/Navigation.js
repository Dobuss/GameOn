export const Navigation = () => {
    return (
        <div className="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
        <nav className="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
            <a href="index.html" className="navbar-brand">
                <h1 className="m-0 display-4 text-uppercase text-white"><i className="fas fa-gamepad"></i> GameOn</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">Games Catalogue</a>
                    <a href="service.html" className="nav-item nav-link">Contact Us</a>
                    <a href="contact.html" className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block">Sign in <i className="bi bi-arrow-right"></i></a>
                    <a href="/" className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block">Register <i className="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </nav>
    </div>
    );
}