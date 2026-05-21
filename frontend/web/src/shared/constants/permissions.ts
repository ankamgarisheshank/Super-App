/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ RBAC Permission Map
 * ─────────────────────────────────────────────────────────────
 * Maps each role to its allowed permissions. This drives the
 * entire authorization layer — guards, UI visibility, API calls.
 */

import type { UserRole, Permission } from '../types';

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  super_admin: [
    'dashboard:view', 'dashboard:manage',
    'users:view', 'users:create', 'users:edit', 'users:delete',
    'orders:view', 'orders:create', 'orders:edit', 'orders:cancel',
    'products:view', 'products:create', 'products:edit', 'products:delete',
    'payments:view', 'payments:process', 'payments:refund',
    'analytics:view', 'analytics:export',
    'settings:view', 'settings:manage',
    'reports:view', 'reports:generate',
    'delivery:view', 'delivery:assign', 'delivery:track',
    'support:view', 'support:respond', 'support:escalate',
  ],

  admin: [
    'dashboard:view', 'dashboard:manage',
    'users:view', 'users:create', 'users:edit',
    'orders:view', 'orders:create', 'orders:edit', 'orders:cancel',
    'products:view', 'products:create', 'products:edit', 'products:delete',
    'payments:view', 'payments:process', 'payments:refund',
    'analytics:view', 'analytics:export',
    'settings:view', 'settings:manage',
    'reports:view', 'reports:generate',
    'delivery:view', 'delivery:assign', 'delivery:track',
    'support:view', 'support:respond', 'support:escalate',
  ],

  manager: [
    'dashboard:view',
    'users:view',
    'orders:view', 'orders:edit',
    'products:view', 'products:create', 'products:edit',
    'payments:view',
    'analytics:view',
    'reports:view', 'reports:generate',
    'delivery:view', 'delivery:assign',
    'support:view', 'support:respond',
  ],

  consumer: [
    'dashboard:view',
    'orders:view', 'orders:create', 'orders:cancel',
    'products:view',
    'payments:view', 'payments:process',
    'support:view',
  ],

  vendor: [
    'dashboard:view',
    'orders:view', 'orders:edit',
    'products:view', 'products:create', 'products:edit', 'products:delete',
    'payments:view',
    'analytics:view',
    'reports:view',
  ],

  partner: [
    'dashboard:view',
    'orders:view',
    'products:view', 'products:create', 'products:edit',
    'payments:view',
    'analytics:view',
    'reports:view',
  ],

  delivery_agent: [
    'dashboard:view',
    'orders:view',
    'delivery:view', 'delivery:track',
  ],

  support_agent: [
    'dashboard:view',
    'users:view',
    'orders:view',
    'support:view', 'support:respond', 'support:escalate',
  ],

  analyst: [
    'dashboard:view',
    'analytics:view', 'analytics:export',
    'reports:view', 'reports:generate',
  ],
};

/**
 * Check if a role has a specific permission
 */
export function hasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

/**
 * Check if a role has ALL of the specified permissions
 */
export function hasAllPermissions(role: UserRole, permissions: Permission[]): boolean {
  return permissions.every((p) => hasPermission(role, p));
}

/**
 * Check if a role has ANY of the specified permissions
 */
export function hasAnyPermission(role: UserRole, permissions: Permission[]): boolean {
  return permissions.some((p) => hasPermission(role, p));
}
