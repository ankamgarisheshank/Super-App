import { useUIStore } from '@store/index';
import { cn } from '@shared/utils';
import { SidebarItem } from './SidebarItem';
import type { WorkspaceConfig } from '../../config/navigation.config';

interface SidebarProps {
  currentWorkspace: WorkspaceConfig;
}

export function Sidebar({ currentWorkspace }: SidebarProps) {
  const isSidebarCollapsed = useUIStore((s) => s.isSidebarCollapsed);
  const isMobileOpen = useUIStore((s) => s.isSidebarOpen); // Reuse this for mobile toggle
  const toggleMobile = useUIStore((s) => s.toggleSidebar);

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-950/80 backdrop-blur-sm lg:hidden"
          onClick={toggleMobile}
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex flex-col bg-gray-900/95 backdrop-blur-xl border-r border-gray-800 transition-all duration-300',
          isSidebarCollapsed ? 'w-16' : 'w-64',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Brand Area */}
        <div className="flex h-16 shrink-0 items-center px-4 border-b border-gray-800">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 font-bold text-white shrink-0">
            SA
          </div>
          {!isSidebarCollapsed && (
            <span className="ml-3 text-lg font-semibold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent truncate">
              Super-App
            </span>
          )}
        </div>

        {/* Navigation Area */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-1 scrollbar-hide">
          <div
            className={cn(
              'px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500',
              isSidebarCollapsed && 'text-center'
            )}
          >
            {isSidebarCollapsed ? 'Nav' : currentWorkspace.name}
          </div>

          <div className="space-y-1">
            {currentWorkspace.nav.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                isCollapsed={isSidebarCollapsed}
              />
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}
