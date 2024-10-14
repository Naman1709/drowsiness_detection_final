// src/components/UserProfile.jsx
import React from 'react';

function UserProfile() {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Manage your profile settings here.</p>
      {/* Add more form elements as needed */}
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default UserProfile;
