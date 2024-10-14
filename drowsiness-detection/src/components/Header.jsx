// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Stay Alert: Drowsiness Detection</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/detect">Detect</Link>
        <Link to="/history">History</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}

export default Header;
