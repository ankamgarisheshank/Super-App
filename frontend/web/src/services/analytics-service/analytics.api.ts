import type { KPIMetrics, ChartDataPoint, TimeRange } from './analytics.types';

// Mocking the API responses for now to allow UI development without a fully complete backend.
// In a real environment, these would be `api.get(...)` calls.
export const AnalyticsAPI = {
  getKPIs: async (range: TimeRange): Promise<KPIMetrics> => {
    // Simulated network delay
    await new Promise(r => setTimeout(r, 600));
    
    // Fake data logic based on range
    const multiplier = range === '7d' ? 1 : range === '30d' ? 4 : range === '12m' ? 48 : 10;
    
    return {
      totalRevenue: 24500 * multiplier,
      revenueDelta: 12.5,
      totalUsers: 1420 * multiplier,
      usersDelta: 5.2,
      activeOrders: 84 * (multiplier > 1 ? 2 : 1), // doesn't scale perfectly linearly
      systemHealth: 99.9,
    };
  },

  getRevenueSeries: async (range: TimeRange): Promise<ChartDataPoint[]> => {
    await new Promise(r => setTimeout(r, 800));
    const points = range === '7d' ? 7 : range === '30d' ? 30 : 12;
    const data: ChartDataPoint[] = [];
    
    let base = 5000;
    for (let i = points; i > 0; i--) {
      base += Math.floor(Math.random() * 2000 - 500); // Random walk
      const date = new Date();
      if (range === '12m') {
        date.setMonth(date.getMonth() - i);
      } else {
        date.setDate(date.getDate() - i);
      }
      
      data.push({
        timestamp: date.toISOString(),
        value: Math.max(0, base),
        compareValue: Math.max(0, base * 0.8 + (Math.random() * 1000 - 500)), // previous period
      });
    }
    return data;
  },

  getUserGrowthSeries: async (range: TimeRange): Promise<ChartDataPoint[]> => {
    await new Promise(r => setTimeout(r, 700));
    const points = range === '7d' ? 7 : range === '30d' ? 30 : 12;
    const data: ChartDataPoint[] = [];
    
    let base = 100;
    for (let i = points; i > 0; i--) {
      base += Math.floor(Math.random() * 50); // always growing
      const date = new Date();
      if (range === '12m') {
        date.setMonth(date.getMonth() - i);
      } else {
        date.setDate(date.getDate() - i);
      }
      
      data.push({
        timestamp: date.toISOString(),
        value: base,
      });
    }
    return data;
  }
};
