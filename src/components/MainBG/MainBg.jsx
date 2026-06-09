// import React from 'react'
import styles from './MainBg.module.scss'

const MainBg = () => {
    const videourl = "https://www.pexels.com/download/video/35258785/";
  return (
    <div className={styles.video}>
        <video src={videourl} autoPlay muted loop></video>

        <div className={styles.gradientEffect}></div>
    </div>

    
  )
}

export default MainBg