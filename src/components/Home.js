import React from 'react';
import '../styles/Home.css';
import principal from "../assets/principal.png"
const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <h1>B&F Seguros</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit at quia tenetur expedita, consequuntur aspernatur explicabo earum odio.</p>
      </div>
      <div className="home-image">
        <img src={principal} alt="Descripción" />
      </div>
    </div>
  );
};

export default Home;
