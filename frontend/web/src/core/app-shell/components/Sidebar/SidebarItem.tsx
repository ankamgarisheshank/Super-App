import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@shared/utils';
import type { NavItem } from '../../config/navigation.config';
import { Can } from '@core/permissions';

interface SidebarItemProps {
  item: NavItem;
  isCollapsed: boolean;
  isActive?: boolean;
}

export function SidebarItem({ item, isCollapsed, isActive }: SidebarItemProps) {
  const { label, path, icon: Icon, permissions, children } = item;

  // We wrap the entire item in <Can> to only render if they have permission
  return (
    <Can permissions={permissions}>
      <div className="relative group">
        {path ? (
          <NavLink
            to={path}
            className={({ isActive: routerActive }) =>
              cn(
                'flex items-center w-full rounded-xl px-3 py-2.5 transition-all duration-200',
                routerActive || isActive
                  ? 'bg-blue-600/10 text-blue-500'
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
              )
            }
            title={isCollapsed ? label : undefined}
          >
            {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
            {!isCollapsed && (
              <span className="ml-3 flex-1 text-sm font-medium">{label}</span>
            )}
            {!isCollapsed && children && (
              <ChevronRight className="h-4 w-4 ml-auto text-gray-500" />
            )}
          </NavLink>
        ) : (
          <div
            className={cn(
              'flex items-center w-full rounded-xl px-3 py-2.5 text-gray-400 hover:bg-gray-800/50 hover:text-gray-200 cursor-pointer transition-all duration-200'
            )}
            title={isCollapsed ? label : undefined}
          >
            {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
            {!isCollapsed && (
              <span className="ml-3 flex-1 text-sm font-medium">{label}</span>
            )}
            {!isCollapsed && children && (
              <ChevronRight className="h-4 w-4 ml-auto text-gray-500" />
            )}
          </div>
        )}
      </div>
    </Can>
  );
}
