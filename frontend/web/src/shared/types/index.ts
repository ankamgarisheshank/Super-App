/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Global Type Definitions
 * ─────────────────────────────────────────────────────────────
 * Shared types used across all workspaces and features.
 */

// ── Auth & User Types ──────────────────────────────────────

export type UserRole =
  | 'super_admin'
  | 'admin'
  | 'manager'
  | 'consumer'
  | 'vendor'
  | 'partner'
  | 'delivery_agent'
  | 'support_agent'
  | 'analyst';

export type Permission =
  | 'dashboard:view'
  | 'dashboard:manage'
  | 'users:view'
  | 'users:create'
  | 'users:edit'
  | 'users:delete'
  | 'orders:view'
  | 'orders:create'
  | 'orders:edit'
  | 'orders:cancel'
  | 'products:view'
  | 'products:create'
  | 'products:edit'
  | 'products:delete'
  | 'payments:view'
  | 'payments:process'
  | 'payments:refund'
  | 'analytics:view'
  | 'analytics:export'
  | 'settings:view'
  | 'settings:manage'
  | 'reports:view'
  | 'reports:generate'
  | 'delivery:view'
  | 'delivery:assign'
  | 'delivery:track'
  | 'support:view'
  | 'support:respond'
  | 'support:escalate';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phone?: string;
  role: UserRole;
  permissions: Permission[];
  isActive: boolean;
  isVerified: boolean;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role?: UserRole;
}

// ── API Types ──────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
}

export interface ApiError {
  success: false;
  message: string;
  code: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  search?: string;
}

// ── Common Entity Types ────────────────────────────────────

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  lat?: number;
  lng?: number;
}

export interface GeoLocation {
  lat: number;
  lng: number;
  accuracy?: number;
  timestamp?: number;
}

// ── UI Types ───────────────────────────────────────────────

export type ThemeMode = 'light' | 'dark' | 'system';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
  icon?: string;
}

export interface SidebarItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  badge?: number;
  children?: SidebarItem[];
  permissions?: Permission[];
}

// ── Notification Types ─────────────────────────────────────

export interface Notification {
  id: string;
  type: 'order' | 'payment' | 'delivery' | 'system' | 'promotion';
  title: string;
  body: string;
  isRead: boolean;
  actionUrl?: string;
  createdAt: string;
}
