import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { mockPersonalInfo } from '../mockData';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

    const elements = contactRef.current?.querySelectorAll('.fade-in-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="fade-in-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700 p-4 hover:border-emerald-400 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a href={`mailto:${mockPersonalInfo.email}`} className="text-white hover:text-emerald-400 transition-colors">
                      {mockPersonalInfo.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-slate-800 border-slate-700 p-4 hover:border-emerald-400 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white">Available for remote work</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800 border-slate-700 p-8 fade-in-on-scroll" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2 text-sm">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-900 border-slate-700 text-white focus:border-emerald-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2 text-sm">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-900 border-slate-700 text-white focus:border-emerald-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2 text-sm">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-slate-900 border-slate-700 text-white focus:border-emerald-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                size="lg"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;