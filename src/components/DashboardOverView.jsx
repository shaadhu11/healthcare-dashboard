import React from 'react';
import AnatomySection from './AnatomySection.jsx';
import HealthStatusCards from './HealthStatusCards.jsx';
import '../styles/DashboardOverView.css';

const DashboardOverview = () => {
  return (
    <section className="dashboard-overview">
      <AnatomySection />
      <HealthStatusCards />
    </section>
  );
};

export default DashboardOverview;
