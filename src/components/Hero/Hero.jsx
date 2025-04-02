import React from "react";
import styles from "./Hero.module.css";

// import of images
import ProfilePicture from "/assets/hero/profile_picture.png"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alex Jaegook Kim</h1>
        <p className={styles.description}>
            I'm a ML Software Engineer at Apple 🍎. Passionate about learning and helping others! Feel free to reach out!
        </p>
        <a href="mailto:alexjaegook@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={ProfilePicture}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
