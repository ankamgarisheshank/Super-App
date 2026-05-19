import { useEffect } from 'react';
import { wsManager } from '../../integrations/websocket/socket.client';
import { useAuthStore } from '@store/index';

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const token = useAuthStore((s) => s.tokens?.accessToken);

  useEffect(() => {
    if (token) {
      wsManager.connect();
    } else {
      wsManager.disconnect();
    }

    return () => {
      // In a real app, you might not want to disconnect entirely on unmount if it's the root provider,
      // but cleaning up is good practice. In our case, this provider is mounted as long as the app is running.
    };
  }, [token]);

  return <>{children}</>;
}
