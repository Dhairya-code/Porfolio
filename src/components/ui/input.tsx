import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        'w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white',
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = 'Input';

