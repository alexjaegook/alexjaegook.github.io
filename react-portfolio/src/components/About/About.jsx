import React from 'react'

import styles from "./About.module.css";

// import pictures
import aboutImage from "/assets/about/me_with_tree.png";
import GT_logo_desktop from "/assets/about/GT_logo_desktop.png";
import GT_logo_mobile from "/assets/about/GT_logo_mobile.png";
import hobby_icon from "/assets/about/hobbies.png";
import apple_icon_desktop from "/assets/about/apple_logo_desktop.png";
import apple_icon_mobile from "/assets/about/apple_logo_mobile.png";
export const About = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img
            src={aboutImage}
            alt="Me with sequoia tree"
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={GT_logo_desktop}
                        alt="GT logo desktop"
                        className={styles.iconDesktop}
                    />
                    <img
                        src={GT_logo_mobile}
                        alt="GT logo mobile"
                        className={styles.iconMobile}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Education</h3>
                        <p>I went to Georgia Tech where I completed by Bachelor's in Computer Science and Master's in Machine Learning.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={apple_icon_desktop}
                        alt="Apple Icon Desktop"
                        className={styles.iconDesktop}
                    />
                    <img
                        src={apple_icon_mobile}
                        alt="Apple Icon Mobile"
                        className={styles.iconMobile}
                    />

                    <div className={styles.aboutItemText}>
                        <h3>Career</h3>
                        <p>I'm part of the Knowledge Platform team that optimizes search for Apple products such as Siri and Spotlight.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                    src={hobby_icon}
                    alt="Hobby Icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Hobbies</h3>
                        <p>I enjoy hiking and going to national parks during my holidays. Otherwise, I like to workout and find ways to improve myself.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
