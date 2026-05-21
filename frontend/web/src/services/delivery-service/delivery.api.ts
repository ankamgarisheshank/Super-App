import type { Delivery, Driver } from './delivery.types';

// Mocking the API responses for the Delivery Workspace
export const DeliveryAPI = {
  getActiveDeliveries: async (): Promise<Delivery[]> => {
    // Simulated network delay
    await new Promise(r => setTimeout(r, 600));
    
    return [
      {
        id: 'del_101',
        orderId: 'ord_7721',
        status: 'in_transit',
        driverId: 'drv_001',
        pickupLocation: { lat: 40.7128, lng: -74.0060, address: '123 Main St, NY' },
        dropoffLocation: { lat: 40.7580, lng: -73.9855, address: 'Times Square, NY' },
        currentLocation: { lat: 40.7300, lng: -73.9950 },
        estimatedTimeOfArrival: new Date(Date.now() + 15 * 60000).toISOString(),
        createdAt: new Date(Date.now() - 30 * 60000).toISOString(),
      },
      {
        id: 'del_102',
        orderId: 'ord_7722',
        status: 'pending',
        pickupLocation: { lat: 40.7028, lng: -74.0160, address: 'Wall St, NY' },
        dropoffLocation: { lat: 40.7480, lng: -73.9955, address: 'Empire State, NY' },
        createdAt: new Date().toISOString(),
      }
    ];
  },

  getAvailableDrivers: async (): Promise<Driver[]> => {
    await new Promise(r => setTimeout(r, 400));
    return [
      { id: 'drv_001', name: 'Michael C.', status: 'on_delivery', currentLocation: { lat: 40.7300, lng: -73.9950 } },
      { id: 'drv_002', name: 'Sarah J.', status: 'online', currentLocation: { lat: 40.7400, lng: -74.0000 } },
    ];
  }
};
