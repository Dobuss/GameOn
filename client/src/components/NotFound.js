export const NotFound = () => {
    return (
        <div className="container-fluid py-6 px-5">
        <div className="row g-5">
        <div className="game-info text-center">
                <div className="mb-4">
                    <h1 className="display-5 text-uppercase mb-4">The Page you're looking for <span className="text-primary">does not exist!</span></h1>
                    <img className="img-fluid" src="/img/404.jpg" alt="" style={{maxWidth: "40vw"}}/>
                </div>
                <p className="mb-5" style={{fontSize: 30}}>Seems like you're lost. Use our navigation bar to find your way. <i className="far fa-smile-beam"></i></p>
            </div>
        </div>
    </div>
);
}