import React from "react"
import styles from '../../Styles/HomePage/Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.imageCont}>
          <img src="your-image-url-here" alt="Logo" className={styles.logo} />
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
          <li className={styles.signup}>Sign Up</li>
          <li className={styles.login}>Login</li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
