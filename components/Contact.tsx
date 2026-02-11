import React from 'react';
import FadeIn from './FadeIn';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-darker relative overflow-hidden scroll-mt-20">
      {/* Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Démarrons un <span className="text-accent">Projet</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Intéressé par une collaboration ? N'hésitez pas à m'envoyer un message.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200} direction="up">
          <form className="bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-800 backdrop-blur-sm shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Nom</label>
                <input 
                  type="text" 
                  className="w-full bg-darker border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="Votre nom"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-darker border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2 mb-8">
              <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
              <textarea 
                rows={4} 
                className="w-full bg-darker border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                placeholder="Décrivez votre projet..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-white text-darker font-bold py-4 rounded-xl hover:bg-slate-200 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              Envoyer le message
            </button>
          </form>
        </FadeIn>

        <FadeIn delay={400} direction="up">
          <div className="flex justify-center gap-8 mt-16">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-2xl"><i className="fab fa-github"></i></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-2xl"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-2xl"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-2xl"><i className="fab fa-dribbble"></i></a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;