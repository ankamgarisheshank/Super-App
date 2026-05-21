/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Centralized Application Configuration
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for all environment-driven config.
 * Never access import.meta.env directly — always use this.
 */

export const appConfig = {
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Super-App',
    version: import.meta.env.VITE_APP_VERSION || '0.1.0',
    env: import.meta.env.VITE_APP_ENV || 'development',
    isDev: import.meta.env.DEV,
    isProd: import.meta.env.PROD,
  },

  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
    timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 30000,
  },

  auth: {
    jwtExpiry: import.meta.env.VITE_JWT_EXPIRY || '7d',
    refreshTokenExpiry: import.meta.env.VITE_REFRESH_TOKEN_EXPIRY || '30d',
    tokenKey: 'super_app_access_token',
    refreshTokenKey: 'super_app_refresh_token',
    userKey: 'super_app_user',
  },

  ws: {
    url: import.meta.env.VITE_WS_URL || 'ws://localhost:8000',
  },

  firebase: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  },

  payments: {
    razorpayKeyId: import.meta.env.VITE_RAZORPAY_KEY_ID,
  },

  maps: {
    googleApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  },

  featureFlags: {
    aiChatbot: import.meta.env.VITE_ENABLE_AI_CHATBOT === 'true',
    voiceAgent: import.meta.env.VITE_ENABLE_VOICE_AGENT === 'true',
    realtimeTracking: import.meta.env.VITE_ENABLE_REALTIME_TRACKING === 'true',
  },
} as const;

export type AppConfig = typeof appConfig;
