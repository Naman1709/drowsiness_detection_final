import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components//HomePage/Navbar";
import Footer from "./Components/Footer";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import Hero from "./Components/HomePage/Hero";
import DetectionPage from "./Components/DetectionPage";
import HistoryPage from "./Components/HistoryPage";
import UserProfile from "./Components/UserProfile";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/detect" element={<DetectionPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignupPage />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
