import styles from '../styles/projectCard.module.css'
import Image from 'next/image'

const ProjectCard = ()=>{
    const background= 'https://i.imgur.com/aNz6wUl.jpg?1'
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer} 
            style={{
                backgroundImage:`url(${background})`
            }}>
                <div className={styles.cardText}>
                    <p>lorum fnjjfnejnfjnfjndjfnjdnfjdnfjndf</p>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard