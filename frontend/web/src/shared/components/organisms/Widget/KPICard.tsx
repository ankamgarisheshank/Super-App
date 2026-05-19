import { TrendingDown, TrendingUp } from 'lucide-react';
import { WidgetContainer } from './WidgetContainer';
import { cn } from '@shared/utils';

interface KPICardProps {
  title: string;
  value: string | number;
  delta?: number;
  subtitle?: string;
  isLoading?: boolean;
  isError?: boolean;
  status?: 'good' | 'warning' | 'critical';
}

export function KPICard({
  title,
  value,
  delta,
  subtitle,
  isLoading,
  isError,
  status,
}: KPICardProps) {
  return (
    <WidgetContainer
      title={title}
      subtitle={subtitle}
      isLoading={isLoading}
      isError={isError}
      className="min-h-[140px]"
    >
      <div className="flex flex-col justify-end flex-1">
        <div className="flex items-end justify-between">
          <div className={cn(
            "text-3xl font-bold tracking-tight",
            status === 'warning' && 'text-amber-400',
            status === 'critical' && 'text-red-400',
            !status && 'text-white'
          )}>
            {value}
          </div>
          {typeof delta === 'number' && (
            <div
              className={cn(
                'flex items-center text-sm font-medium',
                delta >= 0 ? 'text-green-400' : 'text-red-400'
              )}
            >
              {delta >= 0 ? (
                <TrendingUp className="mr-1 h-4 w-4" />
              ) : (
                <TrendingDown className="mr-1 h-4 w-4" />
              )}
              <span>{Math.abs(delta)}%</span>
            </div>
          )}
        </div>
      </div>
    </WidgetContainer>
  );
}
