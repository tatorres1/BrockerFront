import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-overlay"></div> {/* Superposición de sombra */}
      <div className="contact-content">
        <div className="contact-text">
          <h2>Deja tu informacin apra contactarte</h2>
          <p>
            B&F seguros cuida de ti y de tu entorno, se parte de la familia
          </p>
          <div className="contact-buttons">
            <button className="btn-get-started">Chatea por Whatsapp</button>
              </div>
        </div>
        <div className="contact-form">
          <h3>Para conocer mas informacion deja tus datos</h3>
          <form>
            <div className="form-group" >
              <label htmlFor="name" >Nombre:</label>
              <input type="text" id="name" name="name" placeholder="Nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="ejemplo@gmail.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefono:</label>
              <input type="tel" id="phone" name="phone" placeholder="099 000 0000" />
            </div>
            <button type="submit" className="btn-free-trial">Quiero que me contacten</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
