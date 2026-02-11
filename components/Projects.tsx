import React from 'react';
import FadeIn from './FadeIn';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Luxe",
    description: "Une plateforme d'achat minimaliste pour une marque de mode haut de gamme.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    image: "https://picsum.photos/800/600?random=1",
    link: "#"
  },
  {
    id: 2,
    title: "Dashboard Analytique",
    description: "Interface de visualisation de données en temps réel pour une start-up fintech.",
    tags: ["React", "D3.js", "Firebase"],
    image: "https://picsum.photos/800/600?random=2",
    link: "#"
  },
  {
    id: 3,
    title: "App Immobilière IA",
    description: "Application utilisant l'IA pour estimer la valeur des biens immobiliers.",
    tags: ["Gemini API", "React Native", "Node.js"],
    image: "https://picsum.photos/800/600?random=3",
    link: "#"
  },
  {
    id: 4,
    title: "Portfolio Photographe",
    description: "Galerie interactive avec transitions fluides pour un artiste visuel.",
    tags: ["GSAP", "React", "WebGL"],
    image: "https://picsum.photos/800/600?random=4",
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                Projets <span className="text-slate-600">Sélectionnés</span>
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full"></div>
            </div>
            <a href="#" className="hidden md:block text-slate-400 hover:text-white transition-colors mt-4 md:mt-0">
              Voir tout le catalogue <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 150} direction="up">
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold px-2 py-1 bg-accent/20 text-accent rounded backdrop-blur-md border border-accent/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <span className="text-white text-sm font-semibold flex items-center gap-2">
                      Voir le projet <i className="fas fa-external-link-alt text-xs"></i>
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            Voir tout le catalogue <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;