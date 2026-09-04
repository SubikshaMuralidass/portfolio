import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary border-t border-gray-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-accent">Let's Connect</h2>
        <p className="text-gray-400 text-lg mb-12">
          I’m always open to learning, connecting with people, and talking about technology. Feel free to reach out!
        </p>

        <div className="flex justify-center items-center gap-2 mb-12 text-gray-300">
          <MapPin size={20} className="text-accent" />
          <span>Tamil Nadu, India</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:hello@subikshamuralidass.tech"
            className="bg-primary border border-gray-700 rounded-lg p-6 hover:border-accent transition hover:shadow-lg"
          >
            <Mail size={32} className="text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">hello@subikshamuralidass.tech</p>
          </a>

          <a
            href="https://discord.com/users/1508855216697507951"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary border border-gray-700 rounded-lg p-6 hover:border-accent transition hover:shadow-lg"
          >
            <MessageCircle size={32} className="text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Discord</h3>
            <p className="text-gray-400 text-sm">@gingerchaiofficiallyhere</p>
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/SubikshaMuralidass"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-300 rounded hover:bg-accent hover:text-primary transition"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/subiksha-muralidass-he110"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-300 rounded hover:bg-accent hover:text-primary transition"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        <div className="bg-primary border border-gray-700 rounded-lg p-6">
          <p className="text-gray-400 text-sm">
            Response time: Typically within 24 hours. For urgent matters, feel free to reach out on Discord or LinkedIn!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
