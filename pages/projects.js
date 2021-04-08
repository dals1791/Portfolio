import React, {useState, useEffect} from 'react'
import Head from "next/head";
import Layout from "../components/layout/layout";
import Skills from "../components/skills"
import Carousel from '../components/carousel/carousel'
import ProjectCard from '../components/projectCard'
import Sort from '../components/sort/sort'
import styles from "../styles/projects.module.css";
import {createClient} from 'contentful'

const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
})
const Projects = () => {
    const [projects, setProjects] = useState([])
    const [skills, setSkills] = useState([])
  
  const getProjectProps = async()=>{
    const projects = await client.getEntries({
      content_type: 'project'
    })
    if (projects.items) return projects.items
  }
  const getSkillsProps = async()=>{
    const skills = await client.getEntries({
      content_type: 'skills'
    })
    if (skills.items) return skills.items
  }
useEffect(()=>{const getProjects=async()=>{
  const allProjects = await getProjectProps()
  const allSkills = await getSkillsProps()
  setProjects([...allProjects])
  setSkills([...allSkills])
  } 
    getProjects()
  }, [])
  console.log("This is is projects", projects)
  console.log("this is skills", skills)
  return (
    <Layout>
      <Head>
        <title>Sean's Projects</title>
      </Head>
      
      <div className={styles.container}>
        <div className={styles.sortBar}>
          <Sort/>
          </div>
        <main className={styles.main}>
         <Carousel data={projects}/> 
        </main>
        <div className={styles.skills}>
          {/* All Icons are from "https://icons8.com" */}
          {/* <h3 style={{margin: "0"}}>Skills</h3>
          <hr /> */}
          {/* {<Skills/>} */}
          </div>
      </div>
    </Layout>
  );
};

export default Projects;
