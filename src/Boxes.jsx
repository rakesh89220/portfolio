import React from 'react'

const Boxes = (props) => {
  return (
    <div className="col__3">
    <div className="service__box pointer">
      <div className="icon">
        {props.svg}
        
      </div>
      <div className="service__meta">
        <h1 className="service__text">
            {props.heading}
        </h1>
        <p className="p service__text p__color">
             {props.para1}
        </p>
        <p className="p service__text p__color">
        {props.para2} 
        </p>
        <p className="p service__text p__color">
           
        {props.para3} 
        </p>
      </div>
    </div>
  </div>
  )
}

export default Boxes