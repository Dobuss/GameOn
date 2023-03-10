export const Register = () => {
    return (
        <div className="col-lg-8">
                <div className="bg-light text-center p-5">
                    <form>
                        <div className="row g-3">
                        <div className="col-12 col-sm-6">
                                <input type="text" className="form-control border-0" placeholder="First Name" style={{height: 55}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="text" className="form-control border-0" placeholder="Last Name" style={{height: 55}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="text" className="form-control border-0" placeholder="Username" style={{height: 55}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="email" className="form-control border-0" placeholder="Email" style={{height: 55}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="password" className="form-control border-0" placeholder="Password" style={{height: 55}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="password" className="form-control border-0" placeholder="Repeat Password" style={{height: 55}}/>
                            </div>                            
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
}