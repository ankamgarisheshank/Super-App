/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Route Path Constants
 * ─────────────────────────────────────────────────────────────
 * All route paths centralized to avoid magic strings.
 */

export const ROUTES = {
  // ── Public ───────────────────────────────────────────────
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',

  // ── Consumer Workspace ───────────────────────────────────
  CONSUMER: {
    ROOT: '/app',
    DASHBOARD: '/app/dashboard',
    ORDERS: '/app/orders',
    ORDER_DETAIL: '/app/orders/:id',
    WALLET: '/app/wallet',
    PROFILE: '/app/profile',
    SEARCH: '/app/search',
    NOTIFICATIONS: '/app/notifications',
  },

  // ── Admin Workspace ──────────────────────────────────────
  ADMIN: {
    ROOT: '/admin',
    DASHBOARD: '/admin/dashboard',
    USERS: '/admin/users',
    USER_DETAIL: '/admin/users/:id',
    ORDERS: '/admin/orders',
    PRODUCTS: '/admin/products',
    ANALYTICS: '/admin/analytics',
    SETTINGS: '/admin/settings',
    REPORTS: '/admin/reports',
  },

  // ── Vendor Workspace ─────────────────────────────────────
  VENDOR: {
    ROOT: '/vendor',
    DASHBOARD: '/vendor/dashboard',
    PRODUCTS: '/vendor/products',
    ORDERS: '/vendor/orders',
    ANALYTICS: '/vendor/analytics',
    SETTINGS: '/vendor/settings',
  },

  // ── Delivery Workspace ───────────────────────────────────
  DELIVERY: {
    ROOT: '/delivery',
    DASHBOARD: '/delivery/dashboard',
    ACTIVE_ORDERS: '/delivery/active',
    HISTORY: '/delivery/history',
    EARNINGS: '/delivery/earnings',
    MAP: '/delivery/map',
  },

  // ── Partner Workspace ────────────────────────────────────
  PARTNER: {
    ROOT: '/partner',
    DASHBOARD: '/partner/dashboard',
    PRODUCTS: '/partner/products',
    ANALYTICS: '/partner/analytics',
    SETTLEMENTS: '/partner/settlements',
  },

  // ── Food Delivery Workspace ──────────────────────────────
  FOOD: {
    ROOT: '/food',
    HOME: '/food/home',
    RESTAURANT: '/food/restaurant/:id',
    CART: '/food/cart',
    CHECKOUT: '/food/checkout',
    TRACKING: '/food/tracking/:orderId',
  },

  // ── E-Commerce Workspace ─────────────────────────────────
  ECOMMERCE: {
    ROOT: '/shop',
    HOME: '/shop/home',
    CATEGORY: '/shop/category/:slug',
    PRODUCT: '/shop/product/:id',
    CART: '/shop/cart',
    CHECKOUT: '/shop/checkout',
  },

  // ── Ride Booking Workspace ───────────────────────────────
  RIDE: {
    ROOT: '/ride',
    HOME: '/ride/home',
    BOOKING: '/ride/book',
    TRACKING: '/ride/track/:rideId',
    HISTORY: '/ride/history',
  },

  // ── Healthcare Workspace ─────────────────────────────────
  HEALTHCARE: {
    ROOT: '/health',
    HOME: '/health/home',
    APPOINTMENTS: '/health/appointments',
    RECORDS: '/health/records',
  },
} as const;
