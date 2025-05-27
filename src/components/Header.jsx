import React from 'react';
import '../styles/Header.css';
import { FaBell, FaPlus } from 'react-icons/fa';
import avatar from '../assets/avatar.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className='top-mdl'>
        <input type="text" placeholder="Search" className="search-bar" />
      <FaBell className="icon" />
      </div>
      <div className="header-actions">
        <div className="user-avatar">
          <img src={avatar} alt="User" />
        </div>
        <FaPlus className="icon" />
      </div>
      

    </div>
  );
};

export default Header;
