import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer d__flex align__items__center justify__content__space__between pz-10' style={{"padding":"10px 20px","zIndex":"100"}}>
    <span className='copyright' style={{"color":"#c6c9d8","fontSize":"14px","opacity":"0.75"}}> Copyright @ 2023 Software Developer, Rakesh Yadav.</span>
    </div>
  )
}

export default Footer