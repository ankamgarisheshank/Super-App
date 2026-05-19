import { useEffect } from 'react';
import { wsManager } from '../integrations/websocket/socket.client';

export function useChannel(channelId: string) {
  useEffect(() => {
    const socket = wsManager.getSocket();
    if (!socket) return;

    // Subscribe to a specific channel (e.g., 'order_123', 'vendor_456')
    socket.emit('subscribe:channel', channelId);

    return () => {
      socket.emit('unsubscribe:channel', channelId);
    };
  }, [channelId]);
}
