import React from "react";
import Header from "../Header/Header";
import styles from "./Hero.module.css";
import List from "../List/List";

const Hero = () => {
  return (
    <>
      <Header />
      <div className={styles.hero}>
        <div className={styles.hero_left}>
          <h4 className={styles.welcome}>Welcome Fresheat</h4>
          <h2>Chicago Deep</h2>
          <h2>Pizza King</h2>
        </div>
        <div className={styles.hero_right}>
          <img src="/bucket.png" alt="" height={600} width="auto" />
        </div>
      </div>
      <List/>
    </>
  );
};

export default Hero;
