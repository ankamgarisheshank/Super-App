import { useUserGrowthChart } from '@services/analytics-service';
import type { TimeRange } from '@services/analytics-service';
import { WidgetContainer } from '@shared/components/organisms/Widget/WidgetContainer';
import { BarChartBase } from '@shared/components/organisms/Charts/BarChartBase';

interface UserGrowthWidgetProps {
  timeRange: TimeRange;
}

export default function UserGrowthWidget({ timeRange }: UserGrowthWidgetProps) {
  const { data, isLoading, isError } = useUserGrowthChart(timeRange);

  return (
    <WidgetContainer
      title="User Acquisition"
      subtitle="New user signups per period"
      isLoading={isLoading}
      isError={isError}
      permission="analytics:view"
    >
      <div className="mt-4">
        <BarChartBase
          data={data || []}
          xKey="timestamp"
          yKeys={[
            { key: 'value', color: '#10b981', name: 'New Users' },
          ]}
          valueFormatter={(val) => val.toLocaleString()}
        />
      </div>
    </WidgetContainer>
  );
}
