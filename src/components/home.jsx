import React from 'react'
import Hero from './hero'
import About from './about'
import Skills from './skills'
import Projects from './projects'
import Footer from './footer'

function Home() {
  return (
    <div className='flex flex-col'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
    </div>
  )
}

export default Home