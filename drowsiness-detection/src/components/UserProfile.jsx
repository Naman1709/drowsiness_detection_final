// src/components/UserProfile.jsx
import React from "react";
import "../Styles/UserProfilePage/UserProfile.css";

function UserProfile() {
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <p>Manage your profile settings here.</p>
      {/* Add more form elements as needed */}
      <div className="image">
        <img src="src/assets/id.png" alt="" />
      </div>
      <form className="container">
        <div className="labels">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="labels">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="labels">
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
