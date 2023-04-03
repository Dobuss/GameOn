import styles from './Topbar.module.css';

export const Topbar = () => {
    return ( <div className={styles.topbarContainer}>
    <div className={styles.wrapper}>
        <div className={styles.firstLastItemWrapper}>
            <div className={styles.firstItemContentWrapper}>
                <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                <div className={styles.text}>
                    <h6 className={styles.textBold}>Our Office</h6>
                    <span>Alexander Malinov Blvd, Sofia, Bulgaria</span>
                </div>
            </div>
        </div>
        <div className={styles.secondItemWrapper}>
            <div className={styles.firstItemContentWrapper}>
                <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                <div className={styles.text}>
                    <h6 className={styles.textBold}>Email Us</h6>
                    <span>gameon@email.com</span>
                </div>
            </div>
        </div>
        <div className={styles.firstLastItemWrapper}>
            <div className={styles.firstItemContentWrapper}>
                <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                <div className={styles.text}>
                    <h6 className={styles.textBold}>Call Us</h6>
                    <span>+012 345 6789</span>
                </div>
            </div>
        </div>
    </div>
</div>);
}