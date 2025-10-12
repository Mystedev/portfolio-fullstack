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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="text-xl font-bold cursor-pointer transition-all duration-300 hover:scale-110" 
            onClick={() => scrollToSection('home')}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              &lt;AR/&gt;
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 animate-slide-up">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 transition-all font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 transition-all font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 transition-all font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 transition-all font-medium"
            >
              Skills
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white mt-2"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;