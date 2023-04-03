import styles from './Team.module.css';

export const Team = () => {
    return (
        <div className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.heading}>We Are The <span className="text-primary">GameOn</span> Team</h1>
        </div>
        <div className={styles.gallery}>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="row g-0">
                    <div className="col-10" style={{minHeight: "300px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="img/team/Jen.jpg" style={{objectFit: "cover"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                            <a className="btn" href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="bg-light p-4">
                            <h4 className="text-uppercase">Jennifer Adams</h4>
                            <span>CEO</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="row g-0">
                    <div className="col-10" style={{minHeight: "300px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="img/team/John.jpg" style={{objectFit: "cover"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                            <a className="btn" href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="bg-light p-4">
                            <h4 className="text-uppercase">John Smith</h4>
                            <span>Game Developer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="row g-0">
                    <div className="col-10" style={{minHeight: "300px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="img/team/Mary.jpg" style={{objectFit: "cover"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                            <a className="btn" href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="bg-light p-4">
                            <h4 className="text-uppercase">Mary Flinch</h4>
                            <span>HR Specialist</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="row g-0">
                    <div className="col-10" style={{minHeight: "300px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="img/team/Mike.jpg" style={{objectFit: "cover"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                            <a className="btn" href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="bg-light p-4">
                            <h4 className="text-uppercase">Michael Stevenson</h4>
                            <span>UX/UI Designer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="row g-0">
                    <div className="col-10" style={{minHeight: "300px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="img/team/Stef.jpg" style={{objectFit: "cover"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                            <a className="btn" href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="bg-light p-4">
                            <h4 className="text-uppercase">Steffani Jarred</h4>
                            <span>Game Developer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="row g-0">
                    <div className="col-10" style={{minHeight: "300px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="img/team/Tom.jpg" style={{objectFit: "cover"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                            <a className="btn" href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="bg-light p-4">
                            <h4 className="text-uppercase">Tom Rogers</h4>
                            <span>Game Tester</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="row g-0">
                    <div className="col-10" style={{minHeight: "300px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="img/team/Mel.jpg" style={{objectFit: "cover"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                            <a className="btn" href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="bg-light p-4">
                            <h4 className="text-uppercase">Melissa Morris</h4>
                            <span>Sales Representative</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="row g-0">
                    <div className="col-10" style={{minHeight: "300px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="img/team/Brad.jpg" style={{objectFit: "cover"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                            <a className="btn" href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="bg-light p-4">
                            <h4 className="text-uppercase">Bradley Johnson</h4>
                            <span>Advertisement Specialist</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}