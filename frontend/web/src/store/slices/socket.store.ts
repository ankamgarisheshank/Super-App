import { create } from 'zustand';

export type SocketStatus = 'connected' | 'disconnected' | 'reconnecting' | 'error';

export interface SocketEventLog {
  id: string;
  event: string;
  payload: any;
  timestamp: number;
}

interface SocketState {
  status: SocketStatus;
  events: SocketEventLog[];
  setStatus: (status: SocketStatus) => void;
  addEvent: (event: string, payload: any) => void;
  clearEvents: () => void;
}

export const useSocketStore = create<SocketState>((set) => ({
  status: 'disconnected',
  events: [],
  setStatus: (status) => set({ status }),
  addEvent: (event, payload) =>
    set((state) => ({
      events: [
        { id: Math.random().toString(36).substr(2, 9), event, payload, timestamp: Date.now() },
        ...state.events,
      ].slice(0, 100), // Keep last 100 events
    })),
  clearEvents: () => set({ events: [] }),
}));
