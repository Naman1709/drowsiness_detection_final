import React from "react"
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>
          Prioritize Your Safety with Advanced Driver Assistance Technology
        </h1>
        <p>
          Stay protected on every journey with smart features designed to
          enhance driver awareness and reduce risks. Our safety technology
          continuously monitors your surroundings and driving behavior, ensuring
          a safer road experience for you and your loved ones.
        </p>
        <div className={styles.buttons}>
          <a href="#" className={styles["btn-primary"]}>
            Get Started
          </a>
          <a href="#" className={styles["btn-secondary"]}>
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
