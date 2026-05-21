export type PaymentMethod = 'razorpay' | 'stripe' | 'wallet' | 'cash';

export interface PlaceOrderDTO {
  restaurantId: string;
  items: Array<{
    menuItemId: string;
    quantity: number;
    specialInstructions?: string;
  }>;
  deliveryAddress: {
    lat: number;
    lng: number;
    address: string;
  };
  paymentMethod: PaymentMethod;
  couponCode?: string;
}

export interface OrderResponse {
  orderId: string;
  status: string;
  totalAmount: number;
  estimatedDeliveryTime: string;
  paymentSessionId?: string; // For Stripe/Razorpay client-side initialization
}
