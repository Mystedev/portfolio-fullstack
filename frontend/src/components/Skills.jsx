import React, { useEffect, useRef } from 'react';
import { mockSkills } from '../mockData';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const skillsRef = useRef(null);

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

    const elements = skillsRef.current?.querySelectorAll('.fade-in-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { name: 'Backend Development', skills: mockSkills.backend, color: 'emerald' },
    { name: 'Mobile Development', skills: mockSkills.mobile, color: 'blue' },
    { name: 'Design & UI/UX', skills: mockSkills.design, color: 'purple' },
    { name: 'Tools & Others', skills: mockSkills.other, color: 'orange' }
  ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-emerald-400">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-slate-900 border-slate-700 p-6 hover:border-emerald-400 transition-all duration-300 fade-in-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-xl font-bold text-white mb-6">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 group-hover:text-emerald-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-emerald-400 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-16 text-center fade-in-on-scroll">
          <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Node.js', 'Python', 'Flutter', 'Dart', 'FastAPI', 'Express', 'MongoDB', 'PostgreSQL', 
              'Redis', 'Docker', 'Firebase', 'Git', 'REST APIs', 'WebSocket', 'Kubernetes'].map((tech, index) => (
              <Badge
                key={index}
                className="bg-slate-900 text-slate-200 border-slate-700 hover:border-emerald-400 hover:text-emerald-400 transition-all px-4 py-2 text-sm cursor-default"
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