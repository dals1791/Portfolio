import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout/layout.js";
import Carousel from "../components/carousel/carousel.js";
import Sort from "../components/sort/sort.js";
import styles from "../styles/projects.module.css";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [sortedProjects, setSortedProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(projects.length)

  const getProjectProps = async () => {
    const projects = await client.getEntries({
      content_type: "project",
    });
    if (projects.items) return projects.items;
  };
  const getSkillsProps = async () => {
    const skills = await client.getEntries({
      content_type: "skills",
    });
    if (skills.items) return skills.items;
  };
  useEffect(() => {
    const getProjects = async () => {
      const allProjects = await getProjectProps();
      const allSkills = await getSkillsProps();
      setProjects([...allProjects]);
      setSkills([...allSkills]);
      setSortedProjects([...allProjects]);
      setCount(allProjects.length)
    };
    getProjects();
  }, []);

  const sortSkills = (name) => {
    let sortedArr = [];
    if (name==="All"){
      sortedArr=projects
    }
    for (let i = 0; i < projects.length; i += 1) {
      if (
        projects[i].fields.frontendTech.includes(name) ||
        projects[i].fields.backendTech.includes(name)
      ) {
        sortedArr.push(projects[i]);
      }
    }
      setSortedProjects(sortedArr)
      setCount(sortedArr.length)
    };

  return (
    <Layout>
      <Head>
        <title>Sean's Projects</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.sortBar}>
          <p style={{margin: ".5rem"}}>Sort By Technology</p>
          <div style={{margin: ".5rem"}}># of Apps: {count}</div>
          <Sort data={skills} sort={sortSkills} setCurrent={setCurrent}/>
          
        </div>
        <main className={styles.main}>
          <Carousel data={sortedProjects} current={current} setCurrent={setCurrent}/>
        </main>
      </div>
    </Layout>
  );
};

export default Projects;
