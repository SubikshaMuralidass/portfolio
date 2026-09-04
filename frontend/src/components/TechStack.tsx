import React from 'react';
import { Database, Code2, Zap, BarChart3, Braces, Cloud } from 'lucide-react';
import { Skill } from '../types';

const TechStack: React.FC = () => {
  const skills: Skill[] = [
    {
      category: 'Languages',
      items: ['Python', 'C Programming', 'SQL'],
      icon: 'Code2',
    },
    {
      category: 'Backend',
      items: ['FastAPI', 'Flask', 'Django', 'REST APIs'],
      icon: 'Braces',
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
      icon: 'Database',
    },
    {
      category: 'Tools',
      items: ['Azure', 'Git', 'Postman', 'Docker', 'VS Code', 'Supabase' ],
      icon: 'Cloud',
    },
    {
      category: 'Frontend',
      items: ['React', 'Tailwind CSS', 'HTML/CSS'],
      icon: 'Zap',
    },
    {
      category: 'AI/ML Tools',
      items: ['AI API', 'LLMs', 'Prompt Engineering', 'RAG Patterns', 'Generative AI'],
      icon: 'BarChart3',
    },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 size={32} />,
    Database: <Database size={32} />,
    Braces: <Braces size={32} />,
    Cloud: <Cloud size={32} />,
    Zap: <Zap size={32} />,
    BarChart3: <BarChart3 size={32} />,
  };

  return (
    <section id="tech-stack" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-accent">Tech Stack</h2>
        <p className="text-gray-400 mb-12">Tools and technologies I work with daily</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-primary border border-gray-700 rounded-lg p-6 hover:border-accent transition hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-accent">{iconMap[skill.icon || 'Code2']}</div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-accent hover:text-primary transition cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
