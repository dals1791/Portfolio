import React, { useState } from "react";
import styles from "./carousel.module.css";
import ProjectCard from "../projectCard";

const Carousel = ({ data }) => {
  const [current, setCurrent] = useState(0);
  let length = data.length;

  const nextCard = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevCard = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(data) || length <= 0) {
    return null;
  }

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselContent}>
          <div className={styles.contentWrapper}>
            <ProjectCard data={data} current={current} />
          </div>
        </div>
<div className={styles.carouselButtonContainer}>
        <button className={styles.leftArrow} onClick={prevCard}>
          left
        </button>
        <button className={styles.rightArrow} onClick={nextCard}>
          {" "}
          right{" "}
        </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
{
}
{
}
