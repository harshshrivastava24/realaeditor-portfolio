import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import MainBg from './components/MainBG/MainBg'
// import App from './App.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import MouseFollow from './components/MouseFollow/MouseFollow.jsx'
import Hero from './sections/Hero-Section/Hero.jsx'
import Services from './sections/Services-section/Services.jsx'
import Projects from './sections/Projects-section/Projects.jsx'
import About from './sections/About-section/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Navbar/>
    <Hero/>
    <MouseFollow/>
    <Services/>
    <Projects/>
    <About/>
  </StrictMode>,
)
