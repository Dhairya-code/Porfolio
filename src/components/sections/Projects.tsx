'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export function Projects(): JSX.Element {
  const projects: Project[] = [
    {
      title: 'AI-Powered Web Application',
      description: 'A full-stack web application integrating AI capabilities for intelligent data processing and user recommendations. Features include user authentication, real-time updates, and responsive design.',
      techStack: ['React', 'Node.js', 'Python', 'AI/ML'],
      githubUrl: '#',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
    },
    {
      title: 'Data Structures Visualizer',
      description: 'Interactive web tool for visualizing common data structures and algorithms. Helps students understand complex concepts through animated representations and step-by-step execution.',
      techStack: ['JavaScript', 'React', 'CSS', 'Algorithms'],
      githubUrl: '#',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=400&fit=crop',
    },
    {
      title: 'Portfolio & Blog Platform',
      description: 'A modern CMS-based platform for creators to showcase their work and share insights. Features markdown support, SEO optimization, and a clean, minimalist design.',
      techStack: ['Next.js', 'React', 'CSS', 'CMS'],
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop',
    },
    {
      title: 'Smart Task Manager',
      description: 'A productivity application with AI-assisted task prioritization, deadline tracking, and collaboration features. Helps teams stay organized and efficient.',
      techStack: ['React', 'Node.js', 'Database', 'AI'],
      githubUrl: '#',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with product management, shopping cart, payment integration, and order tracking. Built with scalability and security in mind.',
      techStack: ['React', 'Node.js', 'Database', 'Payment API'],
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and experiments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl group overflow-hidden"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            More projects available on my GitHub profile
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('#', '_blank')}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
