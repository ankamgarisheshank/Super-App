/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Application Router
 * ─────────────────────────────────────────────────────────────
 * Centralized routing with:
 * - Lazy-loaded workspace routes
 * - Auth guards on protected routes
 * - Role-based route restrictions
 * - Guest guard on public auth pages
 * - Nested layout routing
 */

import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthLayout, DashboardLayout } from '@core/layouts';
import { AuthGuard, GuestGuard, RoleGuard } from '@core/guards';
import { LoginPage, RegisterPage } from '@core/auth';
import {
  PartnerDashboard,
  UnauthorizedPage,
  NotFoundPage,
} from '@core/app-shell/pages';
import { Skeleton } from '@shared/components/atoms/Skeleton';

// Lazy load feature pages
const AdminDashboardPage = lazy(() => import('../../workspaces/super-admin-dashboard/pages/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const AdminUsersPage = lazy(() => import('../../workspaces/super-admin-dashboard/pages/UsersPage').then(m => ({ default: m.UsersPage })));
const DeliveryDashboardPage = lazy(() => import('../../workspaces/delivery-workspace/pages/DeliveryDashboard').then(m => ({ default: m.DeliveryDashboard })));
const VendorDashboardPage = lazy(() => import('../../workspaces/vendor-workspace/pages/VendorDashboard').then(m => ({ default: m.VendorDashboard })));
const ConsumerDashboardPage = lazy(() => import('../../workspaces/consumer-workspace/pages/ConsumerDashboard').then(m => ({ default: m.ConsumerDashboard })));
const CheckoutPage = lazy(() => import('../../workspaces/consumer-workspace/checkout/CheckoutPage').then(m => ({ default: m.CheckoutPage })));
const TrackingPage = lazy(() => import('../../workspaces/consumer-workspace/tracking/TrackingPage').then(m => ({ default: m.TrackingPage })));

// Loading fallback
const PageLoader = () => (
  <div className="space-y-4 p-8">
    <Skeleton className="h-10 w-64" />
    <Skeleton className="h-96 w-full" />
  </div>
);

const router = createBrowserRouter([
  // ── Public Auth Routes ───────────────────────────────────
  {
    element: (
      <GuestGuard>
        <AuthLayout />
      </GuestGuard>
    ),
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },

  // ── Consumer Workspace (authenticated) ───────────────────
  {
    path: '/app',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      { 
        path: 'dashboard', 
        element: (
          <Suspense fallback={<PageLoader />}>
            <ConsumerDashboardPage />
          </Suspense>
        ) 
      },
      { 
        path: 'checkout', 
        element: (
          <Suspense fallback={<PageLoader />}>
            <CheckoutPage />
          </Suspense>
        ) 
      },
      { 
        path: 'tracking/:orderId', 
        element: (
          <Suspense fallback={<PageLoader />}>
            <TrackingPage />
          </Suspense>
        ) 
      },
    ],
  },

  // ── Admin Workspace (super_admin, admin, manager) ────────
  {
    path: '/admin',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={['super_admin', 'admin', 'manager', 'support_agent', 'analyst']}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      { 
        path: 'dashboard', 
        element: (
          <Suspense fallback={<PageLoader />}>
            <AdminDashboardPage />
          </Suspense>
        ) 
      },
      { 
        path: 'users', 
        element: (
          <Suspense fallback={<PageLoader />}>
            <AdminUsersPage />
          </Suspense>
        ) 
      },
      // Future: orders, products, analytics, settings, reports
    ],
  },

  // ── Vendor Workspace ─────────────────────────────────────
  {
    path: '/vendor',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={['vendor_admin', 'vendor_staff', 'admin', 'super_admin'] as any}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      { 
        path: 'dashboard', 
        element: (
          <Suspense fallback={<PageLoader />}>
            <VendorDashboardPage />
          </Suspense>
        ) 
      },
    ],
  },

  // ── Delivery Workspace ───────────────────────────────────
  {
    path: '/delivery',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={['delivery_agent', 'admin', 'super_admin']}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      { 
        path: 'dashboard', 
        element: (
          <Suspense fallback={<PageLoader />}>
            <DeliveryDashboardPage />
          </Suspense>
        ) 
      },
    ],
  },

  // ── Partner Workspace ────────────────────────────────────
  {
    path: '/partner',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={['partner', 'admin', 'super_admin']}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      { path: 'dashboard', element: <PartnerDashboard /> },
    ],
  },

  // ── Utility Pages ────────────────────────────────────────
  { path: '/unauthorized', element: <UnauthorizedPage /> },

  // ── Home Redirect ────────────────────────────────────────
  { path: '/', element: <LoginPage /> },

  // ── 404 Catch-all ────────────────────────────────────────
  { path: '*', element: <NotFoundPage /> },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
