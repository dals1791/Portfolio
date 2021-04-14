// CSS Modules =======================================
import styles from "./footer.module.css";
// Fontawesome Components================================
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerText}>Sean Daly's Portfolio - 2021</div>
        <div className={styles.iconContainer}>
          <a
            href="https://www.linkedin.com/in/seandaly0593/"
            target="_blank"
            alt="LinkedIn"
          >
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          </a>
          <a href="https://github.com/dals1791" target="_blank" alt="Github">
            <FontAwesomeIcon className={styles.icon} icon={faGithubSquare} />
          </a>
          <a
            href="https://docs.google.com/document/d/1KNdibA1WerS1_EAyH-B6Vz1bBqMrycjnbZXZwfDzO9A/edit?usp=sharing"
            target="_blank"
            alt="Resume"
          >
            <FontAwesomeIcon className={styles.icon} icon={faFile} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
