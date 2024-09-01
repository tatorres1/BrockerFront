import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className="nav">
        <a href="#">PRESENTACION</a>
        <a href="#">INFORMACION</a>
        <a href="#services">SERVICIOS</a>
        <a href="#">COMUNICACION</a>
        <a href="#">CONTACTAR ASESOR</a>
      </nav>
      <div className="login-signup">
        <button>Login/Signup</button>
      </div>
    </header>
  );
};

export default Header;
