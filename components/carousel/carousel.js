// CSS Modules =========================================
import styles from "./carousel.module.css";
// Components =========================================
import ProjectCard from "../projectCard";

const Carousel = ({ data, current, setCurrent }) => {
  let length = data.length;

  const nextCard = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevCard = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(data) || length <= 0) return null;

  return (
    <>
      <button className={styles.arrowDesktop} onClick={prevCard}>
        ❮
      </button>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselContent}>
          <div className={styles.contentWrapper}>
            <ProjectCard data={data} current={current} />
          </div>
        </div>

        <div className={styles.carouselButtonContainer}>
          <button className={styles.leftArrow} onClick={prevCard}>
            ❮
          </button>
          <button className={styles.rightArrow} onClick={nextCard}>
            ❯
          </button>
        </div>
      </div>
      <button className={styles.arrowDesktop} onClick={nextCard}>
        ❯
      </button>
    </>
  );
};

export default Carousel;
