import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';
import { mockPersonalInfo } from '../mockData';
import { Button } from './ui/button';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-500/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-40 w-3 h-3 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-5 h-5 bg-indigo-500/30 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-60 right-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-6 animate-fade-in">
            <span className="text-blue-600 font-mono text-sm sm:text-base font-semibold px-4 py-2 bg-blue-100 rounded-full inline-block animate-scale-pulse">
              👋 Hi, my name is
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-slide-up">
            {mockPersonalInfo.name}
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-700 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {mockPersonalInfo.title}
          </h2>
          
          <p className="text-xl sm:text-2xl text-blue-600 mb-8 font-semibold animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {mockPersonalInfo.tagline}
          </p>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-12 animate-slide-up leading-relaxed" style={{ animationDelay: '0.6s' }}>
            {mockPersonalInfo.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={() => scrollToSection('projects')} 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '1s' }}>
            <a 
              href={mockPersonalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transition-all transform hover:scale-125 hover:rotate-12"
            >
              <Github size={28} />
            </a>
            <a 
              href={mockPersonalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transition-all transform hover:scale-125 hover:rotate-12"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href={mockPersonalInfo.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transition-all transform hover:scale-125 hover:rotate-12"
            >
              <Twitter size={28} />
            </a>
            <a 
              href={`mailto:${mockPersonalInfo.email}`} 
              className="text-gray-600 hover:text-blue-600 transition-all transform hover:scale-125 hover:rotate-12"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={40} className="text-blue-600" />
      </div>
    </section>
  );
};

export default Hero;