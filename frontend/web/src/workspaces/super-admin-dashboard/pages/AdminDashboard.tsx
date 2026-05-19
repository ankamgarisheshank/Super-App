import { Suspense, useState } from 'react';
import { lazy } from 'react';
import { KPICard } from '@shared/components/organisms/Widget/KPICard';
import { WidgetContainer } from '@shared/components/organisms/Widget/WidgetContainer';
import { useDashboardKPIs } from '@services/analytics-service';
import type { TimeRange } from '@services/analytics-service';

// Lazy load heavy chart widgets to improve initial paint performance
const RevenueWidget = lazy(() => import('../widgets/RevenueWidget'));
const UserGrowthWidget = lazy(() => import('../widgets/UserGrowthWidget'));

export function AdminDashboard() {
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');
  
  // The global KPIs fetch. Sub-widgets fetch their own chart data.
  // We decouple them so the UI remains highly responsive.
  const { data: kpis, isLoading, isError } = useDashboardKPIs(timeRange);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* ── Header & Global Filters ────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Platform Overview</h1>
          <p className="text-sm text-gray-400 mt-1">
            Real-time insights and system metrics.
          </p>
        </div>
        
        {/* Time Range Selector */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400 font-medium hidden sm:block">Date Range:</span>
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value as TimeRange)}
            className="h-10 rounded-xl border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-shadow"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
            <option value="12m">Last 12 Months</option>
          </select>
        </div>
      </div>

      {/* ── Top Level KPIs (Grid) ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard 
          title="Total Revenue" 
          value={`$${(kpis?.totalRevenue || 0).toLocaleString()}`} 
          delta={kpis?.revenueDelta} 
          isLoading={isLoading} 
          isError={isError} 
        />
        <KPICard 
          title="Total Users" 
          value={(kpis?.totalUsers || 0).toLocaleString()} 
          delta={kpis?.usersDelta} 
          isLoading={isLoading} 
          isError={isError} 
        />
        <KPICard 
          title="Active Orders" 
          value={(kpis?.activeOrders || 0).toLocaleString()} 
          subtitle="Currently processing"
          isLoading={isLoading} 
          isError={isError} 
        />
        <KPICard 
          title="System Health" 
          value={`${kpis?.systemHealth || 0}%`} 
          subtitle="Uptime SLA"
          isLoading={isLoading} 
          isError={isError} 
          status={kpis?.systemHealth! >= 99.9 ? 'good' : 'warning'} 
        />
      </div>

      {/* ── Main Charts (Grid) ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Revenue Area Chart (Spans 2 columns) */}
        <div className="lg:col-span-2">
          <Suspense fallback={<WidgetContainer title="Revenue Growth" isLoading><></></WidgetContainer>}>
            <RevenueWidget timeRange={timeRange} />
          </Suspense>
        </div>
        
        {/* User Acquisition Bar Chart (Spans 1 column) */}
        <div className="lg:col-span-1">
          <Suspense fallback={<WidgetContainer title="User Acquisition" isLoading><></></WidgetContainer>}>
            <UserGrowthWidget timeRange={timeRange} />
          </Suspense>
        </div>
      </div>
      
      {/* ── Secondary Data ─────────────────────────────────────────────── */}
      {/* Additional rows for "Top Vendors", "Recent Activity", etc. could go here */}
    </div>
  );
}
