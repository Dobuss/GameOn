import { Link } from "react-router-dom";
import { useState } from "react";
import * as subscriptionService from "../../services/subscriptionService";
import { useContext } from "react";
import { FormValidatorContext } from "../../contexts/FormValidatorContext";
import styles from './Footer.module.css'

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscripton, setSubscription] = useState(false);
  const { UserValidator, errors } = useContext(FormValidatorContext);


  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const createSubscription = (e) => {
    e.preventDefault();
    const data = {
      email: email,
    };
    subscriptionService.saveSubscription(data).then(() => {
      setSubscription(true);
      setEmail("");
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.footerRow}>
          <div className={styles.col1}>
            <Link to="/" className={styles["navbar-brand"]}>
              <h1 className={styles.logoContainer}>
                <i className={`fas fa-gamepad ${styles.icon}`}></i>GameOn
              </h1>
            </Link>
            <p className={styles.paragraph}>
              Hi there, friend! We would love to hear from you! You can find us
              at:
            </p>
            <p className={styles.paragraph}>
              <i className="fa fa-map-marker-alt"></i> Alexander Malinov
              Blvd, Sofia, Bulgaria
            </p>
            <p className={styles.paragraph}>
              <i className="fa fa-phone-alt"></i> +012 345 67890
            </p>
            <p className={styles.paragraph}>
              <Link to="mailto:gameon@email.com"><i className="fa fa-envelope" style={{color: '#fd5d14'}}></i></Link> gameon@email.com
              </p>
            <div className={styles.socialMediaContainer}>
              <Link className={styles.socialMediaBtn} to="https://twitter.com/">
                <i className="fab fa-twitter"></i></Link>
              <Link className={styles.socialMediaBtn} to="https://facebook.com/">
                <i className="fab fa-facebook-f"></i></Link>
              <Link className={styles.socialMediaBtn} to="https://linkedin.com/">
                <i className="fab fa-linkedin-in"></i></Link>
              <Link className={styles.socialMediaBtn} to="https://instagram.com/">
                <i className="fab fa-instagram"></i></Link>
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.col2Wrapper}>
              <div className={styles.quicklinksContainer}>
                <h4 className={styles.quicklinksHeading}>Quick Links</h4>
                <div className={styles.quicklinksWrapper}>
                  <Link className={styles.quickLink} to="/">
                    <i className="fa fa-angle-right"></i> Home
                  </Link>
                  <Link className={styles.quickLink} to="/games">
                    <i className="fa fa-angle-right"></i> Games Catalogue
                  </Link>
                  <Link className={styles.quickLink} to="/team">
                    <i className="fa fa-angle-right"></i> Our Team
                  </Link>
                </div>
              </div>
              <div className={styles.newsletterContainer}>
                <h4 className={styles.quicklinksHeading}>Newsletter</h4>
                  {subscripton && (
                    <p className={styles.paragraph}>
                      You have succesfully subscribed to our newsletter!
                    </p>
                  )}
                <p className={styles.errors}>{errors?.email}</p>
                  {!subscripton && (
                      <form className={styles["input-group"]} onSubmit={createSubscription}>
                      <input
                        type="email"
                        name="email"
                        className={styles.input}
                        placeholder="Your Email Address"
                        value={email}
                        onBlur={UserValidator}
                        onChange={emailChangeHandler}
                      />
                      <button className={`${styles.signUpBtn} ${styles.socialMediaBtn}`} type="submit">
                        Sign Up
                      </button>
                    </form>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerEndContainer}>
        <div className={styles.footerEndWrapper}>
          <div className={styles.footerEndDisclaimer}>
            <p className={styles.paragraph}>
              &copy;{" "}
              <Link to="/" style={{color: '#fff'}}>
                GameOn. All Rights Reserved.
              </Link>
            </p>
          </div>
          <div className={styles.footerEndShape}></div>
        </div>
      </div>
    </>
  );
};
