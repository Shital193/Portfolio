import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import Qualification from './components/Qualification/Qualification'
import Projects from './components/Projects/Projects'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Qualification/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App