// import React from 'react'
import { RiCloseLargeLine, RiMenuLine } from '@remixicon/react'
import styles from'./Navbar.module.scss'
import { useState } from 'react'
import logo from '../../assets/logo.PNG'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev=> !prev);
  }
  return (
    <nav>
        <div className={styles.menu}>
          <div className={styles.logo}>
            <img src={logo} alt="realaeditor logo" />
          <a href="https://realaeeditor.netlify.app/"><h1>realaeditor</h1></a>
          </div>
        <div className={styles.menu_i}>
            <button onClick={toggleMenu}>{isOpen?<RiCloseLargeLine/> : <RiMenuLine/>}</button>
        </div>
        </div>

        
          <ul className={`${styles.mobileList} ${isOpen ? styles.open : ''}`}>
          <li><a href="#projects" className={styles.links} onClick={toggleMenu}>Projects</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          {/* <li onClick={toggleMenu}>Process</li> */}
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href='#book' onClick={toggleMenu} className={styles.mobileBook}>Book Call</a></li>
        </ul>
        

        <ul className={styles.desktopList}>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          {/* <li>Process</li> */}
          <li><a href="#about">About</a></li>
        </ul>

        <div className={styles.book}>
          <a href ='#book'>Book Call</a>
        </div>
    </nav>
  )
}

export default Navbar