// import React from 'react';

// const SimpleAppointmentCard = ({ title, time }) => {
//   return (
//     <div className="bg-white p-4 rounded-2xl shadow-md">
//   <h4 className="text-md font-semibold text-gray-800">{title}</h4>
//   <p className="text-sm text-gray-500">{time}</p>
// </div>

//   );
// };

// export default SimpleAppointmentCard;


// src/components/SimpleAppointmentCard/SimpleAppointmentCard.jsx

import React from "react";
import "../styles/SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ title, time }) => {
  return (
    <div className="appointment-card">
      <div className="card-content">
        <h4>{title}</h4>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
