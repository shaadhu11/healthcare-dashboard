import React from "react";
import healthCards from "../data/healthCards.js";
import "../styles/HealthStatusCards.css";
import { FaLungs } from 'react-icons/fa';


const statusColorMap = {
  ok: "green",
  issue: "red",
};

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthCards.map((card, index) => (
        <div className="health-card" key={index}>
          <div className="card-header">

            {card.icon}
            <span
              className="line"
              style={{ backgroundColor: statusColorMap[card.status] }}
            ></span>
            <h3>{card.title}</h3>
          </div>
          <p className="status">{card.statusText}</p>
          <p className="date">Last Checked: {card.date}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
