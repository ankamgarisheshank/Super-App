import type { TimeRange } from './analytics.types';

export const analyticsKeys = {
  all: ['analytics'] as const,
  kpi: (range: TimeRange) => [...analyticsKeys.all, 'kpi', range] as const,
  chart: (type: 'revenue' | 'users', range: TimeRange) => [...analyticsKeys.all, 'chart', type, range] as const,
};
