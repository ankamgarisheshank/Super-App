/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Auth Service
 * ─────────────────────────────────────────────────────────────
 * API abstraction layer for authentication endpoints.
 * Separates transport logic from business logic (store).
 */

import { api } from '@/integrations/api';
import type {
  User,
  AuthTokens,
  LoginCredentials,
  RegisterPayload,
  ApiResponse,
} from '@shared/types';

interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}

export const authService = {
  login(credentials: LoginCredentials) {
    return api.post<ApiResponse<AuthResponse>>('/auth/login', credentials);
  },

  register(payload: RegisterPayload) {
    return api.post<ApiResponse<AuthResponse>>('/auth/register', payload);
  },

  me() {
    return api.get<ApiResponse<User>>('/auth/me');
  },

  refreshToken(refreshToken: string) {
    return api.post<ApiResponse<AuthTokens>>('/auth/refresh', { refreshToken });
  },

  logout() {
    return api.post<ApiResponse<null>>('/auth/logout');
  },

  forgotPassword(email: string) {
    return api.post<ApiResponse<null>>('/auth/forgot-password', { email });
  },

  resetPassword(token: string, password: string) {
    return api.post<ApiResponse<null>>('/auth/reset-password', { token, password });
  },

  verifyEmail(token: string) {
    return api.post<ApiResponse<null>>('/auth/verify-email', { token });
  },
};
