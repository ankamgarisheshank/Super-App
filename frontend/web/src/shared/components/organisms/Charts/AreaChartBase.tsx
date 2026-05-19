import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { format } from 'date-fns';

interface AreaChartBaseProps {
  data: any[];
  xKey: string;
  yKeys: {
    key: string;
    color: string;
    name?: string;
  }[];
  height?: number | string;
  valueFormatter?: (val: number) => string;
}

export function AreaChartBase({
  data,
  xKey,
  yKeys,
  height = 300,
  valueFormatter = (val) => val.toString(),
}: AreaChartBaseProps) {
  if (!data || data.length === 0) {
    return (
      <div
        style={{ height }}
        className="flex w-full items-center justify-center rounded-xl bg-gray-900/30 border border-dashed border-gray-800"
      >
        <span className="text-sm text-gray-500">No data available</span>
      </div>
    );
  }

  return (
    <div style={{ height, width: '100%' }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            {yKeys.map((item) => (
              <linearGradient
                key={item.key}
                id={`gradient-${item.key}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor={item.color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={item.color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
          <XAxis
            dataKey={xKey}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            tickFormatter={(val) => {
              try {
                return format(new Date(val), 'MMM d');
              } catch {
                return val;
              }
            }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            tickFormatter={valueFormatter}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border border-gray-700 bg-gray-900/95 p-3 shadow-xl backdrop-blur-md">
                    <p className="mb-2 text-xs font-medium text-gray-400">
                      {(() => {
                        try {
                          return format(new Date(label as string), 'MMM d, yyyy');
                        } catch {
                          return label;
                        }
                      })()}
                    </p>
                    {payload.map((entry: any) => (
                      <div key={entry.name} className="flex items-center gap-2">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-sm font-medium text-white">
                          {entry.name}: {valueFormatter(entry.value)}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
          {yKeys.map((item) => (
            <Area
              key={item.key}
              type="monotone"
              dataKey={item.key}
              name={item.name || item.key}
              stroke={item.color}
              fillOpacity={1}
              fill={`url(#gradient-${item.key})`}
              strokeWidth={2}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
