'use client';

import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  icon: typeof GraduationCap;
}

export function Education(): JSX.Element {
  const education: EducationItem[] = [
    {
      degree: 'Bachelor of Technology (B.Tech) in CSE',
      institution: 'Shri Ram Group of Colleges, Muzaffarnagar - Lateral Entry',
      period: 'Current',
      description: 'Pursuing advanced studies in Computer Science and Engineering with focus on modern software development practices, AI/ML, and system design.',
      icon: GraduationCap,
    },
    {
      degree: 'Diploma in Computer Science and Engineering',
      institution: 'S.D.College of Engineering and Technology, Muzaffarnagar',
      period: 'Completed',
      description: 'Built strong foundation in programming fundamentals, data structures, algorithms, and basic software engineering principles.',
      icon: Award,
    },
    {
      degree: 'Secondary School',
      institution: 'S.D.Public School, Muzaffarnagar',
      period: 'Completed',
      description: 'Completed secondary education with a focus on English, Hindi, Mathematics, Science, and Social Studies. Built a strong academic foundation that developed analytical thinking, problem-solving skills, and effective communication—laying the groundwork for higher studies and technical pursuits.',
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Academic journey and qualifications
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          <div className="space-y-12">
            {education.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 items-center justify-center shadow-lg z-10">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content card */}
                  <Card
                    className={`md:w-5/12 w-full border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl ${
                      isEven ? 'md:text-right' : ''
                    }`}
                  >
                    <CardContent className="p-6 space-y-3">
                      <div className="flex md:hidden items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      </div>

                      <div className="hidden md:block mb-2">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.degree}
                      </h3>
                      
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {item.institution}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
