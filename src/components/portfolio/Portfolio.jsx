import {useState} from 'react'
import  './portfolio.css';
import  Menu from './Menu';


const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (category) =>{
    const updatedItems = Menu.filter((currentObj) => { return currentObj.category === category})
    setItems(updatedItems)
  }
  return (
    <section className="work container section" id='portfolio'>
         <h2 className="section__title">
          Recent Works
         </h2>

         <div className="work__filters">
           <span className="work__item" onClick={()=> setItems(Menu)}>All</span>
           <span className="work__item" onClick={()=> filterItem("Node Js")}>Node Js</span>
           <span className="work__item" onClick={()=> filterItem("React Js")}>React Js</span>
           <span className="work__item" onClick={()=> filterItem("Flutter")}>Flutter</span>
           <span className="work__item" onClick={()=> filterItem("Html")}>Html & CSS</span>
         </div>

         <div className="work__container grid">
            {
              items.map((elem) =>{
                const {id, image, title, category} = elem;
                return (
                  <div className="work__card" key={id}>
                    <div className="work__thumbnail">
                      <img src={image} alt=""  className='work__img'/>
                      <div className="work__mask"></div>
                    </div>

                    <span className="work__category">{category}</span>
                    <h3 className="work__title">{title}</h3>
                    <a href="https://github.com/SirDICO" className="work__button">
                      <i className="icon-link work__button-icon">Github</i>
                    </a>
                  </div>
                )
              })
            }

         </div>
    </section>
  )
}

export default Portfolio