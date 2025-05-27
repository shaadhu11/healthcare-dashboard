// import React from 'react';
// import '../styles/Sidebar.css';
// import { sidebarLinks } from '../data/navigationData';
// import { FaComments, FaPhoneAlt, FaCog } from 'react-icons/fa';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2 className="sidebar-logo"><span style={{ color: 'turquoise' }}>Health</span><span>care.</span></h2>
//       <div className="sidebar-section">
//         <p className="section-title">General</p>
//         <ul className="nav-links">
//           {sidebarLinks.map(link => (
//             <li key={link.label}>
//               <link.icon className="icon" />
//               <span>{link.label}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="sidebar-section tools">
//         <p className="section-title">Tools</p>
//         <ul className="nav-links">
//           <li><FaComments className="icon" /> <span>Chat</span></li>
//           <li><FaPhoneAlt className="icon" /> <span>Support</span></li>
//         </ul>
//       </div>
//       <div className="sidebar-bottom">
//         <FaCog className="icon" />
//         <span>Setting</span>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { sidebarLinks } from '../data/navigationData';
import { FaComments, FaPhoneAlt, FaCog } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger shown only on mobile */}
      <div className="hamburger" onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </div>

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <h2 className="sidebar-logo">
          <span style={{ color: 'turquoise' }}>Health</span>
          <span>cure.</span>
        </h2>

        <div className="sidebar-section">
          <p className="section-title">General</p>
          <ul className="nav-links">
            {sidebarLinks.map(link => (
              <li key={link.label}>
                <link.icon className="icon" />
                <span>{link.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section tools">
          <p className="section-title">Tools</p>
          <ul className="nav-links">
            <li><FaComments className="icon" /> <span>Chat</span></li>
            <li><FaPhoneAlt className="icon" /> <span>Support</span></li>
          </ul>
        </div>

        <div className="sidebar-bottom">
          <FaCog className="icon" />
          <span>Setting</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
