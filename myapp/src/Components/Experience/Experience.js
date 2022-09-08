import React from "react";
import "../Experience/CSS/experience.css";
import Comin from "../Experience/Assets/expBg.png";
import { Link } from "react-scroll";

const Experience = (props) => {
  return (
    <>
      <div className="exp" id={props.id}>
        <h1>Experience</h1>
        <div className="comin">
          <img src={Comin} alt="" />
        </div>
        <Link to="contact" offset={-80} className="down2">
          <i className="fa-solid fa-chevron-down"></i>
        </Link>
      </div>
    </>
  );
};

export default Experience;
