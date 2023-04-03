import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import styles from './Navigation.module.css'

export const Navigation = () => {
    const {isAuthenticated} = useContext(AuthContext);
    return (
        <div className={styles.container}>
        <nav className={styles.nav}>
            <Link to="/" className={styles["navbar-brand"]}>
                <h1 className={styles.header}><i className="fas fa-gamepad"></i> GameOn</h1>
            </Link>
            <div className={styles.linksContainer}>
                <div className={styles.linksWrapper}>
                    <Link to="/" className={styles.navItem}>Home</Link>
                    <Link to="/games" className={styles.navItem}>Games Catalogue</Link>
                    {isAuthenticated && <Link to="/my-games" className={styles.navItem}>My Games</Link>}
                    <Link to="/team" className={styles.navItem}>Our Team</Link>
                    {isAuthenticated && <Link to="/logout" className={styles.navItemSpecial}>Logout <i className="bi bi-arrow-right"></i></Link>}  
                    {!isAuthenticated && (
                    <>
                    <Link to="/login" className={styles.navItemSpecial}>Sign in <i className="bi bi-arrow-right"></i></Link>
                    <Link to="/register" className={styles.navItemSpecial}>Register <i className="bi bi-arrow-right"></i></Link>
                    </>
                    )} 
                </div>
            </div>
        </nav>
    </div>
    );
}