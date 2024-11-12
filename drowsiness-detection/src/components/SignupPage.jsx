import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../Styles/AuthPage/AuthPage.module.css";

const SignupPage = () => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h2>Create an account</h2>
        <p>Fill in the details to create your account.</p>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="tel" placeholder="Emergency Contact No." required />
          <input type="tel" placeholder="Alternate Emergency Contact No. (optional)" />
          <button type="submit" className={styles.signUpBtn}>Sign up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
