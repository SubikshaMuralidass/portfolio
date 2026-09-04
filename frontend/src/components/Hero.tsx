import React from 'react';
import { Github, Linkedin, Mail, Code2, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center shadow-2xl">
            <Code2 size={64} className="text-primary" />
          </div>
        </div>

        {/* Name and title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
          Subiksha Muralidass
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Software Engineer - Python Backend & AI 
        </p>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Building scalable systems, integrating AI, and solving complex backend challenges. 
          Passionate about system design, performance optimization, and shipping production code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-opacity-90 transition transform hover:scale-105 shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#ai-assistant"
            className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:bg-opacity-10 transition"
          >
            Try AI Assistant
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-gray-400">
          <a
            href="https://github.com/SubikshaMuralidass"
            className="hover:text-accent transition"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/subiksha-muralidass-he110"
            className="hover:text-accent transition"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:hello@subikshamuralidass.tech"
            className="hover:text-accent transition"
            title="Email"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <Mail size={28} />
          </a>
          <a
            href="https://discord.com/users/1508855216697507951"
            className="hover:text-accent transition"
            title="Discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={28} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <div className="text-gray-500 text-sm">Scroll to explore</div>
          <div className="text-accent text-2xl">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
