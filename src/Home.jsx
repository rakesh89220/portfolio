import React, { useEffect, useState } from 'react';
import "./Home.css";
import logo from "./img/logo.png";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

  //  fexed Header
  window.addEventListener("scroll",function() {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active",this.window.scrollY > 0)
   });

   //toggle menu
   const[show, setShow] = useState(false);
   
   function getCurrentDimension() {
    return {  
      width: window.innerWidth,
      height: window.innerHeight
    }
   }
   const [screenSize,setScreenSize] = useState(getCurrentDimension());

   useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize',updateDimension);
    
    return(() => {
      window.removeEventListener('resize',updateDimension);
    })

   },[screenSize])
   console.log("screenSize",screenSize);

  return (
    <div className='home' id='Home'>
        <div className='home__bg' style={{height:`${screenSize.height}px`}}>
         <div className='header d__flex align__items__center pxy__30'>
            <div className='logo'>
                <img src={logo}/> 
            </div>
            <div className='navigation pxy__30'>
                <ul className='navbar d__flex'>
                    <a href='#Home'><li className='nav__items mx__15'>Home</li></a>
                    <a href='#About'><li className='nav__items mx__15'>About</li></a>
                    <a href='#Services'><li className='nav__items mx__15'>Services</li></a>
                    <a href='#Portfolio'><li className='nav__items mx__15'>Portfolio</li></a>
                    {/* <a href='#Blog'><li className='nav__items mx__15'>Blog</li></a> */}
                    <a href='#Contact'><li className='nav__items mx__15'>Contact</li></a>


                </ul>

            </div>
            <div className='toggle__menu'>
                        <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify white pointer" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                    {show ? (
                        <div className='sideNavbar' >
                            <ul className='sidebar d__flex'>
                                <a href='#Home'><li className='sideNavbar'> Home </li></a>
                                <a href='#About'><li className='sideNavbar'>About </li></a>
                                <a href='#Services'><li className='sideNavbar'>Services</li></a>
                                <a href='#Portfolio'><li className='sideNavbar'>Portfolio</li></a>
                                {/* <a href='#Blog'><li className='sideNavbar'>Blog</li></a> */}
                                <a href='#Contact'><li className='sideNavbar'>Contact</li></a>
                            </ul>
                        </div>
                    ) : null}  
            </div>  
             {/* Home Content  */}
             <div className='container'>
                <div className='home__content'>
                   <div className='home__meta'>
                   <h1 className='home__text pz__10'>
                     Hello, I Am          
                   </h1>

                   <TypeAnimation
      sequence={[
        'Rakesh Yadav', // Types 'One'
        1000, // Waits 1s
        'Software Engineer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
                   {/* <h2 className='home__text pz__10'>
                   Hi, I'm Rakesh Yadav
                   </h2>
                    <h3 className='home__text sweet pz__10 '>
                        JS Developer.

                    </h3>
                     <h3 className='home__text pz__10'>
                        based in India.

                     </h3> */}
                   </div>
                </div>

             </div>
        </div>
    </div>
  )
}

export default Home