import React from 'react'

const AboutBox = () => {
  return (
   <div className="about_boxes grid">
      <div className="about_box">
        <i className="about_icon icon-briefcase"></i>
      
      <div>
         <h3 className="about_title">33+</h3>
         <span className="about_subtitle">Completed Projects</span>
      </div>
      </div>


      <div className="about_box">
        <i className="about_icon icon-people"></i>
      
      <div>
         <h3 className="about_title">25+</h3>
         <span className="about_subtitle">Satisfied Client</span>
      </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-badge"></i>
      
      <div>
         <h3 className="about_title">2+</h3>
         <span className="about_subtitle">Collaborations</span>
      </div>
      </div>

     
   </div>
  )
}

export default AboutBox