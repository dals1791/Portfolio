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
          <a style={{ fontSize: "3rem", color: "rgba(28,231,131, 1)"}}>SD.</a>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          
          <Link href="/about-me">
            <a>Biography</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      {/* <footer className={styles.footer}> This is footer Section</footer> */}
    </>
  );
};
export default Layout;
