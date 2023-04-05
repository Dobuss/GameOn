import styles from './Team.module.css';

export const Team = () => {
    return (
        <div className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.heading}>We Are The <span className={styles.highlight}>GameOn</span> Team</h1>
        </div>
        <div className={styles.gallery}>
            <div className={styles.card}>
                <div className={styles.item}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgWrapper}>
                            <img className={styles.img} src="img/team/Jen.jpg"  alt=""/>
                        </div>
                    </div>
                    <div className={styles.linkedinContainer}>
                        <div className={styles.linkedinWrapper}>
                            <a className={styles.btn} href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.detailsWrapper}>
                            <h4 className={styles.employeeName}>Jennifer Adams</h4>
                            <span>CEO</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.item}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgWrapper}>
                            <img className={styles.img} src="img/team/John.jpg"  alt=""/>
                        </div>
                    </div>
                    <div className={styles.linkedinContainer}>
                        <div className={styles.linkedinWrapper}>
                            <a className={styles.btn} href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.detailsWrapper}>
                            <h4 className={styles.employeeName}>John Smith</h4>
                            <span>Game Developer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.item}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgWrapper}>
                            <img className={styles.img} src="img/team/Mary.jpg"  alt=""/>
                        </div>
                    </div>
                    <div className={styles.linkedinContainer}>
                        <div className={styles.linkedinWrapper}>
                            <a className={styles.btn} href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.detailsWrapper}>
                            <h4 className={styles.employeeName}>Mary Flinch</h4>
                            <span>HR Specialist</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.item}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgWrapper}>
                            <img className={styles.img} src="img/team/Mike.jpg"  alt=""/>
                        </div>
                    </div>
                    <div className={styles.linkedinContainer}>
                        <div className={styles.linkedinWrapper}>
                            <a className={styles.btn} href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.detailsWrapper}>
                            <h4 className={styles.employeeName}>Michael Stevenson</h4>
                            <span>UX/UI Designer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.item}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgWrapper}>
                            <img className={styles.img} src="img/team/Stef.jpg"  alt=""/>
                        </div>
                    </div>
                    <div className={styles.linkedinContainer}>
                        <div className={styles.linkedinWrapper}>
                            <a className={styles.btn} href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.detailsWrapper}>
                            <h4 className={styles.employeeName}>Steffani Jarred</h4>
                            <span>Game Developer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.item}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgWrapper}>
                            <img className={styles.img} src="img/team/Tom.jpg"  alt=""/>
                        </div>
                    </div>
                    <div className={styles.linkedinContainer}>
                        <div className={styles.linkedinWrapper}>
                            <a className={styles.btn} href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.detailsWrapper}>
                            <h4 className={styles.employeeName}>Tom Rogers</h4>
                            <span>Game Tester</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.item}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgWrapper}>
                            <img className={styles.img} src="img/team/Mel.jpg"  alt=""/>
                        </div>
                    </div>
                    <div className={styles.linkedinContainer}>
                        <div className={styles.linkedinWrapper}>
                            <a className={styles.btn} href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.detailsWrapper}>
                            <h4 className={styles.employeeName}>Melissa Morris</h4>
                            <span>Sales Representative</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.item}>
                    <div className={styles.imgContainer}>
                        <div className={styles.imgWrapper}>
                            <img className={styles.img} src="img/team/Brad.jpg"  alt=""/>
                        </div>
                    </div>
                    <div className={styles.linkedinContainer}>
                        <div className={styles.linkedinWrapper}>
                            <a className={styles.btn} href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.detailsWrapper}>
                            <h4 className={styles.employeeName}>Bradley Johnson</h4>
                            <span>Advertisement Specialist</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}