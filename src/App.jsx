import Navbar from './components/Navbar/Navbar.jsx'
import MouseFollow from './components/MouseFollow/MouseFollow.jsx'
import Hero from './sections/Hero-Section/Hero.jsx'
import Services from './sections/Services-section/Services.jsx'
import Projects from './sections/Projects-section/Projects.jsx'
import About from './sections/About-section/About.jsx'
import Footer from './sections/Footer/Footer.jsx'
import Booking from './sections/Booking/Booking.jsx'
const App = () => {
  return (
  
    <>
    <Navbar/>
    <Hero/>
    <MouseFollow/>
    <Projects/>
    <Services/>
    <About/>
    <Booking/>
    <Footer/>
    </>

    
  )
}

export default App
