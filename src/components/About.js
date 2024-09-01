import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-image">
        <img src={require('../assets/About.png')} alt="About Us" />
      </div>
      <div className="about-text">
        <h2>ABOUT US</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h3 className="why-choose-us">Por que B&F seguros?</h3>
        <ul>
          <li>Planes acumulativos</li>
          <li>Atencion 24/7</li>
          <li>Aliquip ex ea commodo</li>
          <li>Exercitation ullamco</li>
          <li>Lorem ipsum dolor</li>
          <li>Incididunt ut labore</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
