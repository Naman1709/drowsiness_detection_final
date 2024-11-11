import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../Styles/AuthPage/AuthPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const credentials = { email, password };

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        navigate("/profile");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={styles["form-group"]}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles["error-message"]}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
