import React from 'react';
import { Briefcase } from 'lucide-react';

interface Internship {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  contributions: string[];
}

const Internships: React.FC = () => {
  const internships: Internship[] = [
    {
      id: '1',
      company: 'Vinsights Solution Pvt Ltd.',
      position: 'Backend and AI Intern',
      period: 'January 2026 - April 2026',
      description: 'Contributed to the core API infrastructure',
      contributions: [
        'Worked on backend development and implemented 3+ features',
        'Built and integrated REST APIs for application functionality',
        'Conducted 7+ POCs to evaluate different LLM techniques',
        'Tested recursive retrieval, LangExtract, and embedding models, and refined prompts based on response quality',
        'Debugged and fixed application issues',
      ],
    },
    {
      id: '2',
      company: 'Zhahi Info Tech',
      position: 'Web developer Intern',
      period: 'June 2025 - August 2025',
      description: 'Worked on designing and building websites',
      contributions: [
        'Designed and developed an online learning platform using web technologies',
        'Collaborated in a team environment and followed SDLC and deployment workflows',
        'Tested features and fixed application issues',
        'Developed responsive and user-friendly web pages',
      ],
    },
  ];

  return (
    <section id="internships" className="py-20 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase size={36} className="text-accent" />
          <h2 className="text-4xl font-bold text-accent">Internship Experience</h2>
        </div>

        <div className="space-y-8">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="bg-secondary border border-gray-700 rounded-lg p-8 hover:border-accent transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent">{internship.position}</h3>
                  <p className="text-gray-400">{internship.company}</p>
                </div>
                <span className="px-4 py-2 bg-accent bg-opacity-20 text-accent rounded text-sm font-semibold">
                  {internship.period}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{internship.description}</p>

              <div>
                <h4 className="font-semibold text-accent mb-3">Key Contributions:</h4>
                <ul className="space-y-2">
                  {internship.contributions.map((contribution, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-accent mt-1 flex-shrink-0">→</span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
