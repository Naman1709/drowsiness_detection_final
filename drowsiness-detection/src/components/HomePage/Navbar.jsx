import React from "react";
import styles from "../../Styles/HomePage/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.imageCont}>
          <img src="src/assets/logo.png" alt="Logo" className={styles.logo} />
        </div>
        <ul className={styles.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/detect">Detect</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <ul className={styles.buttons}>
          <li>
            <Link to="/signup" className={styles.signup}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.login}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
