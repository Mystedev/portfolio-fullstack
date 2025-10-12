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
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroRef.current.style.opacity = 1 - scrolled / 700;
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-6 animate-fade-in">
            <span className="text-emerald-400 font-mono text-sm sm:text-base">Hi, my name is</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-up">
            {mockPersonalInfo.name}
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-400 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {mockPersonalInfo.title}
          </h2>
          
          <p className="text-lg sm:text-xl text-emerald-400 mb-8 font-mono animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {mockPersonalInfo.tagline}
          </p>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {mockPersonalInfo.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
              View My Work
            </Button>
            <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-800">
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '1s' }}>
            <a href={mockPersonalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Github size={24} />
            </a>
            <a href={mockPersonalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={mockPersonalInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href={`mailto:${mockPersonalInfo.email}`} className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-emerald-400" />
      </div>
    </section>
  );
};

export default Hero;