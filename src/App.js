import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Plans from './components/Plans';
import About  from './components/About';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Plans />
      <About/>
      <ContactForm/>
    </div>
  );
}

export default App;
