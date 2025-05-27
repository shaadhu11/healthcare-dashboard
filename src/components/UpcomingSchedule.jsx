// src/components/UpcomingSchedule/UpcomingSchedule.jsx

import React from "react";
import upcomingAppointments from "../data/upcomingAppointments.js"
import SimpleAppointmentCard from "./SimpleAppointmentCard.jsx";
import "../styles/UpcomingSchedule.css";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.map((group, idx) => (
        <div key={idx} className="schedule-group">
          <h5>{group.day}</h5>
          {group.appointments.map((appt, i) => (
            <SimpleAppointmentCard
              key={i}
              title={appt.title}
              time={appt.time}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
