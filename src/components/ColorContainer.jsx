import React from "react";
import ColorCard from "./ColorCard";

const ColorContainer = () => {
  return (
    <div className="color-container">
      <div className="container">
        <h2 className="container__heading">
          <span className="number__heading">01</span>
          <span className="text__heading">Colors</span>
        </h2>
        <div className="color-cards-container">
          <ColorCard />
        </div>
      </div>
    </div>
  );
};

export default ColorContainer;
