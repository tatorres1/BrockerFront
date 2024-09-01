import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className="nav">
        <a href="#">Inicio</a>
        <a href="#">Informacion</a>
        <a href="#services">Servicios</a>
        <a href="#">Comunicacion</a>
        <a href="#">Contactar Asesor</a>
      </nav>
      <div className="login-signup">
      <Link to="/login">
          <button>Login/Signup</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
