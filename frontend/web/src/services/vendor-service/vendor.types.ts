export type OrderStatus = 'pending' | 'accepted' | 'preparing' | 'ready_for_pickup' | 'picked_up' | 'delivered' | 'rejected';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: string;
}

export interface OrderItem {
  id: string;
  menuItemId: string;
  name: string;
  quantity: number;
  price: number;
  specialInstructions?: string;
}

export interface VendorOrder {
  id: string;
  customerName: string;
  status: OrderStatus;
  items: OrderItem[];
  totalAmount: number;
  createdAt: string;
  estimatedPreparationTimeMinutes?: number;
}

export interface VendorAnalytics {
  dailyRevenue: number;
  totalOrders: number;
  completionRate: number; // percentage
  averagePreparationTime: number; // minutes
}
