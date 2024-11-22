import React from "react";
import styles from "../Styles/HomePage/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Driver Drowsiness Detection</h2>
        </div>
        <div className={styles.links}>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
          <a href="#">Contact Us</a>
        </div>
        <div className={styles.socials}>
          <a href="#" className={styles.socialIcon}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className={styles.socialIcon}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className={styles.socialIcon}>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Driver Drowsiness Detection System.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
