import React from 'react';
import '../styles/Plans.css';
import gold from '../assets/gold.png';
import silver from '../assets/silver.png';
import bronze from '../assets/bronze.png';
const plans = [
  {
    id: 1,
    title: 'Plan Gold',
    level: 'Beginner',
    price: 180.00,
    originalPrice: 240.00,
    imageUrl: gold, // Reemplaza con la URL de tu imagen
  },
  {
    id: 2,
    title: 'Plan Premium',
    level: 'Expert',
    price: 180.00,
    originalPrice: 240.00,
    imageUrl: silver, // Reemplaza con la URL de tu imagen
  },
  {
    id: 3,
    title: 'Plan Silver',
    level: 'All Level',
    price: 180.00,
    originalPrice: 240.00,
    imageUrl: bronze, // Reemplaza con la URL de tu imagen
  },
];

const Plans = () => {
  return (
    <div className="plans">
      <h2>Revisa <span>Nuestros Planes</span></h2>
      <p>Para ti</p>
      <div className="plans-grid">
        {plans.map(plan => (
          <div key={plan.id} className="plan-card">
            <img src={plan.imageUrl} alt={plan.title} />
            <div className="plan-info">
              <span className="plan-level">{plan.level}</span>
              <h3>{plan.title}</h3>
              <div className="plan-pricing">
                <span className="plan-price">${plan.price.toFixed(2)}</span>
                <span className="plan-original-price">${plan.originalPrice.toFixed(2)}</span>
              </div>
              <button className="plan-button">Lo Quiero</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
