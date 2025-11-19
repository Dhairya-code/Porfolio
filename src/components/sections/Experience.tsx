'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, TrendingUp, Code, Users } from 'lucide-react';

interface Initiative {
  icon: typeof Lightbulb;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export function Experience(): JSX.Element {
  const initiatives: Initiative[] = [
    {
      icon: Lightbulb,
      title: 'Mind Fuel',
      subtitle: 'Personal Brand & Content Initiative',
      description: 'Building a personal brand focused on sharing knowledge about technology, coding practices, and software development insights. Creating content to help aspiring developers learn and grow.',
      tags: ['Content Creation', 'Tech Education', 'Community Building'],
    },
    {
      icon: Code,
      title: 'Self-Learning Projects',
      subtitle: 'Continuous Skill Development',
      description: 'Regularly working on personal projects to explore new technologies, frameworks, and programming paradigms. Each project serves as a learning opportunity and portfolio addition.',
      tags: ['Full-Stack', 'AI/ML', 'Web Development'],
    },
    {
      icon: TrendingUp,
      title: 'Affiliate Marketing',
      subtitle: 'Digital Marketing & Analytics',
      description: 'Exploring digital marketing strategies and analytics through affiliate marketing initiatives. Gaining insights into user behavior, conversion optimization, and online business models.',
      tags: ['Marketing', 'Analytics', 'Strategy'],
    },
    {
      icon: Users,
      title: 'Open Source Contributions',
      subtitle: 'Community Involvement',
      description: 'Contributing to open source projects and collaborating with developers worldwide. Learning best practices in code review, documentation, and collaborative development.',
      tags: ['Open Source', 'Collaboration', 'GitHub'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Initiatives</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Beyond academics: Building, learning, and creating value
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {initiative.title}
                      </CardTitle>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {initiative.subtitle}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {initiative.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {initiative.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Open to Opportunities
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Looking for internships and collaborative projects in software development, AI/ML, 
              and web technologies. Eager to contribute to innovative teams and learn from experienced professionals.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
