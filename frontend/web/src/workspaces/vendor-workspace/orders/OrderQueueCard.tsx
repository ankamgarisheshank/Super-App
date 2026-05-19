import { Button } from '@shared/components/atoms/Button';
import { Badge } from '@shared/components/atoms/Badge';
import { Clock, CheckCircle, XCircle, ChefHat } from 'lucide-react';
import type { VendorOrder } from '@services/vendor-service';

interface OrderQueueCardProps {
  order: VendorOrder;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onReady: (id: string) => void;
  isLoading?: boolean;
}

export function OrderQueueCard({ order, onAccept, onReject, onReady, isLoading }: OrderQueueCardProps) {
  const isPending = order.status === 'pending';
  const isPreparing = order.status === 'preparing';

  const elapsedMinutes = Math.floor((Date.now() - new Date(order.createdAt).getTime()) / 60000);

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-5 flex flex-col hover:border-gray-700 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-mono text-gray-400">#{order.id.slice(-6)}</span>
            <Badge variant={isPending ? 'warning' : 'success'} className="capitalize">
              {order.status}
            </Badge>
          </div>
          <h4 className="text-lg font-bold text-white">{order.customerName}</h4>
        </div>
        <div className="flex items-center text-sm font-medium text-gray-400 bg-gray-950 px-2 py-1 rounded-lg border border-gray-800">
          <Clock className="w-4 h-4 mr-1.5" />
          {elapsedMinutes} min ago
        </div>
      </div>

      <div className="flex-1">
        <div className="space-y-2 mb-4">
          {order.items.map((item, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <div className="flex gap-2">
                <span className="font-semibold text-white">{item.quantity}x</span>
                <span className="text-gray-300">{item.name}</span>
              </div>
              <span className="text-gray-400">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-800 pt-4 mt-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-400">Total Amount</span>
          <span className="text-lg font-bold text-white">${order.totalAmount.toFixed(2)}</span>
        </div>
        
        <div className="flex gap-2">
          {isPending && (
            <>
              <Button 
                className="flex-1 bg-green-600 hover:bg-green-500 text-white" 
                onClick={() => onAccept(order.id)}
                isLoading={isLoading}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Accept
              </Button>
              <Button 
                variant="outline"
                className="flex-1 text-red-400 border-red-500/30 hover:bg-red-500/10 hover:border-red-500/50" 
                onClick={() => onReject(order.id)}
                disabled={isLoading}
              >
                <XCircle className="w-4 h-4 mr-2" />
                Reject
              </Button>
            </>
          )}

          {isPreparing && (
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-500 text-white" 
              onClick={() => onReady(order.id)}
              isLoading={isLoading}
            >
              <ChefHat className="w-4 h-4 mr-2" />
              Mark Ready for Pickup
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
