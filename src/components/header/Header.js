import React from 'react';
import './Header.css'; 
import '../mobileScreen.css'

const Header = ({ openMenu, closeMenu }) => {
  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src="/images/logo.png" alt="Logo" className="logo" />
          <ul id="sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <i className="fas fa-sharp fa-solid fa-circle-xmark" onClick={closeMenu}></i>
          </ul>
          <i className="fas fa-solid fa-bars" onClick={openMenu}></i>
        </nav>
        <div className="header-text">
          <p>Python Full-Stack Developer</p>
          <h1>Hi, I'm <span>Yashashri</span><br />Pawar</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
