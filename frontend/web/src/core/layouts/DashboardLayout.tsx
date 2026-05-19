/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Dashboard Layout
 * ─────────────────────────────────────────────────────────────
 * Main authenticated layout with sidebar + top header + content.
 * Used by all workspace dashboards.
 */

import { Outlet, useLocation } from 'react-router-dom';
import { useUIStore } from '@store/index';
import { cn } from '@shared/utils';
import { Sidebar } from '../app-shell/components/Sidebar/Sidebar';
import { Header } from '../app-shell/components/Header/Header';
import { WORKSPACE_CONFIGS } from '../app-shell/config/navigation.config';
import { CartDrawer } from '../../workspaces/consumer-workspace/cart/CartDrawer';

export function DashboardLayout() {
  const isSidebarCollapsed = useUIStore((s) => s.isSidebarCollapsed);
  const location = useLocation();

  // Determine current workspace based on URL path
  const getWorkspace = () => {
    if (location.pathname.startsWith('/admin')) return WORKSPACE_CONFIGS.admin;
    if (location.pathname.startsWith('/vendor')) return WORKSPACE_CONFIGS.vendor;
    if (location.pathname.startsWith('/delivery')) return WORKSPACE_CONFIGS.delivery;
    // Default fallback (e.g. consumer or if not matched)
    return WORKSPACE_CONFIGS.admin;
  };

  const currentWorkspace = getWorkspace();

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      {/* ── Sidebar ────────────────────────────────────── */}
      <Sidebar currentWorkspace={currentWorkspace} />

      {/* ── Main Content Area ──────────────────────────── */}
      <div
        className={cn(
          'flex-1 flex flex-col transition-all duration-300 min-w-0',
          isSidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
        )}
      >
        {/* ── Top Header ──────────────────────────────── */}
        <Header />

        {/* ── Page Content ─────────────────────────────── */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Global Consumer Cart Sidebar */}
      <CartDrawer />
    </div>
  );
}
