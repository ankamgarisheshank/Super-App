import { useQuery } from '@tanstack/react-query';
import { AnalyticsAPI } from './analytics.api';
import { analyticsKeys } from './analytics.keys';
import type { TimeRange } from './analytics.types';

export function useDashboardKPIs(range: TimeRange) {
  return useQuery({
    queryKey: analyticsKeys.kpi(range),
    queryFn: () => AnalyticsAPI.getKPIs(range),
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
}

export function useRevenueChart(range: TimeRange) {
  return useQuery({
    queryKey: analyticsKeys.chart('revenue', range),
    queryFn: () => AnalyticsAPI.getRevenueSeries(range),
    staleTime: 5 * 60 * 1000,
  });
}

export function useUserGrowthChart(range: TimeRange) {
  return useQuery({
    queryKey: analyticsKeys.chart('users', range),
    queryFn: () => AnalyticsAPI.getUserGrowthSeries(range),
    staleTime: 5 * 60 * 1000,
  });
}
