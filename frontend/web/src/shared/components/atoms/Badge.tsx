import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@shared/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20',
        secondary: 'bg-gray-800 text-gray-100 hover:bg-gray-700',
        destructive: 'bg-red-500/10 text-red-400 hover:bg-red-500/20',
        error: 'bg-red-500/10 text-red-400 hover:bg-red-500/20',
        success: 'bg-green-500/10 text-green-400 hover:bg-green-500/20',
        warning: 'bg-amber-500/10 text-amber-400 hover:bg-amber-500/20',
        outline: 'text-gray-200 border border-gray-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
