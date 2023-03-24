export const AboutUs = () => {
    return (
        <div className="container-fluid py-6 px-5">
        <div className="row g-5">
            <div className="col-lg-7">
                <h1 className="display-5 text-uppercase mb-4">Welcome to <span className="text-primary">GameOn</span></h1>
                <h4 className="text-uppercase mb-3 text-body">Have you ever wanted to play a game, but you don't know which one?</h4>
                <p>We tried to come up with a way for gamers to stop wasting time trying to figure out what to play, but to actually have the time to enjoy the wonderful world of gaming.</p>
                <div className="row gx-5 py-2">
                    <div className="col-sm-6 mb-2">
                        <p className="fw-bold mb-2"><i className="fa fa-check text-primary me-3"></i>Browse our evergrowing catalogue</p>
                        <p className="fw-bold mb-2"><i className="fa fa-check text-primary me-3"></i>Like and comment on your favorite games</p>
                        <p className="fw-bold mb-2"><i className="fa fa-check text-primary me-3"></i>Add new content</p>
                    </div>
                    <div className="col-sm-6 mb-2">
                        <p className="fw-bold mb-2"><i className="fa fa-check text-primary me-3"></i>Stay up-to-date with our newsletter</p>
                        <p className="fw-bold mb-2"><i className="fa fa-check text-primary me-3"></i>Be part of our friendly community</p>
                        <p className="fw-bold mb-2"><i className="fa fa-check text-primary me-3"></i>Regain your passion for gaming</p>
                    </div>
                </div>
                <p className="mb-4">Come join us in a new adventure! We promise it's worth it!</p>
            </div>
            <div className="col-lg-5 pb-5" style={{minHeight: 400}}>
                <div className="position-relative bg-dark-radial h-100 ms-5">
                    <img className="position-absolute w-100 h-100 mt-5 ms-n5" src="img/game.jpg" style={{objectFit: "contain"}} alt=""/>
                </div>
            </div>
        </div>
    </div>
    );
}