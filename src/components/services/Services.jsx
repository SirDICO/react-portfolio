import React from 'react'
import './services.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
  {
    id: 1, 
    image: Image1,
    title: "Backend Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
    
  },
  {
    id: 2, 
    image: Image2,
    title: "Frontend Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    
  },
  {
    id: 3, 
    image: Image3,
    title: "Mobile Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.! "
    
  },
]
const services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map((item)=>{
          const {id, image, title, description} = item;
          return (
            <div className="services__card" key={id}>
              <img src={image}  alt="images" className='services__img' />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default services