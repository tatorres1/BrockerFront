import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-image">
        <img src={require('../assets/About.png')} alt="About Us" />
      </div>
      <div className="about-text">
        <h2>Sobre Nosotros</h2>
        <p>
          Te invitamos a que nos conozcas un poco mas, puede visitarnos n nuestras agencias o atraves de las redes sociales. B&F seguros es un brocker con cobertura a nivel nacional</p>
        <h3 className="why-choose-us">Por que B&F seguros?</h3>
        <ul>
          <li>Planes acumulativos</li>
          <li>Atencion 24/7</li>
          <li>covertura a nivel nacional e internacional</li>
          <li>asesoramiento indivisual</li>
          <li>Planes de pago a tu comodidad</li>
          <li>Nos acomodamos a tus necesidades</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
