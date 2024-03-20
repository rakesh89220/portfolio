import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
import myCv from './img/cv.pdf'
const About = () => {
  // up to top btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img alt="img" src={aboutImg} className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__ meta">
              <p className="about__text p__color">
                My name is Rakesh Yadav.I live in Mau,Uttar Pradesh.And I've
                completed my Bachelor of Technology(B.Tech) from B.N College of
                Engineering and Technology,Lucknow,Uttar Pradesh.
              </p>
              <p className="about__text p__color">
                I love to solve problems.Whether it's finding the most elegant
                way to write a live of code or figuring out the solutions,I love
                the challenge of finding a way and discovering solution.
              </p>
           
              <div className="about__button d__flex align__items__center">
                <a href={myCv} download>
                  <button className="about btn pointer">download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* up to top btn */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default About;
