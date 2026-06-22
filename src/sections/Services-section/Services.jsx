// import React from 'react'
import { useEffect, useState } from 'react';
import styles from './Services.module.scss'

const Services = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const [isLoaded, setIsLoaded] = useState(false)
  
    useEffect(()=> {
        const timer = setTimeout(() => {
          setIsLoaded(true)
        }, 100);
    
        return () => clearTimeout(timer)
      }, [])

  return (
    <section className={styles.services}>
      <div className={styles.head}>
        <div className={`${styles.heading} ${isLoaded? styles.animated: ''}`}>Services</div>
        <p>Everything you need to scale your content.</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="https://res.cloudinary.com/dqxh1dda4/image/upload/f_auto,q_auto/v1782130139/Motion_Graphics_kcddk9.jpg" alt="err" />
          <div className={styles.title}>
            <h2>Motion Graphics</h2>
          </div>
          <div className={styles.text}>
            <p>Dynamic text animations, transitions, and visual effects designed to elevate storytelling and keep viewers engaged</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.sliderContainer}>

            <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025" alt="" className={styles.afterImg} />

            <div className={styles.beforeImgWrapper} style={{ width: `${sliderPosition}%` }}>
              <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025&sat=-100" alt="" className={styles.beforeImg} />
            </div>
            <div className={styles.handleLine} style={{ left: `${sliderPosition}%` }}>
              <div className={styles.handleBtn}><span>‹</span><span>›</span></div>
            </div>

            {/* Layer 4: Invisible Input Ranger Control */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(e.target.value)}
              className={styles.rangeInput}
            />

          </div>
          <div className={styles.title}>
            <h2>Color Grading</h2>
          </div>
          <div className={styles.text}>
            <p>Refining colors and contrast to create a cinematic look that enhances your brand and story.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://res.cloudinary.com/dqxh1dda4/image/upload/f_auto,q_auto/v1782130140/Sound_Design1_idi6vl.jpg" alt="err" />
          <div className={styles.title}>
            <h2>Sound Design</h2>
          </div>
          <div className={styles.text}>
            <p>Crafting immersive audio experiences that add depth, emotion, and impact to every frame.</p>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Services