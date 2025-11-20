import React, { useEffect, useRef, useState } from 'react';
import { mockSkills } from '../mockData';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = skillsRef.current?.querySelectorAll('.fade-in-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { name: 'Desarrollo Backend', skills: mockSkills.backend, gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Desarrollo Móvil', skills: mockSkills.mobile, gradient: 'from-purple-500 to-pink-500' },
    { name: 'Diseño & UI/UX', skills: mockSkills.design, gradient: 'from-indigo-500 to-blue-500' },
    { name: 'Herramientas & Otros', skills: mockSkills.other, gradient: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-gradient-to-br from-white via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Habilidades & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experiencia</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para dar vida a las ideas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 p-8 hover:border-blue-400 transition-all duration-500 fade-in-on-scroll hover:shadow-2xl group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-blue-600 transition-colors">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium group-hover/skill:text-blue-600 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 text-sm font-bold bg-blue-100 px-3 py-1 rounded-full">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                      <div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out skill-bar-fill shadow-md`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Stack Badges with animations */}
        <div className="mt-16 text-center fade-in-on-scroll">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Tecnologías</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Node.js', 'Python', 'Flutter', 'Dart', 'MySQL', 'MongoDB', 'PostgreSQL', 'Java', 'Javascript', 
              'Redis', 'Firebase', 'Git', 'REST APIs', 'Hibernate','SpringBoot'].map((tech, index) => (
              <Badge
                key={index}
                className="bg-white border border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all duration-300 px-4 py-1.5 text-sm cursor-default transform hover:scale-105"
                style={{ 
                  animationDelay: `${index * 0.03}s`,
                  animation: 'fadeInUp 0.5s ease-out both'
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;