import React from 'react';
import FadeIn from './FadeIn';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'React / Next.js', icon: 'fa-brands fa-react', level: 95 },
  { name: 'TypeScript', icon: 'fa-brands fa-js', level: 90 },
  { name: 'Tailwind CSS', icon: 'fa-brands fa-css3-alt', level: 98 },
  { name: 'Node.js', icon: 'fa-brands fa-node', level: 85 },
  { name: 'UI / UX Design', icon: 'fa-solid fa-pen-nib', level: 80 },
  { name: 'AI Integration', icon: 'fa-solid fa-robot', level: 75 },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-darker relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            À Propos & <span className="text-accent">Compétences</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <FadeIn direction="right" delay={200}>
              <h3 className="text-2xl font-semibold text-white mb-4">
                L'art du code propre
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Passionné par le développement web depuis plus de 5 ans, j'ai transformé ma curiosité en expertise. 
                Je ne me contente pas de faire fonctionner les choses ; je m'assure qu'elles soient performantes, maintenables et belles.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Mon approche combine rigueur technique et sensibilité artistique. Je crois que le code est une forme d'artisanat moderne 
                où chaque détail compte.
              </p>
            </FadeIn>
            
            <FadeIn direction="right" delay={400}>
               <div className="grid grid-cols-2 gap-6 mt-8">
                 <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                   <h4 className="text-3xl font-bold text-accent mb-1">5+</h4>
                   <p className="text-sm text-slate-500 uppercase">Années d'expérience</p>
                 </div>
                 <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                   <h4 className="text-3xl font-bold text-accent mb-1">50+</h4>
                   <p className="text-sm text-slate-500 uppercase">Projets livrés</p>
                 </div>
               </div>
            </FadeIn>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <FadeIn key={skill.name} delay={index * 100} direction="left">
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-accent/50 transition-colors duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <i className={`${skill.icon} text-2xl text-slate-400 group-hover:text-accent transition-colors`}></i>
                    <span className="text-slate-600 font-mono text-sm">{skill.level}%</span>
                  </div>
                  <h4 className="text-white font-medium text-lg">{skill.name}</h4>
                  <div className="w-full h-1 bg-slate-800 mt-3 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent rounded-full transition-all duration-1000 ease-out group-hover:bg-white"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;