import React from "react";
import { Link } from "react-scroll";
import "../Skills/CSS/skills.css";

const Skills = (props) => {
  return (
    <>
      <div className="skills" id={props.id}>
        <h1>Skills</h1>
        <div className="sides">
          <ul className="lists">
            <li>Core Java</li>
            <li>DSA and Algo</li>
            <li>Competetive Java</li>
            <li>Java Swing</li>
            <li>Problem Solving</li>
          </ul>
          <div className="hr">hi</div>
          <ul className="bars">
            <li className="bar" style={{ width: "38vw" }}>
              95%
            </li>
            <li className="bar" style={{ width: "32vw" }}>
              80%
            </li>
            <li className="bar" style={{ width: "30vw" }}>
              75%
            </li>
            <li className="bar" style={{ width: "20vw" }}>
              50%
            </li>
            <li className="bar" style={{ width: "28vw" }}>
              70%
            </li>
          </ul>
        </div>
        <p className="learn">
          I also belive in learning all the time and increasing my knowledge on
          the Java and further extend my Skills to other languages.
        </p>
        <Link to="work" offset={-80} className="down3">
          <i className="fa-solid fa-chevron-down"></i>
        </Link>
      </div>
    </>
  );
};

export default Skills;
