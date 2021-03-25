import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import styles from "../styles/projects.module.css";

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Sean's Projects</title>
      </Head>
      <h1>This is the Projects</h1>
      <div className={styles.skills}>
        {/* All Icons are from "https://icons8.com" */}
        <div className={styles.frontend}>
          <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
          <img src="https://img.icons8.com/plasticine/48/000000/react.png" />
          <img src="https://img.icons8.com/color/48/000000/html-5.png"/>
          <img src="https://img.icons8.com/color/48/000000/css3.png"/>
          <img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
          <img src="https://img.icons8.com/ios/48/000000/jquery.png"/>
        </div>
        <div className={styles.backend}>
          <img src="https://img.icons8.com/fluent/48/ffffff/ruby-programming-language.png" />
          <img src="https://img.icons8.com/color/48/ffffff/postgreesql.png" />
          <img src="https://img.icons8.com/color/48/ffffff/mongodb.png" />
          <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
          <img src="https://img.icons8.com/color/48/000000/graphql.png" />
          <img src="https://img.icons8.com/color/48/000000/apollo.png" />
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
