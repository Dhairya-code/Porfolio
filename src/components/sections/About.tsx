'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Code2, Brain, Rocket, Target } from 'lucide-react';

export function About(): JSX.Element {
  const highlights = [
    {
      icon: Code2,
      title: 'Technical Skills',
      description: 'Proficient in multiple programming languages and modern development frameworks',
    },
    {
      icon: Brain,
      title: 'AI Enthusiast',
      description: 'Passionate about artificial intelligence and machine learning applications',
    },
    {
      icon: Rocket,
      title: 'Project-Focused',
      description: 'Hands-on experience building real-world applications and solving practical problems',
    },
    {
      icon: Target,
      title: 'Continuous Learning',
      description: 'Committed to staying updated with latest technologies and industry trends',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Dedicated to building innovative solutions through code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 hover:border-blue-500 transition-colors duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Who I Am</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I'm a B.Tech Computer Science and Engineering student with a strong foundation in programming 
                and a passion for creating innovative technological solutions. My journey began with a Diploma 
                in CSE, where I developed a solid understanding of fundamental computing concepts.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I thrive on challenging projects that push the boundaries of what's possible with code, 
                particularly in areas like AI, web development, and data structures & algorithms.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-purple-500 transition-colors duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What Drives Me</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                My approach to software development is centered around continuous learning and practical 
                application. I believe in building projects that solve real-world problems and create 
                meaningful impact.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Whether it's developing web applications, exploring AI implementations, or optimizing 
                algorithms, I'm always eager to take on new challenges and expand my technical expertise.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
