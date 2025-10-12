import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;