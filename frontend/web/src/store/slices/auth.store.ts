/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Auth Store (Zustand)
 * ─────────────────────────────────────────────────────────────
 * Manages authentication state with JWT tokens, user profile,
 * RBAC permissions, and session lifecycle.
 *
 * WHY Zustand over Context:
 * - No unnecessary re-renders (selector-based subscriptions)
 * - Works outside React tree (in interceptors, guards)
 * - Simple API, zero boilerplate
 * - Built-in devtools support
 */

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { User, AuthTokens, LoginCredentials, RegisterPayload, Permission } from '@shared/types';
import { api } from '@/integrations/api';
import { appConfig } from '@core/config';
import { storage } from '@shared/utils';
import { hasPermission, hasAnyPermission, hasAllPermissions } from '@shared/constants';

// ── State Shape ────────────────────────────────────────────

interface AuthState {
  // State
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;

  // Actions
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => void;
  refreshSession: () => Promise<void>;
  initialize: () => Promise<void>;
  clearError: () => void;

  // RBAC Helpers
  can: (permission: Permission) => boolean;
  canAll: (permissions: Permission[]) => boolean;
  canAny: (permissions: Permission[]) => boolean;
}

// ── Store Implementation ───────────────────────────────────

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set, get) => ({
        // ── Initial State ──────────────────────────────────
        user: null,
        tokens: null,
        isAuthenticated: false,
        isLoading: false,
        isInitialized: false,
        error: null,

        // ── Initialize (check existing session) ────────────
        initialize: async () => {
          try {
            const token = storage.get<string>(appConfig.auth.tokenKey);
            if (!token) {
              set({ isInitialized: true });
              return;
            }

            const { data } = await api.get<{ data: User }>('/auth/me');
            set({
              user: data.data,
              isAuthenticated: true,
              isInitialized: true,
            });
          } catch {
            // Token expired or invalid — clean up
            storage.remove(appConfig.auth.tokenKey);
            storage.remove(appConfig.auth.refreshTokenKey);
            storage.remove(appConfig.auth.userKey);
            set({
              user: null,
              tokens: null,
              isAuthenticated: false,
              isInitialized: true,
            });
          }
        },

        // ── Login ──────────────────────────────────────────
        login: async (credentials: LoginCredentials) => {
          set({ isLoading: true, error: null });
          try {
            const { data } = await api.post<{
              data: { user: User; tokens: AuthTokens };
            }>('/auth/login', credentials);

            const { user, tokens } = data.data;

            storage.set(appConfig.auth.tokenKey, tokens.accessToken);
            storage.set(appConfig.auth.refreshTokenKey, tokens.refreshToken);
            storage.set(appConfig.auth.userKey, user);

            set({
              user,
              tokens,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
          } catch (error: unknown) {
            const message =
              (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
              'Login failed. Please check your credentials.';
            set({ isLoading: false, error: message });
            throw error;
          }
        },

        // ── Register ───────────────────────────────────────
        register: async (payload: RegisterPayload) => {
          set({ isLoading: true, error: null });
          try {
            const { data } = await api.post<{
              data: { user: User; tokens: AuthTokens };
            }>('/auth/register', payload);

            const { user, tokens } = data.data;

            storage.set(appConfig.auth.tokenKey, tokens.accessToken);
            storage.set(appConfig.auth.refreshTokenKey, tokens.refreshToken);
            storage.set(appConfig.auth.userKey, user);

            set({
              user,
              tokens,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
          } catch (error: unknown) {
            const message =
              (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
              'Registration failed. Please try again.';
            set({ isLoading: false, error: message });
            throw error;
          }
        },

        // ── Logout ─────────────────────────────────────────
        logout: () => {
          storage.remove(appConfig.auth.tokenKey);
          storage.remove(appConfig.auth.refreshTokenKey);
          storage.remove(appConfig.auth.userKey);

          set({
            user: null,
            tokens: null,
            isAuthenticated: false,
            error: null,
          });
        },

        // ── Refresh Session ────────────────────────────────
        refreshSession: async () => {
          try {
            const refreshToken = storage.get<string>(appConfig.auth.refreshTokenKey);
            if (!refreshToken) throw new Error('No refresh token');

            const { data } = await api.post<{
              data: AuthTokens;
            }>('/auth/refresh', { refreshToken });

            storage.set(appConfig.auth.tokenKey, data.data.accessToken);
            storage.set(appConfig.auth.refreshTokenKey, data.data.refreshToken);

            set({ tokens: data.data });
          } catch {
            get().logout();
          }
        },

        // ── Clear Error ────────────────────────────────────
        clearError: () => set({ error: null }),

        // ── RBAC Permission Checkers ───────────────────────
        can: (permission: Permission) => {
          const user = get().user;
          if (!user) return false;
          return hasPermission(user.role, permission);
        },

        canAll: (permissions: Permission[]) => {
          const user = get().user;
          if (!user) return false;
          return hasAllPermissions(user.role, permissions);
        },

        canAny: (permissions: Permission[]) => {
          const user = get().user;
          if (!user) return false;
          return hasAnyPermission(user.role, permissions);
        },
      }),
      {
        name: 'super-app-auth',
        partialize: (state) => ({
          user: state.user,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    { name: 'AuthStore' }
  )
);
