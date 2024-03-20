import React from "react";
import "./Project.css";
import Project1 from "./img/portfolio-1.png";
import Project2 from "./img/portfolio-2.png";
import Project3 from "./img/portfolio-3.png";

import Boxes2 from "./Boxes2";
const Project = () => {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading"> My Latest Project</h1>
        <p className="heading p__color">
          There are many variation of passages of Lorem
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration
        </p>
      </div>
      <div className="containers">
        <div className="rows">
          <Boxes2
            imge={Project1}
            head="Todo-List"
            par="Click the below button to open project"
            par1="View Details"
            link="https://todo-list-89.netlify.app"
          />

          <Boxes2
            imge={Project2}
            head="Weather-Web-App "
            par="Click the below button to open project"
            par1="View Details"
            link="https://weather-site-89.netlify.app"
          />

          <Boxes2
            imge={Project3}
            head="Speech-Text-Converter"
            par="Click the below button to open project"
            par1="View Details"
            link="https://speech-text-converter.netlify.app"
          />
          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
