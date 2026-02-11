import React from 'react';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 lg:pt-0 scroll-mt-20">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <FadeIn delay={200} direction="up">
            <p className="text-accent uppercase tracking-[0.2em] mb-4 font-semibold text-sm">
              Développeur Frontend Senior
            </p>
          </FadeIn>
          
          <FadeIn delay={400} direction="up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Créer des <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600">
                expériences uniques.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={600} direction="up">
            <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              Je conçois et développe des interfaces web modernes, performantes et élégantes. 
              Spécialisé en React, TypeScript et l'intégration d'IA.
            </p>
          </FadeIn>

          <FadeIn delay={800} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-white text-darker font-bold rounded-full hover:bg-slate-200 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Voir mes projets
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-slate-700 text-white rounded-full hover:border-accent hover:text-accent transition-colors duration-300 backdrop-blur-sm"
              >
                Me contacter
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
           <FadeIn delay={400} direction="left">
             <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
                {/* Decorative Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-slate-700/50 scale-105 group-hover:scale-100 transition-transform duration-700"></div>
                <div className="absolute inset-0 rounded-full border border-accent/20 scale-110 group-hover:scale-105 transition-transform duration-700 delay-75"></div>
                
                {/* Image Container */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl relative z-10 bg-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
                    alt="Portrait" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  {/* Overlay Light */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-0 bg-slate-900/90 backdrop-blur border border-slate-700 p-3 sm:p-4 rounded-2xl shadow-xl z-20 animate-bounce">
                  <span className="text-2xl">👋</span>
                </div>
             </div>
           </FadeIn>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 hidden md:block">
        <i className="fas fa-chevron-down text-xl"></i>
      </div>
    </section>
  );
};

export default Hero;