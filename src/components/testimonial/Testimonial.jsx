import React from 'react'
import './testimonial.css';

import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination'

import Image1 from "../../assets/blog-1.svg"
import Image2 from "../../assets/blog-2.svg"
import Image3 from "../../assets/blog-3.svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: "Ekelan Chukwu",
    subtitle: "Project Development",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, harum?"
    
  },
  {
    id: 2,
    image: Image2,
    title: "Moses Joshua",
    subtitle: "Project Development",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, harum?"
    
  },
  {
    id: 3,
    image: Image3,
    title: "Simon ladi",
    subtitle: "Project Development",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, harum?"
    
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials__container section" id='testimonials'>
      <h2 className="section__title">Client Reviews</h2>
      <Swiper className="testimonials__container grid"
      
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination={{ clickable: true }}
    

      >
      {
        data.map((item)=>{
          const {id, image, title, subtitle, comment} = item;
          return (
            <SwiperSlide className="testimonials__item" key={id}>
              <div className="thumb">
                <img src={image} alt={title} />
              </div>
              <h3 className='testimonials__title'>{title}</h3>
              <span className='subtitle'>{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonial