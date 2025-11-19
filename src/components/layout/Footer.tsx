'use client';

import { Heart } from 'lucide-react';

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Dhairya Verma. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span>and lots of coffee</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
