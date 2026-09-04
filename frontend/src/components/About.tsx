import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-accent">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a backend engineer with a passion for building scalable, efficient systems 
              that power real-world applications. My curiosity drives me to explore new technologies 
              and problem-solve at every level of the stack.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in writing clean, maintainable code and designing systems that can scale. 
              Whether it's optimizing database queries, architecting microservices, or integrating 
              AI models into production systems, I approach each challenge with thoughtfulness and precision.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring system design patterns, 
              experimenting with new frameworks, or reading tech articles.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-secondary border border-gray-700 rounded-lg p-6 hover:border-accent transition">
              <h3 className="text-xl font-semibold text-accent mb-3">🎯 Currently Focusing On</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✦ Strengthening my foundation to understand systems holistically</li>
                <li>✦ Preparing for Redis and GitHub certification exams</li>
                <li>✦ Advanced caching strategies and optimization</li>
                <li>✦ System design and scalability patterns</li>
              </ul>
            </div>

            <div className="bg-secondary border border-gray-700 rounded-lg p-6 hover:border-accent transition">
              <h3 className="text-xl font-semibold text-accent mb-3">💡 Problem-Solving Mindset</h3>
              <p className="text-gray-300 text-sm">
                I approach every problem by first understanding requirements, 
                then designing elegant solutions that balance performance, maintainability, and scalability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
