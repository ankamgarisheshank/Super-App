import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from '@shared/utils';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            'flex h-11 w-full rounded-xl border bg-gray-900 px-4 py-3 text-sm text-white placeholder:text-gray-500 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
            error
              ? 'border-red-500 focus-visible:ring-red-500'
              : 'border-gray-700 focus-visible:ring-blue-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-500 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
