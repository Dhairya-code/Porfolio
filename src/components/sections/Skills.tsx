'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

export function Skills(): JSX.Element {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS'],
      color: 'blue',
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Express.js', 'Next.js'],
      color: 'purple',
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'AI Tools', 'Postman'],
      color: 'pink',
    },
    {
      title: 'Core Competencies',
      skills: [
        'Data Structures & Algorithms',
        'Database Management',
        'AI & ML Foundations',
        'Web Development',
        'Problem Solving',
        'API Development',
      ],
      color: 'green',
    },
  ];

  const getColorClasses = (color: string): { border: string; badge: string } => {
    const colors: Record<string, { border: string; badge: string }> = {
      blue: {
        border: 'hover:border-blue-500',
        badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      },
      purple: {
        border: 'hover:border-purple-500',
        badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      },
      pink: {
        border: 'hover:border-pink-500',
        badge: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
      },
      green: {
        border: 'hover:border-green-500',
        badge: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
      },
    };
    return colors[color] || colors['blue'];
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A diverse toolkit for building modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <Card
                key={index}
                className={`border-2 ${colorClasses.border} transition-all duration-300 hover:shadow-lg`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`${colorClasses.badge} px-3 py-1 text-sm font-medium`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Info */}
        <Card className="mt-8 border-2 border-dashed border-gray-300 dark:border-gray-700">
          <CardContent className="p-8 text-center">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              <span className="font-semibold">Always Learning:</span> Currently exploring advanced AI/ML techniques, 
              cloud technologies, and full-stack development best practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
