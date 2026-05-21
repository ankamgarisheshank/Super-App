import { useAuthStore } from '@store/index';
import type { Permission, UserRole } from '@shared/types';
import { ReactNode } from 'react';

interface CanProps {
  /** The specific permission required (e.g., 'users:create') */
  permission?: Permission;
  /** Require ALL of these permissions */
  permissions?: Permission[];
  /** Require ANY of these permissions */
  anyPermissions?: Permission[];
  /** Require specific roles */
  roles?: UserRole[];
  /** Fallback UI if permission is denied */
  fallback?: ReactNode;
  children: ReactNode;
}

export function Can({
  permission,
  permissions,
  anyPermissions,
  roles,
  fallback = null,
  children,
}: CanProps) {
  const { can, canAll, canAny, user } = useAuthStore((s) => ({
    can: s.can,
    canAll: s.canAll,
    canAny: s.canAny,
    user: s.user,
  }));

  if (!user) return <>{fallback}</>;

  // Role check
  if (roles && roles.length > 0) {
    if (!roles.includes(user.role)) return <>{fallback}</>;
  }

  // Single permission check
  if (permission && !can(permission)) return <>{fallback}</>;

  // All permissions check
  if (permissions && permissions.length > 0 && !canAll(permissions)) {
    return <>{fallback}</>;
  }

  // Any permission check
  if (anyPermissions && anyPermissions.length > 0 && !canAny(anyPermissions)) {
    return <>{fallback}</>;
  }

  // If we get here, all provided checks passed
  return <>{children}</>;
}
