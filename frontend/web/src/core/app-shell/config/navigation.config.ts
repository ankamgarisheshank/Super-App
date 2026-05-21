import { ROUTES } from '@shared/constants';
import type { Permission } from '@shared/types';
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Settings,
  PieChart,
  Box,
  Truck,
  Building,
  Activity,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  id: string;
  label: string;
  path?: string;
  icon?: LucideIcon;
  permissions?: Permission[];
  children?: NavItem[];
};

export type WorkspaceConfig = {
  id: string;
  name: string;
  icon: LucideIcon;
  path: string;
  nav: NavItem[];
};

/**
 * Enterprise scalable navigation configuration.
 * Groups navigation by workspace. Each item is strictly permission-checked.
 */
export const WORKSPACE_CONFIGS: Record<string, WorkspaceConfig> = {
  admin: {
    id: 'admin',
    name: 'Admin Console',
    icon: Building,
    path: ROUTES.ADMIN.ROOT,
    nav: [
      {
        id: 'admin-dashboard',
        label: 'Overview',
        path: ROUTES.ADMIN.DASHBOARD,
        icon: LayoutDashboard,
        permissions: ['dashboard:view'],
      },
      {
        id: 'admin-users',
        label: 'Users',
        path: ROUTES.ADMIN.USERS,
        icon: Users,
        permissions: ['users:view'],
      },
      {
        id: 'admin-orders',
        label: 'Orders',
        path: ROUTES.ADMIN.ORDERS,
        icon: ShoppingCart,
        permissions: ['orders:view'],
      },
      {
        id: 'admin-products',
        label: 'Products',
        path: ROUTES.ADMIN.PRODUCTS,
        icon: Box,
        permissions: ['products:view'],
      },
      {
        id: 'admin-analytics',
        label: 'Analytics',
        path: ROUTES.ADMIN.ANALYTICS,
        icon: PieChart,
        permissions: ['analytics:view'],
      },
      {
        id: 'admin-settings',
        label: 'Settings',
        path: ROUTES.ADMIN.SETTINGS,
        icon: Settings,
        permissions: ['settings:view'],
      },
    ],
  },
  vendor: {
    id: 'vendor',
    name: 'Vendor Portal',
    icon: Box,
    path: ROUTES.VENDOR.ROOT,
    nav: [
      {
        id: 'vendor-dashboard',
        label: 'Dashboard',
        path: ROUTES.VENDOR.DASHBOARD,
        icon: LayoutDashboard,
        permissions: ['dashboard:view'],
      },
      {
        id: 'vendor-products',
        label: 'Products',
        path: ROUTES.VENDOR.PRODUCTS,
        icon: Box,
        permissions: ['products:view'],
      },
      {
        id: 'vendor-orders',
        label: 'Orders',
        path: ROUTES.VENDOR.ORDERS,
        icon: ShoppingCart,
        permissions: ['orders:view'],
      },
    ],
  },
  delivery: {
    id: 'delivery',
    name: 'Delivery Hub',
    icon: Truck,
    path: ROUTES.DELIVERY.ROOT,
    nav: [
      {
        id: 'delivery-dashboard',
        label: 'Dashboard',
        path: ROUTES.DELIVERY.DASHBOARD,
        icon: LayoutDashboard,
        permissions: ['dashboard:view'],
      },
      {
        id: 'delivery-active',
        label: 'Active Runs',
        path: ROUTES.DELIVERY.ACTIVE_ORDERS,
        icon: Activity,
        permissions: ['delivery:view'],
      },
    ],
  },
};
