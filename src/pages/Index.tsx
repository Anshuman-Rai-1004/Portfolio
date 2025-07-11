
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
