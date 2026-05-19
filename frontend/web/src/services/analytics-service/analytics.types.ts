export type TimeRange = '7d' | '30d' | '90d' | '12m' | 'all';

export interface KPIMetrics {
  totalRevenue: number;
  revenueDelta: number; // percentage change
  totalUsers: number;
  usersDelta: number;
  activeOrders: number;
  systemHealth: number; // percentage (0-100)
}

export interface ChartDataPoint {
  timestamp: string; // ISO String or 'MMM DD' depending on backend
  value: number;
  compareValue?: number; // For previous period comparison
}
