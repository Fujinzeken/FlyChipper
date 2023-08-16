import React from "react";
import "../styles/navbar.css";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <div className="nav__left-left">
          <span>Find Flight</span>
          <span>Find stay</span>
        </div>
        <h2 className="logo">
          Fly<span style={{ color: "red" }}>₡</span>heaper
        </h2>
      </div>
      <div className="nav__right">
        <button className="login__btn">Login</button>
        <button className="signup__btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
