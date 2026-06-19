// import React from 'react'
import { RiInstagramLine, RiTwitterXLine } from '@remixicon/react'
import styles from './About.module.scss'
const About = () => {
  return (
    <section className={styles.aboutSection}>
       
      <div className={styles.aboutContainer}>
        <div className={styles.head}>
        <h1>About Me</h1>
      </div>

        <div className={styles.about}>
        <h2>Akash Gupta</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nihil inventore. Doloremque, obcaecati blanditiis sequi eius distinctio eveniet! Beatae repellendus incidunt expedita impedit architecto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima expedita, quidem voluptates praesentium temporibus voluptatibus suscipit. Explicabo!</p>
      </div>

      <div className={styles.socials}>
        <RiInstagramLine/>
        <RiTwitterXLine/>
      </div>
      </div>
      <div className={styles.profilePic}>
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Akash Profile pic" />
      </div>
    </section>
  )
}

export default About