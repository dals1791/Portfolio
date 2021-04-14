// NextJs ======================================
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// CSS Modules==================================
import styles from "../styles/home.module.css";
import utilityStyle from "../styles/utility.module.css";
import buttonStyle from "../styles/button.module.css";
import buttonContactStyle from "../styles/buttonContact.module.css";
import buttonAboutStyle from "../styles/buttonAbout.module.css";
// Components ======================================
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sean's Portfolio</title>
        <meta property="og:title" content="Sean's Portfolio" />
        <meta property="og:image" content="/images/MetaImage.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.me}>
          <Image
            src="/images/me.jpg"
            className={utilityStyle.borderCircle}
            height={250}
            width={200}
            quality={100}
            alt="Sean Daly"
          />
        </div>
        <div className={styles.brandContainer}>
          <h1>
            Hi I'm <span className={styles.name}>Sean</span>!
          </h1>

          <div className={styles.brand}>
            <p>Fullstack Developer and Engineer</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/projects">
            <a className={buttonStyle.button}>Projects</a>
          </Link>
          <Link href="/about">
            <a className={buttonAboutStyle.button}>About</a>
          </Link>
          <Link href="/contact">
            <a className={buttonContactStyle.button}>Contact</a>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
