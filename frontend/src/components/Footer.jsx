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
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-emerald-400">&lt;</span>
              {mockPersonalInfo.name.split(' ')[0]}
              <span className="text-emerald-400">/&gt;</span>
            </div>
            <p className="text-slate-400 mb-4">
              {mockPersonalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={mockPersonalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href={mockPersonalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={mockPersonalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href={`mailto:${mockPersonalInfo.email}`}
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm flex items-center gap-2">
            © {currentYear} {mockPersonalInfo.name}. Made with <Heart size={16} className="text-emerald-400" fill="currentColor" /> using React & FastAPI
          </p>
          <p className="text-slate-400 text-sm">
            Designed & Built by {mockPersonalInfo.name.split(' ')[0]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;