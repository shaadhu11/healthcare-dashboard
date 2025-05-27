import React from "react";
import calendarData from "../data/calendarData";
import "../styles/CalendarView.css";

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <h2 className="month-heading">{calendarData.month}</h2>
      <div className="calendar-grid">
        {calendarData.days.map((day, index) => (
          <div key={index} className="calendar-day">
            <span className="week">{day.week}</span>
            <span className="date">{day.date}</span>
            <div className="appointments">
              {day.appointments.map((time, idx) => (
                <div key={idx} className="time-slot">
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="appointment-cards">
        {calendarData.appointmentDetails.map((appt, index) => (
          <div key={index} className="appointment-card">
            <h4>{appt.type}</h4>
            <p>{appt.name}</p>
            <span>{appt.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
