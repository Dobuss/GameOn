import styles from './AboutUs.module.css'

export const AboutUs = () => {
    return (
        <div className={styles.container}>
        <div className={styles.itemsWrapper}>
            <div className="col-lg-7">
                <h1 className={styles.header}>Welcome to <span className="text-primary">GameOn</span></h1>
                <h4 className={styles.header2}>Have you ever wanted to play a game, but you don't know which one?</h4>
                <p>We tried to come up with a way for gamers to stop wasting time trying to figure out what to play, but to actually have the time to enjoy the wonderful world of gaming.</p>
                <div className={styles.list}>
                    <div className={styles.col}>
                        <p className={styles.item}><i className="fa fa-check text-primary me-3"></i>Browse our evergrowing catalogue</p>
                        <p className={styles.item}><i className="fa fa-check text-primary me-3"></i>Like and comment on your favorite games</p>
                        <p className={styles.item}><i className="fa fa-check text-primary me-3"></i>Add new content</p>
                    </div>
                    <div className={styles.col}>
                        <p className={styles.item}><i className="fa fa-check text-primary me-3"></i>Stay up-to-date with our newsletter</p>
                        <p className={styles.item}><i className="fa fa-check text-primary me-3"></i>Be part of our friendly community</p>
                        <p className={styles.item}><i className="fa fa-check text-primary me-3"></i>Regain your passion for gaming</p>
                    </div>
                </div>
                <p className={styles.item}>Come join us in a new adventure! We promise it's worth it!</p>
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.imgBg}>
                    <img className={styles.img} src="img/game.jpg" style={{objectFit: "contain"}} alt=""/>
                </div>
            </div>
        </div>
    </div>
    );
}