// src/components/Header.jsx
import React from 'react';
//import '../styles/header.css';
import logo from '../assets/bg.jpg';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header-logo" aria-label="Mr. Pops">
        <img src={logo} alt="Mr. Pops Logo" />
      </a>
      <nav className="header-nav">
        <a href="/catalog" className="header-link">Flavours</a>
        <button className="cart-btn" aria-label="Cart">
          <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6.25 6.25V3.75C6.25 2.5 7.5 1.25 8.75 1.25C10 1.25 11.25 2.5 11.25 3.75V6.25" stroke="#B00E2F" strokeWidth="1.5"/>
            <path d="M4 6.25H16C16.8284 6.25 17.5 6.92157 17.5 7.75V16.25C17.5 17.0784 16.8284 17.75 16 17.75H4C3.17157 17.75 2.5 17.0784 2.5 16.25V7.75C2.5 6.92157 3.17157 6.25 4 6.25Z" stroke="#B00E2F" strokeWidth="1.5"/>
          </svg>
          <span className="cart-count">0</span>
        </button>
        <button className="menu-btn" aria-label="Menu">
          <span className="menu-text">Menu</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;




