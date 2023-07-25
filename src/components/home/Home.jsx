import React from 'react'
import './home.css'
import Person from "../../assets/ikenna.svg"
import Socials from './Socials'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Person} alt="" className="home__img" />
        <h1 className="home__name">Ikenna Divine Chukwu</h1>
        <span className="home__education">I'm a FullStack Developer</span>
        <Socials/>

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home