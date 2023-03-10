export const Contact = () => {
    return (
        <div className="container-fluid py-6 px-5">
        <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="mb-4">
                    <h1 className="display-5 text-uppercase mb-4">Want to <span className="text-primary">GET IN TOUCH?</span></h1>
                </div>
                <p className="mb-5" >We are always at your service! If you have questions or just want to chat with us, do not hesitate to drop us a message.</p>
            </div>
            <div className="col-lg-8">
                <div className="bg-light text-center p-5">
                    <form>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <input type="text" className="form-control border-0" placeholder="Your Name" style={{height: 55}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="email" className="form-control border-0" placeholder="Your Email" style={{height: 55}}/>
                            </div>
                            <div className="col-12">
                                <textarea className="form-control border-0" rows="5" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Submit Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}