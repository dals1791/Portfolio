import Head from "next/head";
import Layout from "../components/layout";
import Skills from "../components/skills"
import styles from "../styles/projects.module.css";

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Sean's Projects</title>
      </Head>
      <h1>This is the Projects</h1>
      <div className={styles.container}>
        <main className={styles.main}>
          {/* section for project cards */}
        </main>
        <div className={styles.skills}>
          {/* All Icons are from "https://icons8.com" */}
          <h3 style={{margin: "0"}}>Skills</h3>
          <hr />
          {<Skills/>}
          </div>
      </div>
    </Layout>
  );
};

export default Projects;
