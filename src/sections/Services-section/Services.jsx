// import React from 'react'
import { useState } from 'react';
import styles from './Services.module.scss'

const Services = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  return (
    <section className={styles.services}>
      <div className={styles.head}>
        <div className={styles.heading}>Services</div>
        <p>Everything you need to scale your content.</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <video autoPlay muted loop playsInline src="https://www.pexels.com/download/video/34158991/" ></video>
          <div className={styles.title}>
            <h2>Sound Design</h2>
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className={styles.card}>
          <video autoPlay muted loop playsInline src="https://www.pexels.com/download/video/34158991/" ></video>
          <div className={styles.title}>
            <h2>Sound Design</h2>
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Services