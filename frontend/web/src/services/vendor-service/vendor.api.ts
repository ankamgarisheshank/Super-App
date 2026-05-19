import type { VendorOrder, VendorAnalytics, OrderStatus } from './vendor.types';

export const VendorAPI = {
  getActiveOrders: async (): Promise<VendorOrder[]> => {
    // Simulated network delay
    await new Promise(r => setTimeout(r, 600));
    
    return [
      {
        id: 'ord_101',
        customerName: 'Alice Johnson',
        status: 'pending',
        items: [
          { id: 'item_1', menuItemId: 'menu_1', name: 'Spicy Chicken Burger', quantity: 2, price: 12.50 },
          { id: 'item_2', menuItemId: 'menu_2', name: 'French Fries', quantity: 1, price: 4.50 },
        ],
        totalAmount: 29.50,
        createdAt: new Date(Date.now() - 2 * 60000).toISOString(), // 2 minutes ago
      },
      {
        id: 'ord_102',
        customerName: 'Bob Smith',
        status: 'preparing',
        items: [
          { id: 'item_3', menuItemId: 'menu_3', name: 'Margherita Pizza', quantity: 1, price: 18.00, specialInstructions: 'Extra cheese please' },
        ],
        totalAmount: 18.00,
        createdAt: new Date(Date.now() - 15 * 60000).toISOString(),
        estimatedPreparationTimeMinutes: 20,
      }
    ];
  },

  updateOrderStatus: async (orderId: string, status: OrderStatus): Promise<VendorOrder> => {
    await new Promise(r => setTimeout(r, 400));
    // In reality, this would hit `api.patch('/vendor/orders/${orderId}', { status })`
    return {
      id: orderId,
      customerName: 'Customer',
      status,
      items: [],
      totalAmount: 0,
      createdAt: new Date().toISOString(),
    };
  },

  getAnalytics: async (): Promise<VendorAnalytics> => {
    await new Promise(r => setTimeout(r, 500));
    return {
      dailyRevenue: 1245.50,
      totalOrders: 48,
      completionRate: 98.2,
      averagePreparationTime: 14.5,
    };
  }
};
