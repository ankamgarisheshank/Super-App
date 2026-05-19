import { io, Socket } from 'socket.io-client';
import { useAuthStore, useSocketStore } from '@store/index';
import type { ServerToClientEvents, ClientToServerEvents } from './socket.types';

type TypedSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

class WebSocketManager {
  private socket: TypedSocket | null = null;
  // Use VITE_WS_URL from env if available, otherwise default fallback
  private url = import.meta.env.VITE_WS_URL || 'ws://localhost:4000';

  connect() {
    if (this.socket?.connected) return;

    const token = useAuthStore.getState().tokens?.accessToken;
    if (!token) return;

    this.socket = io(this.url, {
      auth: { token },
      transports: ['websocket', 'polling'], // Fallback to polling if websocket fails
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: Infinity,
    });

    this.setupListeners();
  }

  private setupListeners() {
    if (!this.socket) return;
    const { setStatus, addEvent } = useSocketStore.getState();

    this.socket.on('connect', () => {
      setStatus('connected');
    });

    this.socket.on('disconnect', (reason) => {
      if (reason === 'io server disconnect') {
        // the disconnection was initiated by the server, you need to reconnect manually
        setStatus('disconnected');
      } else {
        // else the socket will automatically try to reconnect
        setStatus('reconnecting');
      }
    });

    this.socket.on('connect_error', (error) => {
      setStatus('error');
      console.error('Socket connection error:', error.message);
    });

    // Global event sink for debugging/history
    this.socket.onAny((event, ...args) => {
      addEvent(event, args);
    });
  }

  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
    useSocketStore.getState().setStatus('disconnected');
  }

  getSocket(): TypedSocket | null {
    return this.socket;
  }
}

export const wsManager = new WebSocketManager();
