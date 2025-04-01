import React from "react";

import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, code, poster},
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.footer}>
        <ul className={styles.skills}>
            {skills.map((skill, id) => {
            return (
                <li key={id} className={styles.skill}>
                {skill}
                </li>
            );
            })}
        </ul>
        <div className={styles.links}>
            <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            Paper
            </a>
            {code && (
            <a
              href={code}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
            )}

            {poster && (
                <a
                href={poster}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                Poster
                </a>
            )}
        </div>
      </div>



    </div>
  );
};
