import { useActiveOrders, useVendorAnalytics, useUpdateOrderStatus, vendorKeys } from '@services/vendor-service';
import { useRealtimeSync } from '@hooks/useRealtime';
import { WidgetContainer } from '@shared/components/organisms/Widget/WidgetContainer';
import { KPICard } from '@shared/components/organisms/Widget/KPICard';
import { OrderQueueCard } from '../orders/OrderQueueCard';
import { Store, CheckCircle, Clock } from 'lucide-react';
import { useUIStore } from '@store/index';

export function VendorDashboard() {
  const { data: orders, isLoading: isLoadingOrders } = useActiveOrders();
  const { data: analytics, isLoading: isLoadingAnalytics } = useVendorAnalytics();
  const updateOrder = useUpdateOrderStatus();
  const addToast = useUIStore((s) => s.addToast);

  // Sync new incoming orders
  useRealtimeSync({
    event: 'vendor:new_order',
    queryKeys: [vendorKeys.orderQueue() as any],
    onReceive: (payload) => {
      addToast({
        type: 'info',
        title: 'New Order Received!',
        message: `Order #${payload?.orderId?.slice(-6) || 'New'} is waiting for acceptance.`,
      });
      // Play a sound if we had audio context initialized
    }
  });

  const pendingOrders = orders?.filter(o => o.status === 'pending') || [];
  const preparingOrders = orders?.filter(o => o.status === 'preparing') || [];

  return (
    <div className="space-y-6 animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Store className="h-6 w-6 text-blue-500" />
            Kitchen Dashboard
          </h1>
          <p className="text-sm text-gray-400 mt-1">Manage live incoming orders and kitchen workflows.</p>
        </div>
      </div>

      {/* Analytics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard 
          title="Daily Revenue" 
          value={`$${(analytics?.dailyRevenue || 0).toLocaleString()}`} 
          isLoading={isLoadingAnalytics} 
        />
        <KPICard 
          title="Total Orders" 
          value={analytics?.totalOrders || 0} 
          isLoading={isLoadingAnalytics} 
        />
        <KPICard 
          title="Completion Rate" 
          value={`${analytics?.completionRate || 0}%`} 
          isLoading={isLoadingAnalytics} 
        />
        <KPICard 
          title="Avg Prep Time" 
          value={`${analytics?.averagePreparationTime || 0}m`} 
          isLoading={isLoadingAnalytics} 
        />
      </div>

      {/* Live Order Queues */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        
        {/* Pending Queue */}
        <WidgetContainer 
          title="Incoming Orders" 
          subtitle={`${pendingOrders.length} waiting to be accepted`}
          className="bg-gray-900/50"
          action={
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 font-bold">
              {pendingOrders.length}
            </div>
          }
        >
          <div className="mt-4 flex-1 overflow-y-auto pr-2 space-y-4">
            {pendingOrders.length === 0 && !isLoadingOrders && (
              <div className="h-40 flex flex-col items-center justify-center text-gray-500">
                <CheckCircle className="h-8 w-8 mb-2 opacity-50" />
                <p>No pending orders</p>
              </div>
            )}
            {pendingOrders.map(order => (
              <OrderQueueCard 
                key={order.id} 
                order={order}
                onAccept={(id) => updateOrder.mutate({ orderId: id, status: 'preparing' })}
                onReject={(id) => updateOrder.mutate({ orderId: id, status: 'rejected' })}
                onReady={() => {}}
                isLoading={updateOrder.isPending}
              />
            ))}
          </div>
        </WidgetContainer>

        {/* Preparing Queue */}
        <WidgetContainer 
          title="Kitchen Workflow (Preparing)" 
          subtitle={`${preparingOrders.length} orders currently cooking`}
          className="bg-gray-900/50"
          action={
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 font-bold">
              {preparingOrders.length}
            </div>
          }
        >
          <div className="mt-4 flex-1 overflow-y-auto pr-2 space-y-4">
            {preparingOrders.length === 0 && !isLoadingOrders && (
              <div className="h-40 flex flex-col items-center justify-center text-gray-500">
                <Clock className="h-8 w-8 mb-2 opacity-50" />
                <p>Kitchen is clear</p>
              </div>
            )}
            {preparingOrders.map(order => (
              <OrderQueueCard 
                key={order.id} 
                order={order}
                onAccept={() => {}}
                onReject={() => {}}
                onReady={(id) => updateOrder.mutate({ orderId: id, status: 'ready_for_pickup' })}
                isLoading={updateOrder.isPending}
              />
            ))}
          </div>
        </WidgetContainer>

      </div>
    </div>
  );
}
