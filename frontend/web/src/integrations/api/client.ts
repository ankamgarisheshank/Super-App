/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Axios API Client
 * ─────────────────────────────────────────────────────────────
 * Enterprise-grade HTTP client with:
 * - Automatic JWT injection via interceptors
 * - Token refresh on 401
 * - Request/response logging in dev
 * - Centralized error handling
 * - Request cancellation support
 */

import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
} from 'axios';
import { appConfig } from '@core/config';
import { storage } from '@shared/utils';

// ── Create Axios Instance ──────────────────────────────────

const apiClient: AxiosInstance = axios.create({
  baseURL: appConfig.api.baseUrl,
  timeout: appConfig.api.timeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ── Request Interceptor: Attach JWT ────────────────────────

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = storage.get<string>(appConfig.auth.tokenKey);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (appConfig.app.isDev) {
      console.log(
        `%c[API] ${config.method?.toUpperCase()} ${config.url}`,
        'color: #61dafb; font-weight: bold;',
        config.data ?? ''
      );
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// ── Response Interceptor: Handle 401 & Errors ──────────────

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: unknown) => void;
  reject: (reason: unknown) => void;
}> = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Handle 401 — try refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${token}`;
          }
          return apiClient(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = storage.get<string>(appConfig.auth.refreshTokenKey);
        if (!refreshToken) throw new Error('No refresh token');

        const { data } = await axios.post(
          `${appConfig.api.baseUrl}/auth/refresh`,
          { refreshToken }
        );

        const newToken = data.data.accessToken;
        storage.set(appConfig.auth.tokenKey, newToken);
        storage.set(appConfig.auth.refreshTokenKey, data.data.refreshToken);

        processQueue(null, newToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
        }
        return apiClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError as AxiosError, null);

        // Clear auth state — force re-login
        storage.remove(appConfig.auth.tokenKey);
        storage.remove(appConfig.auth.refreshTokenKey);
        storage.remove(appConfig.auth.userKey);
        window.location.href = '/login';

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

// ── Typed API Methods ──────────────────────────────────────

export const api = {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return apiClient.get<T>(url, config);
  },

  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return apiClient.post<T>(url, data, config);
  },

  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return apiClient.put<T>(url, data, config);
  },

  patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return apiClient.patch<T>(url, data, config);
  },

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return apiClient.delete<T>(url, config);
  },
};

export default apiClient;
