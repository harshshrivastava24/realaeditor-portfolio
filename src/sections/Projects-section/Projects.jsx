// import React from 'react'
import styles from './Projects.module.scss'
const Projects = () => {
  const links = [
    {
      link: "https://www.pexels.com/download/video/30395754/"
    },
    {
      link: "https://www.pexels.com/download/video/38025179/"
    },
    {
      link: "https://www.pexels.com/download/video/38025179/"
    },
    {
      link: "https://www.pexels.com/download/video/38025179/"
    },
    {
      link: "https://www.pexels.com/download/video/30395754/"
    },
  ]
  return (
    <section className={styles.projectsSection}>
        <div className={styles.top}>
            <div className={styles.head}>Projects</div>
            <h1>Selected Editing Work</h1>
        </div>
        <div className={styles.projects}>
            {links.map((elem, index)=> {
              return (
                <div className={styles.videoContainer} key={index}>
              <video autoPlay muted loop playsInline src={elem.link}></video>
            </div>
              )
            })}
        </div>
    </section>
  )
}

export default Projects