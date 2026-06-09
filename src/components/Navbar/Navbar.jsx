// import React from 'react'
import { RiCloseLargeLine, RiMenuLine } from '@remixicon/react'
import styles from'./Navbar.module.scss'
import { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  }
  return (
    <nav>
        <div className={styles.menu}>
          <img src="https://e7.pngegg.com/pngimages/487/456/png-clipart-computer-icons-business-logo-youtube-cartoon-green-small-rocket-cartoon-character-painted.png" alt="" />
        <div className={styles.menu_i}>
            <button onClick={toggleMenu}>{isOpen?<RiCloseLargeLine/> : <RiMenuLine/>}</button>
        </div>
        </div>

        {isOpen && (
          <ul>
          <li>Projects</li>
          <li>Services</li>
          <li>Process</li>
          <li>About</li>
        </ul>
        )}

        <ul className={styles.list}>
          <li>Projects</li>
          <li>Services</li>
          <li>Process</li>
          <li>About</li>
        </ul>
    </nav>
  )
}

export default Navbar