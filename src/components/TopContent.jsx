import React from "react";
import "../styles/topContent.css";
import FlightForm from "./FlightForm";
import Navbar from "./Navbar";

const TopContent = () => {
  return (
    <section className="topContainer">
      <Navbar />
      <div className="text__wrapper">
        <h3>Wanna Travel?</h3>
        <h2>And on a budget?</h2>
        <p>Find Unbelievably affordable flights at </p>
        <h2 style={{ color: "red" }}>Fly₡heaper</h2>
      </div>
      <FlightForm />
    </section>
  );
};

export default TopContent;
