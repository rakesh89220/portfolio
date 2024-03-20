import React from 'react'
// import Project1 from "./img/portfolio-1.jpg";
const Boxes2 = (props) => {
  return (
    
        <div className="col__3">
    <div className="project__box pointer relative">
      <div className="project__box__img pointer relative">
        <div className="project__img__box">
          <img src= {props.imge} alt="" className="project__img" />
        </div>
        <div className="mask__effect"></div>
      </div>
      <div className="project__meta absolute">
        <div className='new_div'>
        <h5 className="project__text"> {props.head}</h5>
        <h4 className="project__text"> {props.par}</h4>
        <a href = {props.link} className="project__btn"> {props.par1}</a>
    
    </div>
    </div>
  </div>
  </div>
  )
}

export default Boxes2