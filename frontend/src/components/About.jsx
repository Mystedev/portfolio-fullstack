import React, { useEffect, useRef } from 'react';
import { Code, Smartphone, Server } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  const aboutRef = useRef(null);

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

    const elements = aboutRef.current?.querySelectorAll('.fade-in-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const specialties = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Building scalable and efficient server-side applications with Node.js, Python, and modern frameworks."
    },
    {
      icon: Smartphone,
      title: "Flutter Development",
      description: "Creating beautiful cross-platform mobile applications with Flutter, delivering native performance."
    },
    {
      icon: Code,
      title: "UI/UX Design",
      description: "Designing intuitive interfaces with attention to detail, animations, and user experience."
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="bg-slate-900 border-slate-700 p-6 hover:border-emerald-400 transition-all duration-300 hover:transform hover:-translate-y-2 fade-in-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                  <specialty.icon size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{specialty.title}</h3>
                <p className="text-slate-300 leading-relaxed">{specialty.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center fade-in-on-scroll">
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer who loves turning ideas into reality through code. 
            With expertise in backend development and Flutter, I create robust, scalable applications 
            that not only function flawlessly but also provide exceptional user experiences. 
            I'm constantly learning and exploring new technologies to stay at the forefront of development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;