export type DeliveryStatus = 'pending' | 'assigned' | 'picked_up' | 'in_transit' | 'delivered' | 'cancelled';

export interface Location {
  lat: number;
  lng: number;
  address?: string;
}

export interface Delivery {
  id: string;
  orderId: string;
  status: DeliveryStatus;
  driverId?: string;
  pickupLocation: Location;
  dropoffLocation: Location;
  currentLocation?: Location; // Live updated via websocket
  estimatedTimeOfArrival?: string;
  createdAt: string;
}

export interface Driver {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'on_delivery';
  currentLocation?: Location;
}
