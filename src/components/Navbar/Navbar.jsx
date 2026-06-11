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
          <h1>realaeditor</h1>
          </div>
        <div className={styles.menu_i}>
            <button onClick={toggleMenu}>{isOpen?<RiCloseLargeLine/> : <RiMenuLine/>}</button>
        </div>
        </div>

        
          <ul className={`${styles.mobileList} ${isOpen ? styles.open : ''}`}>
          <li>Projects</li>
          <li>Services</li>
          <li>Process</li>
          <li>About</li>
        </ul>
        

        <ul className={styles.desktopList}>
          <li>Projects</li>
          <li>Services</li>
          <li>Process</li>
          <li>About</li>
        </ul>
    </nav>
  )
}

export default Navbar