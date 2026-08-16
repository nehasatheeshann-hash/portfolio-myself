import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import InteractiveCode from './components/InteractiveCode';
import Experience from './components/Experience';
import SelectedWork from './components/SelectedWork';
import EventsHackathons from './components/EventsHackathons';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import { useScrollReveal } from './hooks/useScrollReveal';
import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';
import './App.css';

function Home() {
  useScrollReveal();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove '#'
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return (
    <div className="app-container">
      <Navigation />
      <Hero />
      <Story />
      <InteractiveCode />
      <Experience />
      <SelectedWork />
      <EventsHackathons />
      <Certifications />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 0.7, smoothWheel: true }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ReactLenis>
  );
}

export default App;
