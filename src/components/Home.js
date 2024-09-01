import React from 'react';
import '../styles/Home.css';
import principal from "../assets/principal.png"
const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <h1>B&F Seguros</h1>
        <p>El mejor brocker de seduros de ecuador, contamos con varios seguros quese acoplan a tus necesidades.unete a la familia</p>
      </div>
      <div className="home-image">
        <img src={principal} alt="Descripción" />
      </div>
    </div>
  );
};

export default Home;
