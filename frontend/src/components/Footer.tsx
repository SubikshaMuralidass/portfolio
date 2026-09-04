import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-gray-700 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <div>
            © {currentYear} Subiksha. Built with React, FastAPI, and ❤️
          </div>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-accent transition">
              Home
            </a>
            <a href="#projects" className="hover:text-accent transition">
              Projects
            </a>
            <a href="#ai-assistant" className="hover:text-accent transition">
              AI Chat
            </a>
            <a href="#contact" className="hover:text-accent transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
