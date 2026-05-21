/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Permission Guard
 * ─────────────────────────────────────────────────────────────
 * Fine-grained access control at the component/route level.
 * Hides or blocks UI based on specific permissions.
 */

import { useAuthStore } from '@store/index';
import type { Permission } from '@shared/types';

interface PermissionGuardProps {
  children: React.ReactNode;
  permission?: Permission;
  permissions?: Permission[];
  requireAll?: boolean;
  fallback?: React.ReactNode;
}

/**
 * Usage:
 * <PermissionGuard permission="users:delete">
 *   <DeleteUserButton />
 * </PermissionGuard>
 *
 * <PermissionGuard permissions={['analytics:view', 'analytics:export']} requireAll>
 *   <ExportReportButton />
 * </PermissionGuard>
 */
export function PermissionGuard({
  children,
  permission,
  permissions,
  requireAll = false,
  fallback = null,
}: PermissionGuardProps) {
  const can = useAuthStore((s) => s.can);
  const canAll = useAuthStore((s) => s.canAll);
  const canAny = useAuthStore((s) => s.canAny);

  let hasAccess = false;

  if (permission) {
    hasAccess = can(permission);
  } else if (permissions) {
    hasAccess = requireAll ? canAll(permissions) : canAny(permissions);
  }

  if (!hasAccess) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
