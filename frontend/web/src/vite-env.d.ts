/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_TIMEOUT: string;
  readonly VITE_JWT_SECRET: string;
  readonly VITE_JWT_EXPIRY: string;
  readonly VITE_REFRESH_TOKEN_EXPIRY: string;
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_RAZORPAY_KEY_ID: string;
  readonly VITE_RAZORPAY_KEY_SECRET: string;
  readonly VITE_GOOGLE_MAPS_API_KEY: string;
  readonly VITE_WS_URL: string;
  readonly VITE_ENABLE_AI_CHATBOT: string;
  readonly VITE_ENABLE_VOICE_AGENT: string;
  readonly VITE_ENABLE_REALTIME_TRACKING: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
