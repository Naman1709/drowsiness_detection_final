// src/components/UserProfile.jsx
import React, { useState } from "react";
import "../Styles/UserProfilePage/UserProfile.css";

function UserProfile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile saved successfully!");
    // Add logic for saving the changes here
  };

  return (
    <div className="profile">
      <div className="profile-card">
        <h2>User Profile</h2>
        <p className="description">Manage your profile settings here.</p>

        {/* Profile image */}
        <div className="profile-image">
          <img src="src/assets/id.jpg" alt="Profile" />
        </div>

        {/* Form to update user info */}
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
