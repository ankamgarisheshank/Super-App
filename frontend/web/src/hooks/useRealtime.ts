import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { wsManager } from '../integrations/websocket/socket.client';
import type { ServerToClientEvents } from '../integrations/websocket/socket.types';

interface SyncConfig<T extends keyof ServerToClientEvents> {
  event: T;
  queryKeys?: readonly unknown[][];
  onReceive?: (payload: any) => void;
}

/**
 * Enterprise hook to synchronize WebSocket events with React Query cache.
 * When an event is received, it triggers `queryClient.invalidateQueries`,
 * updating the UI reactively.
 */
export function useRealtimeSync<T extends keyof ServerToClientEvents>({
  event,
  queryKeys,
  onReceive,
}: SyncConfig<T>) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const socket = wsManager.getSocket();
    if (!socket) return;

    // Use any typing here because TypeScript struggles with dynamic arguments across varied event payloads
    const handleEvent = (payload: any) => {
      // 1. Fire optional callback (e.g. show toast notification)
      onReceive?.(payload);
      
      // 2. Invalidate queries to trigger UI background refresh
      if (queryKeys && queryKeys.length > 0) {
        queryKeys.forEach((key) => {
          queryClient.invalidateQueries({ queryKey: key });
        });
      }
    };

    socket.on(event, handleEvent as any);

    return () => {
      socket.off(event, handleEvent as any);
    };
  }, [event, queryKeys, queryClient, onReceive]);
}
