import React from 'react'
import './resume.css';
import Data from './Data'
import Card from './Card'

const Resume = () => {
  return (
    <section className="resume container section" id='resume'>
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
      {
        Data.map((item) =>{
          if(item.category === "Education"){
            return (
              <Card key={item.id} icon={item.icon} title={item.title} year={item.year} desc={item.desc}/>
            )
          }
          return <></>
        })
      }
        </div>
           <div className="timeline grid">
      {
        Data.map((item, index) =>{
          if(item.category === "Experience"){
            return (
              <Card key={item.id} icon={item.icon} title={item.title} year={item.year} desc={item.desc}/>
            )
          }
          return <></>
        })
      }
        </div>
      </div>
    </section>
  )
}

export default Resume
