/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Guest Guard
 * ─────────────────────────────────────────────────────────────
 * Prevents authenticated users from accessing login/register.
 * Redirects them to their workspace dashboard.
 */

import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@store/index';
import { ROUTES } from '@shared/constants';
import type { UserRole } from '@shared/types';

const ROLE_HOME_MAP: Record<UserRole, string> = {
  super_admin: ROUTES.ADMIN.DASHBOARD,
  admin: ROUTES.ADMIN.DASHBOARD,
  manager: ROUTES.ADMIN.DASHBOARD,
  consumer: ROUTES.CONSUMER.DASHBOARD,
  vendor: ROUTES.VENDOR.DASHBOARD,
  partner: ROUTES.PARTNER.DASHBOARD,
  delivery_agent: ROUTES.DELIVERY.DASHBOARD,
  support_agent: ROUTES.ADMIN.DASHBOARD,
  analyst: ROUTES.ADMIN.ANALYTICS,
};

interface GuestGuardProps {
  children: React.ReactNode;
}

export function GuestGuard({ children }: GuestGuardProps) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const user = useAuthStore((s) => s.user);

  if (isAuthenticated && user) {
    const redirectTo = ROLE_HOME_MAP[user.role] || ROUTES.CONSUMER.DASHBOARD;
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}
