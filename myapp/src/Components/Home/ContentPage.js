import React from "react";
import "../Home/CSS/content.css";
// import avatar from "../Home/Assets/Avtar.png";
import { Link } from "react-scroll";

const ContentPage = (props) => {
  return (
    <>
      <div className="content" id={props.id}>
        <div className="greet">
          <h1>Hello EveryOne,</h1>
          <h3>
            I’m <span>Shubham</span> <span>Singh</span>
          </h3>
          <p className="idk">
            I'm pursuing <span>B. Tech. CSE</span>
          </p>
          <Link to="about" offset={-75} className="btn">
            About Me
            <i className="fa-solid fa-arrow-down"></i>
          </Link>
          <div className="icons">
            <a
              target="blank"
              href="https://linkedin.com/in/iamshubhamcodex"
              className="icon"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              target="blank"
              href="https://github.com/iamshubhamcodex"
              className="icon"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              target="blank"
              href="https://instagram.com/shubhamcdx"
              className="icon"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="avtar">{/* <img src={avatar} alt="Hello" /> */}</div>
        <Link to="about" offset={-70} className="down">
          <i className="fa-solid fa-chevron-down"></i>
        </Link>
      </div>
    </>
  );
};

export default ContentPage;
