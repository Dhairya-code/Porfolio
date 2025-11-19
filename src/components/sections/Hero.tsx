'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export function Hero(): JSX.Element {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 -z-10" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="inline-block">
            <span className="text-sm md:text-base font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Dhairya Verma
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
            Aspiring Software Developer | AI & Web Enthusiast | Project-Focused Problem Solver
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            B.Tech CSE student passionate about building innovative solutions with code, AI, and modern web technologies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
