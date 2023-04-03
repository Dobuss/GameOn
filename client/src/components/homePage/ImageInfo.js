import { Link } from "react-router-dom";
import styles from "./ImageInfo.module.css";

export const ImageInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className="w-100" src="img/assassin.jpeg" alt="assasin" />
        <div className={styles.overlayInfo}>
          <div className={styles.textContainer}>
            <i className="fab fa-playstation fa-4x text-primary mb-4 d-none d-sm-block"></i>
            <h1 className={styles.heading}>
              Embrace the gamer in you
            </h1>
            <Link to="/games" className={styles.btn}>
              Browse Games
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
