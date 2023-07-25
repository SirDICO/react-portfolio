import React from 'react'
import './about.css'
import Image from "../../assets/avatar-1.svg"
import AboutBox from './AboutBox'


const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About </h2>
      <div className="about__container grid">
        <img src={Image} alt="Avatar" className='about__img'/>

        <div className="about__data grid">
           <div className="about__info">
            <p className="about__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Expedita mollitia, numquam est, aperiam voluptatum facilis consequuntur molestiae, impedit temporibus illum sunt laborum? Voluptatibus,
               beatae maxime saepe accusamus veniam atque voluptate.

               <a href="" className="btn">Download CV</a>
            </p>
           </div>
           <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                  <h3 className="skills__name"> BackEnd Development  </h3>

                  <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                  <h3 className="skills__name">Front End</h3>

                  <span className="skills__number">65%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage front-end"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                  <h3 className="skills__name">Mobile Development</h3>

                  <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage mobile"></span>
              </div>
            </div>
          
           </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About