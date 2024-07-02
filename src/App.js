import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Contact from './components/Contact';
import './components/styles.css'; // Ensure this file exists and is correctly imported

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="home" className="section-fullscreen"><Home /></section>
        <section id="about" className="section-fullscreen"><About /></section>
        <section id="projects" className="section-fullscreen"><Projects /></section>
        <section id="profile" className="section-fullscreen"><Profile /></section>
        <section id="contact" className="section-fullscreen"><Contact /></section>
      </main>
    </div>
  );
};

export default App;
