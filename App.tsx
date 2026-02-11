import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="bg-darker min-h-screen text-slate-200 selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;