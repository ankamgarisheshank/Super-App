/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ usePermissions Hook
 * ─────────────────────────────────────────────────────────────
 * Provides RBAC permission checking at the component level.
 */

import { useAuthStore } from '@store/index';
import type { Permission } from '@shared/types';

export function usePermissions() {
  const can = useAuthStore((s) => s.can);
  const canAll = useAuthStore((s) => s.canAll);
  const canAny = useAuthStore((s) => s.canAny);
  const user = useAuthStore((s) => s.user);

  return {
    can,
    canAll,
    canAny,
    role: user?.role ?? null,
    permissions: user?.permissions ?? [],
    hasPermission: (permission: Permission) => can(permission),
  };
}
