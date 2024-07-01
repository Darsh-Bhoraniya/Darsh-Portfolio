import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './components/styles.css'; // Ensure this file exists and is correctly imported

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-6 sm:px-8 lg:px-8 py-4">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="profile"><Profile /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
};

export default App;
