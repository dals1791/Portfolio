import Head from "next/head";
import Layout from "../components/layout";
import Skills from "../components/skills"
import ProjectCard from '../components/projectCard'
import styles from "../styles/projects.module.css";

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Sean's Projects</title>
      </Head>
      
      <div className={styles.container}>
        <div className={styles.sortBar}><h4>Sort bar</h4></div>
        <main className={styles.main}>
          <ProjectCard/>
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
