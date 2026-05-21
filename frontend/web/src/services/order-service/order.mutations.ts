import { useMutation, useQueryClient } from '@tanstack/react-query';
import { OrderAPI } from './order.api';
import { orderKeys } from './order.keys';
import { useUIStore, useCartStore } from '@store/index';
import { useNavigate } from 'react-router-dom';
import type { PlaceOrderDTO } from './order.types';

export function usePlaceOrder() {
  const queryClient = useQueryClient();
  const addToast = useUIStore((s) => s.addToast);
  const clearCart = useCartStore((s) => s.clearCart);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload: PlaceOrderDTO) => OrderAPI.placeOrder(payload),
    onSuccess: (data) => {
      // Clear the user's cart after successful placement
      clearCart();
      
      // Invalidate active order queries so tracking pages update
      queryClient.invalidateQueries({ queryKey: orderKeys.active() });
      
      addToast({ type: 'success', title: 'Order Placed!', message: `Your order #${data.orderId} is being prepared.` });
      
      // If payment required external session, we'd handle it here, otherwise navigate to tracking
      navigate(`/app/tracking/${data.orderId}`);
    },
    onError: (error: any) => {
      addToast({ type: 'error', title: 'Checkout Failed', message: error.message || 'Please try again.' });
    },
  });
}
