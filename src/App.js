import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Plans from './components/Plans';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Mantén todo el contenido principal en la ruta raíz */}
          <Route path="/" element={
            <>
              <Home />
              <Plans />
              <About />
              <ContactForm />
            </>
          } />
          {/* Página de Login como ruta separada */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
