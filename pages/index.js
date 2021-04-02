import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
// CSS Modules==================================
import styles from "../styles/home.module.css";
import utilityStyle from "../styles/utility.module.css";
import buttonStyles from "../styles/button.module.css";

export default function Home() {
  console.log('helloe')
  return (
    <div>
      <Head>
        <title>Sean's Portfolio</title>
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
          <h1>Hi I'm <span className={styles.name} >Sean</span>!</h1>

          <div className={styles.brand}>
            <p>Fullstack Developer and Engineer</p>
          </div>
        </div>
        <Link href="/projects">
          <a className={buttonStyles.button}>Projects</a>
        </Link>
      </div>
    </div>
  );
}
