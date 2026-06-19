// import React from 'react'
import { useEffect, useState } from 'react'
import styles from './Hero.module.scss'
import MainBg from '../../components/MainBG/MainBg'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=> {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100);

    return () => clearTimeout(timer)
  }, [])
  return (
    <section className={styles.section1}>
      <MainBg/>
        <div className={styles.left}>
          <div className={`${styles.text} ${isLoaded? styles.animated: ''}`} >
            <h1>Raw Footage Made Cinematic.</h1>
            <p>High-end editing and sound design built to capture attention instantly, maximize viewer retention, and transform passive viewers into dedicated subscribers.</p>
        </div>

        <div className={`${styles.btns} ${isLoaded? styles.animated: ''}`}>
          <button className={styles.red}><a href="#projects">View Work</a></button>
          <button className={styles.plain}><a href="#about">About Me</a></button>
        </div>
        </div>

        <div className={styles.video}>
          <video autoPlay muted loop controls playsInline src="https://framerusercontent.com/assets/t1Ti4gmACJzDwYuleC4XbdPL0.mp4"></video>
        </div>
    </section>
  )
}

export default Hero