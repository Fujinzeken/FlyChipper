import React from "react";
import "../styles/topContent.css";
import FlightForm from "./FlightForm";
import Navbar from "./Navbar";

const TopContent = () => {
  return (
    <section className="topContainer">
      <Navbar />
      <div className="text__wrapper">
        <h3>Helping Others</h3>
        <h2>Live & Travel</h2>
        <p>Special offers to suit your plan</p>
      </div>
      <FlightForm />
    </section>
  );
};

export default TopContent;
