// import React from 'react'
import { RiCloseLargeLine, RiMenuLine } from '@remixicon/react'
import styles from'./Navbar.module.scss'
import { useState } from 'react'
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  }
  return (
    <nav>
        <div className={styles.menu}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          <a href="https://realaeeditor.netlify.app/"><h1>realaeditor</h1></a>
          </div>
        <div className={styles.menu_i}>
            <button onClick={toggleMenu}>{isOpen?<RiCloseLargeLine/> : <RiMenuLine/>}</button>
        </div>
        </div>

        
          <ul className={`${styles.mobileList} ${isOpen ? styles.open : ''}`}>
          <li><a href="#projects" className={styles.links}>Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li>Process</li>
          <li><a href="#about">About</a></li>
        </ul>
        

        <ul className={styles.desktopList}>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li>Process</li>
          <li><a href="#about">About</a></li>
        </ul>
    </nav>
  )
}

export default Navbar