import { ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '@shared/utils';
import { Can } from '@core/permissions';
import type { Permission } from '@shared/types';
import { Skeleton } from '../../atoms/Skeleton';

interface WidgetContainerProps {
  title: string;
  subtitle?: string;
  isLoading?: boolean;
  isError?: boolean;
  permission?: Permission;
  className?: string;
  action?: ReactNode;
  children: ReactNode;
}

export function WidgetContainer({
  title,
  subtitle,
  isLoading,
  isError,
  permission,
  className,
  action,
  children,
}: WidgetContainerProps) {
  const content = (
    <div
      className={cn(
        'flex h-full flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-5 backdrop-blur-xl',
        className
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-white tracking-tight">{title}</h3>
          {subtitle && <p className="mt-0.5 text-xs text-gray-400">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>

      <div className="flex min-h-[100px] flex-1 flex-col">
        {isLoading ? (
          <Skeleton className="h-full w-full rounded-xl" />
        ) : isError ? (
          <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-red-500/10 bg-red-500/5 p-4 text-red-400/80">
            <AlertCircle className="mb-2 h-6 w-6" />
            <p className="text-sm font-medium">Failed to load data</p>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );

  if (permission) {
    return <Can permission={permission}>{content}</Can>;
  }
  return content;
}
