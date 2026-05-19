export interface SocketAuthPayload {
  token: string;
}

// Define the shape of our events to get typed intellisense when binding listeners
export interface ServerToClientEvents {
  'notification:new': (data: any) => void;
  'order:updated': (data: any) => void;
  'order:completed': (data: any) => void;
  'delivery:location': (data: { lat: number; lng: number; driverId: string }) => void;
  'vendor:new_order': (data: { orderId: string; vendorId: string }) => void;
}

export interface ClientToServerEvents {
  'subscribe:channel': (channelId: string) => void;
  'unsubscribe:channel': (channelId: string) => void;
  'ping': () => void;
}
