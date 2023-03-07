export const Header = () => {
    return (
        <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">Games Catalogue</h1>
        <div className="d-inline-flex text-white">
            <h6 className="text-uppercase m-0"><a href="/">Home</a></h6>
            <h6 className="text-white m-0 px-3">/</h6>
            <h6 className="text-uppercase text-white m-0">Catalogue</h6>
        </div>
    </div>
    );
}