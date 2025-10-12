import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-emerald-400">&lt;</span>
            AR
            <span className="text-emerald-400">/&gt;</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-200 hover:text-emerald-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-200 hover:text-emerald-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-200 hover:text-emerald-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-200 hover:text-emerald-400 transition-colors">
              Skills
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-slate-200 hover:text-emerald-400 py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-200 hover:text-emerald-400 py-2">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-slate-200 hover:text-emerald-400 py-2">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-slate-200 hover:text-emerald-400 py-2">
              Skills
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white mt-2">
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;