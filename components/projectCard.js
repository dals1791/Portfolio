import React, {useState} from 'react'
import styles from '../styles/projectCard.module.css'
import Image from 'next/image'

const ProjectCard = ()=>{
    const [toggle, setToggle] = useState(false)
    let display= {display: "none", box: "none"};
    const handleToggle=()=>{
        setToggle(toggle=>!toggle)
    }
    if (toggle){
        display.display="flex"
        display.box="inset 0 0 0 200px rgba(0,0,0, 0.85), 0px 0px 24px rgba(126, 202, 156, 1)"
    }else{
        display.display="none"
        display.box="none"
    }
    const background= 'https://i.imgur.com/aNz6wUl.jpg?1'
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer} 
            style={{
                backgroundImage:`url(${background})`
                
            }} onClick={handleToggle}>
                <div className={styles.cardText} style={{display: `${display.display}`, boxShadow: `${display.box}`}}>
                    <div className={styles.cardDescription} >
                        <h4>Project Description</h4>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    </p>
                    </div>
                    <div>
                        <h4>Frontend Tech:</h4>
                        <p>React.js</p>
                        <h4>Backend Tech:</h4>
                        <p>React.js</p>
                    </div>
                    
                </div>
            </div>
            <div className={styles.cardInfoContainer}>
                <h2 className={styles.cardTitle}>Title</h2>
                <button className={styles.cardButton}>Live</button>
                <button className={styles.cardButton}>Github</button>
            </div>

        </div>
    )
}

export default ProjectCard