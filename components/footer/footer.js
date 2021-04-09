// import Styles =======================================
import styles from "./footer.module.css";
// Fontawesome Components================================
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
// import {fab} from'@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerText}>Sean Daly's Portfolio @2021</div>
        <div className={styles.iconContainer}>
          <a href="https://www.linkedin.com/in/seandaly0593/" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          </a>
          <a href="https://github.com/dals1791" target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faGithubSquare} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
