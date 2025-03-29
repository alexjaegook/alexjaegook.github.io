import React from 'react'

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import experience from "../..//data/experience.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Work Experience and Skills</h2>
      <div className={styles.content}>
      <ul className={styles.history}>
          {
            experience.map((experienceItem, id) => {
              return <li key={id} className={styles.historyItem}>
                <img src={experienceItem.imageSrc} alt={`${experienceItem.organisation} Logo`} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${experienceItem.role}, ${experienceItem.organisation}`}</h3>
                  <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                  {/* listing the bullet points for each experience with the .map function*/}
                  <ul>{experienceItem.experiences.map((bullet_point, id) => {
                    return <li key={id}>{bullet_point}</li>
                    })}
                  </ul>
                </div>
              </li>
            })
          }
        </ul>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  )
}
