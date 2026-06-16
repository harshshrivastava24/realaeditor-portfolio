// import React from 'react'
import styles from './MainBg.module.scss'

const MainBg = () => {
    const videourl = "https://res.cloudinary.com/dqxh1dda4/video/upload/v1781524188/BGvideo0_byclsg.mp4";
  return (
    <div className={styles.bgContainer}>
        <video src={videourl} autoPlay muted loop playsInline></video>

        <div className={styles.gradientEffect}></div>
    </div>

    
  )
}

export default MainBg