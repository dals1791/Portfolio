import React, { useState } from "react";
import styles from "../styles/projectCard.module.css";
import Image from "next/image";

const ProjectCard = (props) => {
  const { data } = props;
  const [toggle, setToggle] = useState(false);
  let display = { display: "none", box: "none" };
  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };
  if (toggle) {
    display.display = "flex";
    display.box =
      "inset 0 0 0 200px rgba(0,0,0, 0.85), 0px 0px 24px rgba(126, 202, 156, 1)";
  } else {
    display.display = "none";
    display.box = "none";
  }
  const renderCards = () => {
    return data.map((project) => {
      const fields = project.fields;
      const img = fields.img.fields.file.url;
      console.log(fields)
      return (
        <>
          <div
            className={styles.imgContainer}
            style={{
              backgroundImage: `url(${img})`,
            }}
            onClick={handleToggle}
          >
            <div
              className={styles.cardText}
              style={{
                display: `${display.display}`,
                boxShadow: `${display.box}`,
              }}
            >
              <div className={styles.cardDescription}>
                <p>
                  {fields.description}
                </p>
              </div>
              <div>
                <h4>Frontend Tech:</h4>
                <p>React.js</p>
                <h4>Backend Tech:</h4>
                <p>React.js</p>
              </div>
            </div>
          </div>
          <div className={styles.cardInfoContainer}>
            <h2 className={styles.cardTitle}>{fields.title}</h2>
            <button className={styles.descriptionButton}>Preview</button>
            {toggle ? (
              <button
                className={styles.descriptionButton}
                onClick={handleToggle}
              >
                X
              </button>
            ) : (
              <button
                className={styles.descriptionButton}
                onClick={handleToggle}
              >
                Info
              </button>
            )}
            <a href={fields.livelink} className={styles.cardButton} target="_blank">Live</a>
            <a href={fields.github} className={styles.cardButton} target="_blank">Github</a>
          </div>
        </>
      );
    });
  };

  const background = "https://i.imgur.com/aNz6wUl.jpg?1";
  return <div className={styles.cardContainer}>{renderCards()}</div>;
};

export default ProjectCard;
