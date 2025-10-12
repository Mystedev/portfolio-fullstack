import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { mockPersonalInfo } from '../mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 border-t-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                &lt;{mockPersonalInfo.name.split(' ')[0]}/&gt;
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              {mockPersonalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 transition-all font-medium hover:translate-x-2 inline-block">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-all font-medium hover:translate-x-2 inline-block">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-all font-medium hover:translate-x-2 inline-block">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-all font-medium hover:translate-x-2 inline-block">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-all font-medium hover:translate-x-2 inline-block">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4 text-lg">Connect</h3>
            <div className="flex gap-4">
              <a
                href={mockPersonalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-xl transform hover:scale-110 hover:rotate-12"
              >
                <Github size={20} />
              </a>
              <a
                href={mockPersonalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-xl transform hover:scale-110 hover:rotate-12"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={mockPersonalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-xl transform hover:scale-110 hover:rotate-12"
              >
                <Twitter size={20} />
              </a>
              <a
                href={`mailto:${mockPersonalInfo.email}`}
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-xl transform hover:scale-110 hover:rotate-12"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-2">
            © {currentYear} {mockPersonalInfo.name}. Made with <Heart size={16} className="text-red-500 animate-scale-pulse" fill="currentColor" /> using React & FastAPI
          </p>
          <p className="text-gray-600 text-sm">
            Designed & Built by {mockPersonalInfo.name.split(' ')[0]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;