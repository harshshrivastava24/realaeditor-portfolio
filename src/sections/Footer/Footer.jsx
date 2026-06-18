// import React from 'react'
import MainBg from '../../components/MainBG/MainBg'
import styles from './Footer.module.scss'
import logo from '../../assets/logo.webp'
import { RiInstagramLine, RiTwitterXLine } from '@remixicon/react'

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
        <div className={styles.branding}>
            <MainBg/>
           <div className={styles.brandingContent}>
             <div className={styles.logoName}>
                <img src={logo} alt="realaeditor logo" />
                <h1>realaeditor</h1>
            </div>
            <div className={styles.text}>
                <p>Professional video editing for Youtube creators, podcasts, and short-form content.</p>
            </div>

            <div className={styles.links}>
                <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#services">Services</a></li>
                    <li>Process</li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
            <div className={styles.socials}>
                <a href="#" className={styles.icon}><RiInstagramLine className={styles.btns}/></a>
                <a href="#" className={styles.icon}><RiTwitterXLine className={styles.btns}/></a>
            </div>
           </div>
        </div>

        <div className={styles.copyright}>
            <p>&copy; 2026 realaeditor All rights reserved.</p>
            <p>Built By <span>Harsh</span></p>
        </div>
    </footer>
  )
}

export default Footer