export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  recruiterFocus: {
    impact: string[];
    outcome: string;
  };
  developerFocus: {
    architecture: string;
    apiFlow: string;
    codeSnippets: string[];
    scalingConsiderations: string[];
    engineeringDecisions: string[];
  };
  image?: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface APIMetrics {
  totalRequests: number;
  averageResponseTime: number;
  errorRate: number;
  topEndpoints: Array<{ endpoint: string; count: number }>;
}
