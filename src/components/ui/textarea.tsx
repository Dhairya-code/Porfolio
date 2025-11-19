import type { TextareaHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white',
        className,
      )}
      {...props}
    />
  ),
);

Textarea.displayName = 'Textarea';

