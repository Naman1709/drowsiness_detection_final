// src/Components/Hero.jsx
import React from "react";
import styles from "../../Styles/HomePage/Hero.module.css";

const Hero = () => (
  <div>
    {/* Hero Section */}
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Enhance Your Driving Safety with Drowsiness Detection Technology</h1>
        <p>
          Our advanced AI system monitors driver awareness to reduce risks and promote safer driving habits. 
          Protect yourself and others with real-time drowsiness detection.
        </p>
        <div className={styles.buttons}>
          <a href="/detect" className={styles["btn-primary"]}>Get Started for Free</a>
          <a href="#" className={styles["btn-secondary"]}>Join the Community</a>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className={styles.features}>
      <h2>Advanced Features for Comprehensive Safety</h2>
      <div className={styles.featureList}>
        <div className={styles.feature}>
          <h3>Real-time Monitoring</h3>
          <p>Continuously tracks driver alertness to prevent accidents caused by drowsiness.</p>
        </div>
        <div className={styles.feature}>
          <h3>Instant Alerts</h3>
          <p>Immediate notifications to warn drivers when drowsiness is detected.</p>
        </div>
        <div className={styles.feature}>
          <h3>Data Insights</h3>
          <p>Access insights on driving habits to improve safety on future trips.</p>
        </div>
      </div>
    </section>

    {/* How It Works Section */}
    <section className={styles.howItWorks}>
      <h2>How It Works</h2>
      <p>Our system uses state-of-the-art AI to analyze eye and facial movements, detecting signs of drowsiness in real-time.</p>
      <div className={styles.steps}>
        <div className={styles.step}>
          <h3>Step 1</h3>
          <p>Camera captures facial landmarks for analysis.</p>
        </div>
        <div className={styles.step}>
          <h3>Step 2</h3>
          <p>AI model processes real-time data for signs of fatigue.</p>
        </div>
        <div className={styles.step}>
          <h3>Step 3</h3>
          <p>Alerts trigger if drowsiness is detected, helping the driver stay alert.</p>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className={styles.benefits}>
      <h2>Who Can Benefit From Our Technology?</h2>
      <div className={styles.benefitList}>
        <div className={styles.benefit}>
          <h3>Professional Drivers</h3>
          <p>Ideal for truck drivers and commercial fleets aiming to reduce accidents.</p>
        </div>
        <div className={styles.benefit}>
          <h3>Families</h3>
          <p>Protect your loved ones by ensuring safe and attentive driving.</p>
        </div>
        <div className={styles.benefit}>
          <h3>Fleet Managers</h3>
          <p>Monitor and manage driver alertness across your entire fleet.</p>
        </div>
      </div>
    </section>

  </div>
);

export default Hero;
