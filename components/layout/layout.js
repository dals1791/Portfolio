// Nextjs ==============================
import Link from "next/link";
// CSS Modules ==============================
import styles from "./layout.module.css";
// Components============================
import Footer from "../footer/footer";

const Layout = ({ children, home }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a style={{ fontSize: "3rem", color: "rgba(28,231,131, 1)" }}>SD.</a>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>

          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
