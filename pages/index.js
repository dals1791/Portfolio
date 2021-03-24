import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
// CSS Modules==================================
import styles from "../styles/home.module.css";
import utilityStyle from "../styles/utility.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sean's Portfolio</title>
      </Head>
      <div className={styles.container}>
        <header></header>
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
        <h1>Hi I'm Sean!</h1>
        <p>Fullstack Developer and Engineer</p>
        <Link href="/projects"><a>Projects</a></Link>
      </div>
    </div>
  );
}
