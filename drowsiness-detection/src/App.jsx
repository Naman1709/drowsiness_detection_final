// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import Hero from './components/Hero';
import DetectionPage from './components/DetectionPage';
import HistoryPage from './components/HistoryPage';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/detect" element={<DetectionPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
