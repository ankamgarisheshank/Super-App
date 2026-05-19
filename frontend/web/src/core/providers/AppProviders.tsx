/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Global Providers
 * ─────────────────────────────────────────────────────────────
 * Wraps the app with all required providers in correct order.
 * This is the single composition root for global context.
 *
 * WHY a dedicated provider tree:
 * - Controls initialization order
 * - Prevents provider hell in main.tsx
 * - Easy to add/remove providers without touching main
 */

import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@core/error-boundaries';
import { ThemeProvider } from '@core/theme';
import { useAuthStore } from '@store/index';
import { ToastContainer } from '@shared/components/organisms/Toast';
import { GlobalModal } from '@shared/components/organisms/GlobalModal';
import { SocketProvider } from './SocketProvider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  const initialize = useAuthStore((s) => s.initialize);
  
  // Create a client centrally to avoid recreation on re-renders,
  // but keeping it inside the component prevents bleeding across tests if testing.
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute stale time default
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  }));

  // Initialize auth session on app boot
  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SocketProvider>
          <ThemeProvider>
            {children}
            <ToastContainer />
            <GlobalModal />
          </ThemeProvider>
        </SocketProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}


