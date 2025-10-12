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
      description: "Building scalable and efficient server-side applications with Node.js, Python, and modern frameworks.",
      color: "blue",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Smartphone,
      title: "Flutter Development",
      description: "Creating beautiful cross-platform mobile applications with Flutter, delivering native performance.",
      color: "purple",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "UI/UX Design",
      description: "Designing intuitive interfaces with attention to detail, animations, and user experience.",
      color: "indigo",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 p-8 hover:border-blue-400 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl fade-in-on-scroll hover-glow group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${specialty.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl animate-float`}
                     style={{ animationDelay: `${index * 0.5}s` }}>
                  <specialty.icon size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">{specialty.title}</h3>
                <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center fade-in-on-scroll">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border-2 border-gray-200 hover:border-blue-400 transition-all duration-500">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate full-stack developer who loves turning ideas into reality through code. 
              With expertise in backend development and Flutter, I create robust, scalable applications 
              that not only function flawlessly but also provide exceptional user experiences. 
              I'm constantly learning and exploring new technologies to stay at the forefront of development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;