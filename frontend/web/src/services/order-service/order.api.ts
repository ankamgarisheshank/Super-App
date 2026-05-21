import type { PlaceOrderDTO, OrderResponse } from './order.types';

export const OrderAPI = {
  placeOrder: async (payload: PlaceOrderDTO): Promise<OrderResponse> => {
    // Simulated network delay for transaction processing
    await new Promise(r => setTimeout(r, 1200));
    
    // Fake success response
    return {
      orderId: 'ord_' + Math.floor(Math.random() * 100000),
      status: 'pending',
      totalAmount: payload.items.reduce((acc, curr) => acc + (curr.quantity * 15), 0), // Mock calculation
      estimatedDeliveryTime: new Date(Date.now() + 45 * 60000).toISOString(),
      paymentSessionId: payload.paymentMethod !== 'cash' ? 'sess_' + Date.now() : undefined,
    };
  },

  getOrderHistory: async () => {
    await new Promise(r => setTimeout(r, 500));
    return [];
  }
};
