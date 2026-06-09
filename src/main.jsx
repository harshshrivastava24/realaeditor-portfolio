import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainBg from './components/MainBG/MainBg'
// import App from './App.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import MouseFollow from './components/MouseFollow/MouseFollow.jsx'
import Hero from './sections/Hero-Section/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      {/* <App /> */}
    {/* <Navbar/> */}
    <MainBg/>
      <Navbar/>
    <Hero/>
    <MouseFollow/>
    
    </main>
  </StrictMode>,
)
