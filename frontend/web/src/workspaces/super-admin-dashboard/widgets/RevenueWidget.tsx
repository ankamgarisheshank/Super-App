import { useRevenueChart } from '@services/analytics-service';
import type { TimeRange } from '@services/analytics-service';
import { WidgetContainer } from '@shared/components/organisms/Widget/WidgetContainer';
import { AreaChartBase } from '@shared/components/organisms/Charts/AreaChartBase';

interface RevenueWidgetProps {
  timeRange: TimeRange;
}

export default function RevenueWidget({ timeRange }: RevenueWidgetProps) {
  const { data, isLoading, isError } = useRevenueChart(timeRange);

  return (
    <WidgetContainer
      title="Revenue Growth"
      subtitle="Total platform revenue over time"
      isLoading={isLoading}
      isError={isError}
      permission="analytics:view"
    >
      <div className="mt-4">
        <AreaChartBase
          data={data || []}
          xKey="timestamp"
          yKeys={[
            { key: 'value', color: '#3b82f6', name: 'Current Period' },
            { key: 'compareValue', color: '#6366f1', name: 'Previous Period' },
          ]}
          valueFormatter={(val) => `$${val.toLocaleString()}`}
        />
      </div>
    </WidgetContainer>
  );
}
