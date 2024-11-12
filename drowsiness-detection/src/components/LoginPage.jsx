import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../Styles/AuthPage/AuthPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h2>Welcome back</h2>
        <p>Please enter your details to sign in.</p>
        <div className={styles.authButtons}>
          <button className={`${styles.authButton}`}>
            <img src="/google.svg" alt="Google" className={styles.icon} />
            Google
          </button>
          <button className={`${styles.authButton}`}>
            <img src="/github.svg" alt="GitHub" className={styles.icon} />
            GitHub
          </button>
        </div>
        <p>or</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Password" required />
          <div className={styles.options}>
            <label>
              <input type="checkbox" /> Remember for 30 days
            </label>
            <Link to="#">Forgot password</Link>
          </div>
          <button type="submit" className={styles.signInBtn}>Sign in</button>
        </form>
        <p>
          Don’t have an account? <Link to="/signup">Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
