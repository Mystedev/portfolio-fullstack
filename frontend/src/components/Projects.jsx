import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { mockProjects } from '../mockData';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = projectsRef.current?.querySelectorAll('.fade-in-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-slate-800 border-slate-700 overflow-hidden hover:border-emerald-400 transition-all duration-300 hover:transform hover:-translate-y-2 fade-in-on-scroll group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-slate-600 text-slate-200 hover:bg-slate-700"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;