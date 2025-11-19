import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'secondary';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClassName: Record<BadgeVariant, string> = {
  default: 'bg-blue-600 text-white',
  secondary: 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        variantClassName[variant],
        className,
      )}
      {...props}
    />
  ),
);

Badge.displayName = 'Badge';

