import styles from "../styles/skills.module.css";

const Skills = () => {
  return (
    <>
      <div className={styles.frontend}>
        <h4 style={{ margin: "0" }}>Frontend</h4>
        <div className={styles.frontendSkills}>
        <img
          className={styles.skillsIcon}
          src="https://img.icons8.com/color/36/000000/javascript.png"
        />
        <img
          className={styles.skillsIcon}
          src="https://img.icons8.com/plasticine/36/000000/react.png"
        />
        <img
          className={styles.skillsIcon}
          src="https://img.icons8.com/color/36/000000/html-5.png"
        />
        <img
          className={styles.skillsIcon}
          src="https://img.icons8.com/color/36/000000/css3.png"
        />
        <img
          className={styles.skillsIcon}
          src="https://img.icons8.com/color/36/000000/bootstrap.png"
        />
        <img
          className={styles.skillsIcon}
          src="https://img.icons8.com/ios/36/000000/jquery.png"
        />
        </div>
      </div>
      <div className={styles.backend}>
        <h4 style={{ margin: "0" }}>Backend</h4>
        <div className={styles.backendSkills}>
        <img src="https://img.icons8.com/fluent/36/ffffff/ruby-programming-language.png" />
        <img src="https://img.icons8.com/color/36/ffffff/postgreesql.png" />
        <img src="https://img.icons8.com/color/36/ffffff/mongodb.png" />
        <img src="https://img.icons8.com/color/36/000000/nodejs.png" />
        <img src="https://img.icons8.com/color/36/000000/graphql.png" />
        <img src="https://img.icons8.com/color/36/000000/apollo.png" />
        </div>
      </div>
    </>
  );
};
export default Skills;
