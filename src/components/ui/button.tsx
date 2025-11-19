import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

type ButtonVariant = 'default' | 'outline' | 'ghost';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

const variantClasses: Record<ButtonVariant, string> = {
  default:
    'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
  outline:
    'border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30',
  ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'px-4 py-2 rounded-lg text-sm font-medium',
  sm: 'px-3 py-1.5 rounded-md text-sm font-medium',
  lg: 'px-8 py-3 rounded-full text-base font-semibold',
  icon: 'h-10 w-10 rounded-full flex items-center justify-center',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex items-center justify-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

