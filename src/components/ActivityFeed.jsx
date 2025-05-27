// src/components/ActivityFeed/ActivityFeed.jsx

import React from "react";
import "../styles/ActivityFeed.css";

const ActivityFeed = () => {
  // You can tweak this data for different bar heights
  // const activityData = [60, 80, 40, 100, 50, 70, 30]; // Represents % heights
  const activityData = [
    { day: "Mon", chart: 60 },
    { day: "Tue", chart: 80 },
    { day: "Wed", chart: 40 },
    { day: "Thu", chart: 100 },
    { day: "Fri", chart: 50 },
    { day: "Sat", chart: 70 },
    { day: "Sun", chart: 85 },
  ];  
    


  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments on this week</p>
      <div className="bar-chart">
        {activityData.map((value, index) => (
          
            <div
            key={index}
            className="bar"
            style={{ height: `${value.chart}%` }}
          >
            <div className="bar-label">{value.day}</div>
            <div className="bar-label">{value.chart}%</div>

          </div>
          
          
    
          
          
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;


// import React from "react";
// import "../styles/ActivityFeed.css";

// const ActivityFeed = () => {
//   // Updated data with days
//   const activityData = [
//     { day: "Mon", chart: 60 },
//     { day: "Tue", chart: 80 },
//     { day: "Wed", chart: 40 },
//     { day: "Thu", chart: 100 },
//     { day: "Fri", chart: 50 },
//     { day: "Sat", chart: 70 },
//     { day: "Sun", chart: 30 },
//   ];

//   return (
//     <div className="activity-feed">
//       <h3>Activity</h3>
//       <p>3 appointments on this week</p>
//       <div className="bar-chart">
//         {activityData.map((item, index) => (
//           <div key={index} className="bar-container">
//             <div
//               className="bar"
//               style={{ height: `${item.chart}%` }}
//             ></div>
//             <div className="bar-label">{item.day}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ActivityFeed;
