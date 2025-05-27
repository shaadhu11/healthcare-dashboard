// const calendarData = [
//   { date: 1 }, { date: 2 }, { date: 3 }, { date: 4 }, { date: 5 },
//   { date: 6, time: '09:00', highlight: true },
//   { date: 7, time: '11:00', highlight: true },
//   { date: 8, time: '13:00', highlight: true },
//   { date: 9, time: '15:00', highlight: true },
//   // fill remaining dates similarly
// ];

// export default calendarData;




// src/data/CalendarData.js

const calendarData = {
  month: "October 2021",
  days: [
    {week:"MON", date: 1, appointments: ["06:00"] },
    {week:"TUE", date: 2, appointments: ["09:00"] },
    {week:"WED", date: 3, appointments: ["12:00"] },
    {week:"THU",date: 4, appointments: ["11:00"] },
    {week:"FRI", date: 5, appointments: ["18:00"] },
    {week:"SAT", date: 6, appointments: ["13:00"] },
    {week:"SUN", date: 7, appointments: ["15:00"] },
    // ...add more days as needed
  ],
  appointmentDetails: [
    {
      type: "Dentist",
      name: "Dr. Smith",
      time: "10:00 AM",
    },
    {
      type: "Physiotherapy",
      name: "Dr. Maria",
      time: "01:00 PM",
    },
  ],
};

export default calendarData;
