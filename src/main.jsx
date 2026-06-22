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
import Footer from './sections/Footer/Footer.jsx'
import Booking from './sections/Booking/Booking.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Navbar/>
    <Hero id = "hero"/>
    <MouseFollow/>
    <section id = "projects">
      <Projects/>
    </section>
    <section id ="services">
      <Services/>
    </section>
    <section id ="about">
      <About />
    </section>
    <section id = "book">
      <Booking/>
    </section>
    <Footer/>
  </StrictMode>,
)
