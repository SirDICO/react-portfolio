
import React from 'react'
import './blog.css';

import Image1 from "../../assets/blog-1.svg"
import Image2 from "../../assets/blog-2.svg"
import Image3 from "../../assets/blog-3.svg"


const Blog = () => {
  return (
    <section className="blog container section" id='blog'>
      <h2 className="section_title">Latest News</h2>
      <div className="blog_container grid">
        <div className="blog_card">
          <div className="blog_thumb">
            <a href=""> <span className="blog_category">LifeHacks</span></a>
            <a href="#"><img src={Image1} alt="" className='blog_img' /></a>
          </div>

          <div className="blog_details">
            <h3 className="blog_title">How to Gain Mastery in Software Development</h3>
            <div className="blog_meta">
            <span>11 May, 2023</span>


                <span className="blog_dot">.</span>
                <span>Ikenna Chukwu</span>
            </div>
          </div>
        </div>

        <div className="blog_card">
          <div className="blog_thumb">
            <a href=""> <span className="blog_category">CodeHacks</span></a>
            <a href="#"><img src={Image2} alt="" className='blog_img' /></a>
          </div>

          <div className="blog_details">
            <h3 className="blog_title">How to learn Html & CSS</h3>
            <div className="blog_meta">
            <span>17 JUNE, 2023</span>


                <span className="blog_dot">.</span>
                <span>ikenna Chukwu</span>
            </div>
          </div>
        </div>


        <div className="blog_card">
          <div className="blog_thumb">
            <a href=""> <span className="blog_category">Prenuership</span></a>
            <a href="#"><img src={Image3} alt="" className='blog_img' /></a>
          </div>

          <div className="blog_details">
            <h3 className="blog_title">Why I failed Several Times as Software Engineer</h3>
            <div className="blog_meta">
               <span>07 Feb, 2023</span>

                <span className="blog_dot">.</span>
                <span>Ikenna Chukwu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
