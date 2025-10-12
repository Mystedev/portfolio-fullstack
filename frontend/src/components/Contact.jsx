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
    <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="fade-in-on-scroll">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Let's Talk</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 p-6 hover:border-blue-400 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-semibold">Email</p>
                    <a href={`mailto:${mockPersonalInfo.email}`} className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-lg">
                      {mockPersonalInfo.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 p-6 hover:border-purple-400 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-semibold">Location</p>
                    <p className="text-gray-800 font-medium text-lg">Available for remote work</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 p-8 fade-in-on-scroll hover:border-blue-400 transition-all duration-500 hover:shadow-2xl" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 text-sm font-semibold">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white border-2 border-gray-300 text-gray-800 focus:border-blue-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 text-sm font-semibold">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white border-2 border-gray-300 text-gray-800 focus:border-blue-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 text-sm font-semibold">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white border-2 border-gray-300 text-gray-800 focus:border-blue-500 resize-none transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
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