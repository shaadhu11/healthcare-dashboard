import React from 'react';
import anatomyData from '../data/anatomyData';
import '../styles/AnatomySection.css'
import anatomy from '../assets/humanAnatomy.png'

const AnatomySection = () => {
  return (


<div className="anatomy-section">
  <img
    src={anatomy}
    alt="Human Anatomy"
    className="w-full h-auto object-contain mb-6"
  />  
</div>



  );
};

export default AnatomySection;

