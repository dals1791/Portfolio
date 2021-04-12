import React, { useState, useEffect } from "react";
import styles from "../styles/projectCard.module.css";
import Image from "next/image";

const ProjectCard = (props) => {
  const { data, current } = props;
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState(null);
  let display = { display: "none", box: "none" };

  const handleToggle = (id) => {
    setToggle((toggle) => !toggle);
    setTitle(id);
  };

  const renderCards = () => {
    return data.map((entry, index) => {
      const fields = entry.fields;
      const img = fields.img.fields.file.url;
      const frontTech = fields.frontendTech.map((skill, index) => {
        return (
          <p key={index} className={styles.cardSkills}>
            {" "}
            {skill}{" "}
          </p>
        );
      });
      const backTech = fields.backendTech.map((skill, index) => {
        return (
          <p key={index} className={styles.cardSkills}>
            {skill}{" "}
          </p>
        );
      });

      if (toggle) {
        display.display = "flex";
        display.box =
          "inset 0 0 0 200px rgba(0,0,0, 0.85), 0px 0px 24px rgba(126, 202, 156, 1)";
      } else {
        display.display = "none";
        display.box = "none";
      }

      return (
        <>
          <div
            key={fields.title}
            className={styles.cardContainer}
            style={{ transform: `translateX(-${current * 104}%)` }}
          >
            <div
              className={styles.imgContainer}
              style={{
                backgroundImage: `url(${img})`,
              }}
              onClick={() => handleToggle(fields.title)}
            >
              <div
                className={styles.cardText}
                style={{
                  display:
                    fields.title === title ? `${display.display}` : "none",
                  boxShadow: `${display.box}`,
                }}
              >
                <div className={styles.cardDescription}>
                  <p>{fields.description}</p>
                </div>
                <div>
                  <h4>Frontend Tech:</h4>
                  {frontTech}
                  <h4>Backend Tech:</h4>
                  {backTech}
                </div>
              </div>
            </div>
            <div className={styles.cardInfoContainer}>
              <h2 className={styles.cardTitle}>{fields.title}</h2>
              {/* <button className={styles.descriptionButton}>Preview</button> */}
              {toggle && fields.title === title ? (
                <button
                  className={styles.descriptionButton}
                  onClick={() => handleToggle(fields.title)}
                >
                  X
                </button>
              ) : (
                <button
                  className={styles.descriptionButton}
                  onClick={() => handleToggle(fields.title)}
                >
                  More Info
                </button>
              )}
              <a
                href={fields.livelink}
                className={styles.cardButton}
                target="_blank"
              >
                Live Link
              </a>
              <a
                href={fields.github}
                className={styles.cardButton}
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </>
      );
    });
  };
  return <>{renderCards()} </>;
};

export default ProjectCard;
