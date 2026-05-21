import { useMutation, useQueryClient } from '@tanstack/react-query';
import { VendorAPI } from './vendor.api';
import { vendorKeys } from './vendor.keys';
import { useUIStore } from '@store/index';
import type { OrderStatus } from './vendor.types';

export function useUpdateOrderStatus() {
  const queryClient = useQueryClient();
  const addToast = useUIStore((s) => s.addToast);

  return useMutation({
    mutationFn: ({ orderId, status }: { orderId: string; status: OrderStatus }) => 
      VendorAPI.updateOrderStatus(orderId, status),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: vendorKeys.orderQueue() });
      addToast({ type: 'success', title: `Order marked as ${data.status.replace('_', ' ')}` });
    },
    onError: () => {
      addToast({ type: 'error', title: 'Error', message: 'Failed to update order status' });
    },
  });
}
