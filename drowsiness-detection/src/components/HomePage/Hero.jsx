import React from "react";
import styles from "../../Styles/HomePage/Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => (
  <div className={styles.mainbody}>
    {/* Hero Section */}
    <section className={styles.hero}>
      <div className={styles.mainimg}>
        <img src="src/assets/main_img.jpg" alt="main image" />
      </div>
      <div className={styles.container}>
        <h1>
          Enhance Your Driving Safety with Drowsiness Detection Technology
        </h1>
        <p>
          Our advanced AI system monitors driver awareness to reduce risks and
          promote safer driving habits. Protect yourself and others with
          real-time drowsiness detection.
        </p>
        <div className={styles.buttons}>
          <Link to="/detect" className={styles["btn-primary"]}>
            Get Started for Free
          </Link>
          <Link to="/register" className={styles["btn-secondary"]}>
            Join the Community
          </Link>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className={styles.features}>
      <h2>Advanced Features for Comprehensive Safety</h2>
      <div className={styles.featureContainer}>
        {/* Features List on the Left */}
        <div className={styles.featureList}>
          <div className={styles.feature}>
            <h3>Real-time Monitoring</h3>
            <p>
              Continuously tracks driver alertness to prevent accidents caused
              by drowsiness.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Instant Alerts</h3>
            <p>
              Immediate notifications to warn drivers when drowsiness is
              detected.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Data Insights</h3>
            <p>
              Access insights on driving habits to improve safety on future
              trips.
            </p>
          </div>
        </div>

        {/* Image on the Right */}
        <div className={styles.featureImage}>
          <img
            src="src/assets/detection.jpeg"
            alt="Driver Drowsiness Detection"
          />
        </div>
      </div>
    </section>
    {/* How It Works Section */}
    <section className={styles.howItWorks}>
      <h2>How It Works</h2>
      <p>
        Our system uses state-of-the-art AI to analyze eye and facial movements,
        detecting signs of drowsiness in real-time.
      </p>
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
          <p>
            Alerts trigger if drowsiness is detected, helping the driver stay
            alert.
          </p>
        </div>
      </div>
    </section>

    {/* Image Section */}
    <section className={styles.accidentsSection}>
      <h2 className={styles.title}>
        Many Accidents Happen Because of Driver Drowsiness
      </h2>
      <div className={styles.imageGrid}>
        <div className={styles.imageItem1}>
          <img src="src/assets/accident1.jpg" alt="Accident Prevention" />
        </div>
        <div className={styles.imageItem2}>
          <img src="src/assets/accident2.jpg" alt="Drowsy Driving" />
        </div>
        <div className={styles.imageItem3}>
          <img src="src/assets/accident3.jpg" alt="Driver Alertness" />
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className={styles.benefits}>
      <div className={styles.benefitContent}>
        {/* Image on the left */}
        <div className={styles.imageContainer}>
          <img
            src="src/assets/benefit_img.jpg"
            alt="Driver Drowsiness Technology"
          />
        </div>

        {/* Benefits List on the right */}
        <div className={styles.benefitList}>
          <h2>Who Can Benefit From Our Technology?</h2>
          <ul>
            <li>
              <strong>Professional Drivers:</strong> Ideal for truck drivers and
              commercial fleets aiming to reduce accidents.
            </li>
            <li>
              <strong>Families:</strong> Protect your loved ones by ensuring
              safe and attentive driving.
            </li>
            <li>
              <strong>Fleet Managers:</strong> Monitor and manage driver
              alertness across your entire fleet.
            </li>
          </ul>
        </div>
      </div>
    </section>
    <hr />
  </div>
);

export default Hero;
