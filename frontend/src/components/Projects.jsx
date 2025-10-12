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
    <section id="projects" ref={projectsRef} className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 overflow-hidden hover:border-indigo-400 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl fade-in-on-scroll group hover:rotate-1"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-indigo-100 to-purple-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 transform group-hover:scale-110 transition-transform">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs hover:bg-indigo-200 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="bg-gray-200 text-gray-700 text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-indigo-400 transition-all transform hover:scale-105"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
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