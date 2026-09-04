import React from 'react';
import { Award, Globe } from 'lucide-react';
import { Certificate } from '../types';

const Achievements: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'GATE CS 2026 Qualified ',
      issuer: 'NCB-GATE, Ministry of Education, India',
      date: '2026',
    },
    {
      id: '2',
      title: 'Advanced Django: Introduction to Django Rest Framework',
      issuer: 'Coursera',
      date: '2025',
      credentialUrl: 'https://coursera.org/verify/IKS1OYGJ81KW',
    },
    {
      id: '3',
      title: 'GitHub Foundations Certification',
      issuer: 'GitHub',
      date: '2026',
      credentialUrl: '#',
    },
    {
      id: '4',
      title: 'Redis Associate Developer Certification (Python)',
      issuer: 'Redis Labs',
      date: '2026',
      credentialUrl: '#',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Award size={36} className="text-accent" />
          <h2 className="text-4xl font-bold text-accent">Achievements & Certificates</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary border border-gray-700 rounded-lg p-6 hover:border-accent transition hover:shadow-lg cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <Award size={28} className="text-accent group-hover:scale-110 transition" />
                <Globe size={16} className="text-gray-500 group-hover:text-accent transition" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{cert.issuer}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
