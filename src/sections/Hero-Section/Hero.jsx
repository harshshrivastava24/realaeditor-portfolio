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
    <section id='hero' className={styles.section1}>
      <MainBg/>
        <div className={styles.left}>
          <div className={`${styles.text} ${isLoaded? styles.animated: ''}`} >
            {/* <h1>Raw Footage Made Cinematic.</h1> */}
            <h1>Editing videos that boosts sales</h1>
            {/* <p>High-end editing and sound design built to capture attention instantly, maximize viewer retention, and transform passive viewers into dedicated subscribers.</p> */}
            <p>Professional video editing, motion graphics, and sound design crafted to capture attention, increase retention, and transform ideas into engaging visual stories that audiences remember.</p>
        </div>

        <div className={`${styles.btns} ${isLoaded? styles.animated: ''}`}>
          <button className={styles.red}><a href="#projects">View Work</a></button>
          <button className={styles.plain}><a href="#about">About Me</a></button>
        </div>
        </div>

        <div className={styles.video}>
          {/* <video autoPlay muted loop controls playsInline src="https://framerusercontent.com/assets/t1Ti4gmACJzDwYuleC4XbdPL0.mp4"></video> */}
          <img src="https://res.cloudinary.com/dqxh1dda4/image/upload/f_auto,q_auto/v1782153481/EDITOR_..-4_balwlq.png" alt="" />
        </div>
    </section>
  )
}

export default Hero