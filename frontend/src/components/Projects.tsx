import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { useViewMode } from '../hooks/useViewMode';
import { ExternalLink, Github, Code2, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const { viewMode, toggleViewMode } = useViewMode();
  const [projects] = useState<Project[]>(sampleProjects);


  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-secondary to-primary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-accent">Projects</h2>
            <p className="text-gray-400 mt-2">Backend systems, AI integration, system design</p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-4 bg-secondary border border-gray-700 rounded-lg p-1">
            <button
              onClick={toggleViewMode}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition ${
                viewMode === 'recruiter'
                  ? 'bg-accent text-primary'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Zap size={18} />
              Recruiter Mode
            </button>
            <button
              onClick={toggleViewMode}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition ${
                viewMode === 'developer'
                  ? 'bg-accent text-primary'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Code2 size={18} />
              Developer Mode
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { viewMode } = useViewMode();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-primary border border-gray-700 rounded-lg overflow-hidden hover:border-accent transition">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-accent">{project.title}</h3>

        {/* Recruiter View */}
        {viewMode === 'recruiter' && (
          <div className="space-y-4">
            <p className="text-gray-300">{project.shortDescription}</p>
            
            <div>
              <h4 className="font-semibold text-accent mb-2">Impact & Outcomes:</h4>
              <ul className="space-y-1 text-gray-300">
                {project.recruiterFocus.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary border border-gray-700 rounded p-4">
              <p className="text-sm text-gray-300">
                <strong className="text-accent">Outcome:</strong> {project.recruiterFocus.outcome}
              </p>
            </div>
          </div>
        )}

        {/* Developer View */}
        {viewMode === 'developer' && (
          <div className="space-y-4">
            <div className="bg-secondary border border-gray-700 rounded p-4 font-mono text-sm">
              <p className="text-gray-400 mb-2">Architecture:</p>
              <p className="text-gray-200">{project.developerFocus.architecture}</p>
            </div>

            <div>
              <h4 className="font-semibold text-accent mb-2">API Flow:</h4>
              <p className="text-gray-300 text-sm">{project.developerFocus.apiFlow}</p>
            </div>

            <div>
              <h4 className="font-semibold text-accent mb-2">Engineering Decisions:</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                {project.developerFocus.engineeringDecisions.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="text-accent hover:text-blue-400 transition text-sm font-semibold"
            >
              {expanded ? '▼ Hide Details' : '▶ Show Scaling Considerations'}
            </button>

            {expanded && (
              <div className="bg-secondary border border-gray-700 rounded p-4">
                <h4 className="font-semibold text-accent mb-2">Scaling Considerations:</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  {project.developerFocus.scalingConsiderations.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent bg-opacity-20 text-accent rounded hover:bg-opacity-30 transition"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded hover:bg-accent hover:bg-opacity-10 transition"
            >
              <Github size={16} />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Sample projects for demo
const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'High-Performance Cache Layer',
    description: 'Designed and implemented a distributed caching system',
    shortDescription: 'Building a Redis-based caching layer to reduce repeated database queries and improve API response times',
    technologies: ['Redis', 'Python', 'Django', 'PostgreSQL'],
    recruiterFocus: {
      impact: ['Designed to reduce repeated database queries', 'Designed to improve API response times', 'Focused on efficient caching and scalability'],
      outcome: 'Performance improvements will be measured through load testing after implementation',
    },
    developerFocus: {
      architecture: 'Cache-Aside pattern with TTL invalidation and warm-up strategies',
      apiFlow: 'Client → FastAPI → Cache Layer → Database',
      codeSnippets: ['Cache key generation', 'Async write-through patterns'],
      engineeringDecisions: [
        'Cache-Aside pattern for flexibility',
        'TTL-based expiration for consistency',
        'Async cache warm-up during off-peak hours',
      ],
      scalingConsiderations: [
        'Multi-node Redis cluster for HA',
        'Cache stampede prevention with locks',
        'Distributed cache invalidation strategies',
      ],
    },
  },
  {
    id: '2',
    title: 'AI Grocery & Meal Management Assistant',
    description: 'AI-powered assistant for managing household groceries, tracking expiry and consumption, recommending meals, and generating intelligent shopping lists.',
    shortDescription: 'Building an AI-assisted grocery and meal management system with inventory tracking, recipe recommendations, and smart shopping lists.',
    technologies: ['React Native', 'FastAPI', 'LangChain', 'OpenAI', 'PostgreSQL', 'Azure'],
    recruiterFocus: {
      impact: ['Reduce household food waste through expiry and consumption tracking', 'Recommend meals based on available and soon-to-expire ingredients', 'Generate personalized grocery lists from purchase history and inventory'],
      outcome: 'A smart kitchen assistant designed to simplify grocery management and reduce unnecessary food purchases.',
    },
    developerFocus: {
      architecture: 'React Native mobile app + FastAPI backend + PostgreSQL inventory system + LLM-powered recommendation layer',
      apiFlow: 'User Input → FastAPI → Inventory / Recipe Service → AI Processing → Personalized Recommendation',
      codeSnippets: ['Grocery inventory CRUD APIs', 'Recipe and ingredient matching', 'LLM structured-output pipeline', 'Shopping list generation logic'],
    engineeringDecisions: [
      'PostgreSQL for structured grocery, inventory, recipe, and household data',
      'LLM structured outputs for natural-language grocery and meal requests',
      'Deterministic backend logic for inventory quantities and expiry tracking',
      'Semantic search for matching recipes with available ingredients',
      'Background jobs for expiry and low-stock notifications',
    ],

    scalingConsiderations: [
      'Redis caching for frequently requested recommendations',
      'Asynchronous processing for receipt OCR and voice input',
      'Batch embedding generation for recipe data',
      'Separate AI workloads from core inventory APIs',
    ],
    },
  },
];

export default Projects;
