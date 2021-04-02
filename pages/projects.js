import React, {useState, useEffect} from 'react'
import Head from "next/head";
import Layout from "../components/layout";
import Skills from "../components/skills"
import ProjectCard from '../components/projectCard'
import styles from "../styles/projects.module.css";
import {createClient} from 'contentful'

const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
})
const Projects = () => {
    const [projects, setProjects] = useState([])
  
  const getStaticProps = async()=>{
    const entries = await client.getEntries()
    if (entries.items) return entries.items
  }
useEffect(()=>{const getProjects=async()=>{
  const allProjects = await getStaticProps()
  setProjects([...allProjects])
  } 
    getProjects()
  }, [])
  
  return (
    <Layout>
      <Head>
        <title>Sean's Projects</title>
      </Head>
      
      <div className={styles.container}>
        <div className={styles.sortBar}><h4>Sort bar</h4></div>
        <main className={styles.main}>
          <ProjectCard data={projects}/>
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
