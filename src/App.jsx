import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen select-none overflow-x-hidden">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <ServicesSection />
      <SkillsSection />
      <Projects />
      <Experience />
      <Contact />
      <FooterSection />
    </div>
  );
}

export default App;
