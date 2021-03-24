import Image from "next/image";
import Head from "next/head";
import styles from "./layout.module.css";
import utilityStyle from "../styles/utility.module.css";
import Link from "next/link";

const Layout = ({ children, home }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a style={{ fontSize: "3rem" }}>SD.</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>

        <Link href="/about-me">
          <a>More About Me</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}> This is footer Section</footer>
    </>
  );
};
export default Layout;
