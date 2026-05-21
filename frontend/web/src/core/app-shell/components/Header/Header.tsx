import { useAuthStore, useUIStore, useSocketStore, useCartStore } from '@store/index';
import { Menu, Bell, Search, ShoppingBag } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { WorkspaceSwitcher } from './WorkspaceSwitcher';

export function Header() {
  const toggleMobileSidebar = useUIStore((s) => s.toggleSidebar);
  const toggleCollapse = useUIStore((s) => s.collapseSidebar);
  const toggleCart = useUIStore((s) => s.toggleCart);
  const socketStatus = useSocketStore((s) => s.status);
  const totalItems = useCartStore((s) => s.getTotalItems());
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-800 bg-gray-950/80 px-4 shadow-sm backdrop-blur-xl sm:gap-x-6 sm:px-6 lg:px-8">
      {/* Mobile sidebar toggle */}
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
        onClick={toggleMobileSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Desktop collapse toggle */}
      <button
        type="button"
        className="hidden lg:flex -m-2.5 p-2.5 text-gray-400 hover:text-gray-300"
        onClick={toggleCollapse}
      >
        <span className="sr-only">Collapse sidebar</span>
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-gray-800 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center">
        {/* Breadcrumbs for desktop */}
        <div className="hidden md:flex flex-1">
          <Breadcrumbs />
        </div>

        {/* Global Search */}
        <div className="flex flex-1 md:flex-none md:w-64 relative">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <Search
            className="pointer-events-none absolute inset-y-0 left-3 h-full w-4 text-gray-500"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-9 w-full rounded-full border border-gray-700 bg-gray-900 py-0 pl-10 pr-3 text-sm text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search..."
            type="search"
            name="search"
          />
        </div>

        <div className="flex items-center gap-x-2 sm:gap-x-4 lg:gap-x-6">
          <WorkspaceSwitcher />

          {/* Realtime Socket Indicator */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 border border-gray-800">
            <div className={`h-2 w-2 rounded-full ${
              socketStatus === 'connected' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' :
              socketStatus === 'reconnecting' ? 'bg-amber-500 animate-pulse' :
              'bg-red-500'
            }`} />
            <span className="text-xs font-medium text-gray-400 capitalize">
              {socketStatus}
            </span>
          </div>

          {/* Cart Icon */}
          <button 
            type="button" 
            className="p-2.5 text-gray-400 hover:text-gray-300 relative transition-colors"
            onClick={() => toggleCart(true)}
          >
            <span className="sr-only">View cart</span>
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            {totalItems > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white shadow-lg">
                {totalItems}
              </span>
            )}
          </button>

          {/* Notifications */}
          <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-300 relative transition-colors">
            <span className="sr-only">View notifications</span>
            <Bell className="h-5 w-5" aria-hidden="true" />
            <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-gray-950" />
          </button>

          {/* Separator */}
          <div className="hidden sm:block sm:h-6 sm:w-px sm:bg-gray-800" aria-hidden="true" />

          {/* Profile dropdown (Simplified) */}
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => {
                if (confirm('Logout?')) logout();
              }}
              className="flex items-center gap-x-3 text-sm font-semibold leading-6 text-white p-1 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center font-bold">
                {user?.firstName?.charAt(0) || 'U'}
              </div>
              <span className="hidden lg:flex lg:items-center">
                <span className="ml-2 text-sm font-medium leading-6 text-gray-300" aria-hidden="true">
                  {user?.firstName}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
