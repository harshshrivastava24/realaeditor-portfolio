// import React from 'react'
import { RiInstagramLine } from '@remixicon/react'
import logo from '../../assets/logo.webp'
import styles from './About.module.scss'
const About = () => {
  return (
    <section id='about' className={styles.aboutSection}>

      <div className={styles.aboutContainer}>
        <div className={styles.head}>
          <h1>About Me</h1>
        </div>

        <div className={styles.about}>
          <div className={styles.name}>
            <img src={logo} alt="Profile logo" />
            <h2>real aeditor</h2>
          </div>
          <p>I'm a Video Editor and Motion Designer focused on creating content that captures attention and keeps audiences engaged. Through cinematic editing, motion graphics, color grading, and sound design, I help creators and brands transform ideas into compelling visual stories that leave a lasting impact.</p>
        </div>

        <div className={styles.socials}>
          <a href="https://www.instagram.com/realaeditor" target='_blank'>
            <RiInstagramLine />
          </a>
        </div>
      </div>
      <div className={styles.profilePic}>
        <img src={logo} alt="Profile pic" />
      </div>
    </section>
  )
}

export default About