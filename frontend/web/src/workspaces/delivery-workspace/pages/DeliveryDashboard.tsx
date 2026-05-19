import { useActiveDeliveries, useAvailableDrivers, deliveryKeys } from '@services/delivery-service';
import { LiveTrackingMap } from '../maps/LiveTrackingMap';
import { ActiveDeliveriesTable } from '../tables/ActiveDeliveriesTable';
import { useRealtimeSync } from '@hooks/useRealtime';
import { WidgetContainer } from '@shared/components/organisms/Widget/WidgetContainer';
import { Activity, Truck, AlertTriangle } from 'lucide-react';

export function DeliveryDashboard() {
  const { data: deliveries, isLoading: isLoadingDeliveries } = useActiveDeliveries();
  const { data: drivers, isLoading: isLoadingDrivers } = useAvailableDrivers();

  // React Query + Realtime Synchronization!
  // Whenever the socket receives these events, it will invalidate the queries and cause a seamless background refetch.
  useRealtimeSync({
    event: 'delivery:location',
    queryKeys: [deliveryKeys.activeQueue() as any, deliveryKeys.drivers() as any],
  });

  useRealtimeSync({
    event: 'order:updated',
    queryKeys: [deliveryKeys.activeQueue() as any],
  });

  const pendingCount = deliveries?.filter(d => d.status === 'pending').length || 0;
  const transitCount = deliveries?.filter(d => d.status === 'in_transit').length || 0;
  const activeDriversCount = drivers?.filter(d => d.status === 'online' || d.status === 'on_delivery').length || 0;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Delivery Operations</h1>
          <p className="text-sm text-gray-400 mt-1">Live dispatch queue and fleet tracking.</p>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <WidgetContainer title="Pending Dispatch" className="min-h-[100px]" action={<AlertTriangle className="text-amber-500 h-5 w-5" />}>
          <div className="flex items-end text-3xl font-bold text-white mt-auto">{pendingCount}</div>
        </WidgetContainer>
        <WidgetContainer title="In Transit" className="min-h-[100px]" action={<Activity className="text-blue-500 h-5 w-5" />}>
          <div className="flex items-end text-3xl font-bold text-white mt-auto">{transitCount}</div>
        </WidgetContainer>
        <WidgetContainer title="Active Drivers" className="min-h-[100px]" action={<Truck className="text-green-500 h-5 w-5" />}>
          <div className="flex items-end text-3xl font-bold text-white mt-auto">{activeDriversCount}</div>
        </WidgetContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-[500px]">
        {/* Live Map */}
        <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-800 flex flex-col bg-gray-900/50">
          <div className="p-4 border-b border-gray-800">
            <h3 className="text-base font-semibold text-white tracking-tight">Live Fleet Map</h3>
          </div>
          <div className="flex-1 relative">
            {(isLoadingDeliveries || isLoadingDrivers) ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-950/50 backdrop-blur-sm z-10">
                <span className="text-gray-400 text-sm font-medium">Initializing map...</span>
              </div>
            ) : (
              <LiveTrackingMap deliveries={deliveries || []} drivers={drivers || []} />
            )}
          </div>
        </div>

        {/* Active Queue */}
        <div className="lg:col-span-1 rounded-2xl border border-gray-800 bg-gray-900/50 flex flex-col">
          <div className="p-4 border-b border-gray-800">
            <h3 className="text-base font-semibold text-white tracking-tight">Active Queue</h3>
          </div>
          <div className="p-4 overflow-y-auto">
            <ActiveDeliveriesTable data={deliveries || []} isLoading={isLoadingDeliveries} />
          </div>
        </div>
      </div>
    </div>
  );
}
