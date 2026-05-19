/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ useAuth Hook
 * ─────────────────────────────────────────────────────────────
 * Convenience hook that exposes auth store with selector pattern.
 */

import { useAuthStore } from '@store/index';

export function useAuth() {
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const isLoading = useAuthStore((s) => s.isLoading);
  const isInitialized = useAuthStore((s) => s.isInitialized);
  const error = useAuthStore((s) => s.error);
  const login = useAuthStore((s) => s.login);
  const register = useAuthStore((s) => s.register);
  const logout = useAuthStore((s) => s.logout);
  const can = useAuthStore((s) => s.can);
  const canAll = useAuthStore((s) => s.canAll);
  const canAny = useAuthStore((s) => s.canAny);

  return {
    user,
    isAuthenticated,
    isLoading,
    isInitialized,
    error,
    login,
    register,
    logout,
    can,
    canAll,
    canAny,
  };
}
