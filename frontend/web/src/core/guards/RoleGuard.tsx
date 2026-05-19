/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Role Guard (RBAC)
 * ─────────────────────────────────────────────────────────────
 * Restricts route access based on user roles.
 * Shows 403 Forbidden for unauthorized roles.
 */

import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@store/index';
import type { UserRole } from '@shared/types';

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
  fallbackPath?: string;
}

export function RoleGuard({
  children,
  allowedRoles,
  fallbackPath = '/unauthorized',
}: RoleGuardProps) {
  const user = useAuthStore((s) => s.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={fallbackPath} replace />;
  }

  return <>{children}</>;
}
