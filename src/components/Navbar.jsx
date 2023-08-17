import React from "react";
import "../styles/navbar.css";
import { SignOutButton, UserButton } from "@clerk/clerk-react";

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
        <SignOutButton>
          <button className="signup__btn">Log out</button>
        </SignOutButton>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
