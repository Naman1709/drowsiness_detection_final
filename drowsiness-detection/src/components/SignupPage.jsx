import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../Styles/AuthPage/AuthPage.module.css"; // Import styles

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [alternateEmergencyContact, setAlternateEmergencyContact] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    const userDetails = {
      name,
      email,
      password,
      emergencyContact,
      alternateEmergencyContact,
    };

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful:", data);
        navigate("/login");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSignup}>
        <div className={styles["form-group"]}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div className={styles["form-group"]}>
          <label>Emergency Contact No.:</label>
          <input
            type="tel"
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
            required
            pattern="^[0-9]{10}$" // Regex for a 10-digit phone number
            placeholder="Enter 10-digit number"
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Alternate Emergency Contact No. (optional):</label>
          <input
            type="tel"
            value={alternateEmergencyContact}
            onChange={(e) => setAlternateEmergencyContact(e.target.value)}
            pattern="^[0-9]{10}$" // Regex for a 10-digit phone number
            placeholder="Enter 10-digit number (optional)"
          />
        </div>
        {error && <p className={styles["error-message"]}>{error}</p>}
        <button type="submit">Signup</button>
      </form>
      <p>
        Already a user? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignupPage;
