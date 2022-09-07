import React from "react";
import "../Home/CSS/Navbar.css";
import Logo from "../Home/Assets/logo.png";
import { Link } from "react-scroll";

const NavItem = (props) => {
  return (
    <>
      <Link
        activeClass="active"
        // spy={true}
        offset={-70}
        duration={500}
        to={props.name.toLowerCase()}
        className="navItem"
      >
        {props.name}
      </Link>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="logo" offset={-80} duration={500} to="home">
        <img src={Logo} alt="Logo" className="logoImg" />
      </Link>
      <div className="navItems">
        <NavItem name="Home" />
        <NavItem name="About" />
        <NavItem name="Skills" />
        <NavItem name="Work" />
        <NavItem name="Experience" />
        <NavItem name="Contact" />
      </div>
    </div>
  );
};

export default Navbar;
