import React from 'react';
import { BookOpen } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url?: string;
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Your First Internship: Things I Wish I Knew Before Starting',
      excerpt: 'Starting your first internship can feel overwhelming. Here are the lessons, mistakes, and practical things I wish I had known before stepping into my first internship.',
      date: '2025-02-19',
      readTime: '4 min',
      tags: ['Internhip', 'Student', 'Career'],
      url: 'https://medium.com/@subiksham88/your-first-internship-things-i-wish-i-knew-before-starting-b4dd63c78340',
    },
    {
      id: '2',
      title: 'AI Is Changing Education — Is Higher Education Ready?',
      excerpt: 'Artificial intelligence is transforming how students learn, teachers teach, and universities assess knowledge. But are higher education institutions adapting fast enough to prepare students for an AI-driven future?',
      date: '2024-01-08',
      readTime: '10 min',
      tags: ['AI/ML', 'LLMs', 'Production'],
      url: 'https://medium.com/@subiksham88/ai-is-changing-education-is-higher-education-ready-aab0d76ab52e',
    },
    {
      id: '3',
      title: 'Starting College Again? Here’s What I’d Do Differently',
      excerpt: 'Looking back at my college journey, there are plenty of things I would approach differently. Here are the lessons, mistakes, and practical choices I wish I had known before starting college.',
      date: '2024-01-01',
      readTime: '12 min',
      tags: ['System Design', 'Caching', 'Redis'],
      url: 'https://medium.com/@subiksham88/starting-college-again-heres-what-i-d-do-differently-b169529ed971',
    },
    {
      id: '4',
      title: 'Not Ready for DSA? Start With These Math & Logic Problems',
      excerpt: 'Struggling to get started with Data Structures and Algorithms? Build your problem-solving foundation first with simple math, logic, and pattern-based problems that make DSA easier to understand.',
      date: '2023-12-25',
      readTime: '9 min',
      tags: ['Databases', 'PostgreSQL', 'Performance'],
      url: 'https://medium.com/@subiksham88/not-ready-for-dsa-start-with-these-math-logic-problems-c4334adbbe5e',
    },
  ];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="blog" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <BookOpen size={36} className="text-accent" />
          <h2 className="text-4xl font-bold text-accent">Blog</h2>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary border border-gray-700 rounded-lg p-6 hover:border-accent transition hover:shadow-lg group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-accent group-hover:text-blue-300 transition">
                  {post.title}
                </h3>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                  {post.readTime}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            More technical articles coming soon...
          </p>
          <a
            href="https://medium.com/@subiksham88"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 border border-accent text-accent rounded hover:bg-accent hover:text-primary transition"
          >
            Read on Medium
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
