/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Auth Guard (Protected Route)
 * ─────────────────────────────────────────────────────────────
 * Wraps routes that require authentication.
 * Redirects unauthenticated users to login with return-to URL.
 */

import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@store/index';
import { ROUTES } from '@shared/constants';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const isInitialized = useAuthStore((s) => s.isInitialized);
  const location = useLocation();

  // Still initializing — show nothing (or a spinner)
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Preserve the attempted URL so we can redirect back after login
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
