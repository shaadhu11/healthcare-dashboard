// import React from "react";
// import AnatomySection from "./AnatomySection";
// import HealthStatusCards from "./HealthStatusCards";
// import CalendarView from "./CalendarView";
// import UpcomingSchedule from "./UpcomingSchedule";
// import ActivityFeed from "./ActivityFeed";
// import '../styles/DashboardMainContent.css'
// const DashboardMainContent = () => {
//   return (
//     <main className="dashboard-main">
//       {/* Center Section (Main Content) */}
//       <div className="flex-1 flex flex-col gap-6">
//         <AnatomySection />
//         <HealthStatusCards />
//       </div>

//       {/* Right Sidebar */}
//       <div className="w-[300px] flex flex-col gap-6">
//         <CalendarView />
//         <UpcomingSchedule />
//         <ActivityFeed />
//       </div>
//     </main>
//   );
// };

// export default DashboardMainContent;


import React from 'react';
import '../styles/DashboardMainContent.css';
import DashboardOverview from './DashboardOverView.jsx';
import CalendarView from './CalendarView.jsx';
import UpcomingSchedule from './UpcomingSchedule.jsx';
import ActivityFeed from './ActivityFeed.jsx';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <DashboardOverview />
      <CalendarView />
      <ActivityFeed />
      <UpcomingSchedule />
      
    </main>
  );
};

export default DashboardMainContent;
