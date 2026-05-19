import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { LayoutGrid, Check } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@shared/utils';
import { WORKSPACE_CONFIGS } from '../../config/navigation.config';

export function WorkspaceSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();

  const workspaces = Object.values(WORKSPACE_CONFIGS);

  // Derive current workspace from URL
  const currentWorkspace = workspaces.find((w) => location.pathname.startsWith(w.path)) || workspaces[0];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center gap-x-2 rounded-lg p-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
          <LayoutGrid className="h-5 w-5" aria-hidden="true" />
          <span className="hidden sm:block">{currentWorkspace?.name}</span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-gray-900 border border-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
          <div className="py-1">
            {workspaces.map((workspace) => {
              const Icon = workspace.icon;
              const isActive = currentWorkspace?.id === workspace.id;

              // Ideally you would check permissions here based on workspace base permissions
              // For now, we will render them all or wrap in specific <Can> conditions if they existed
              return (
                <Menu.Item key={workspace.id}>
                  {({ active }) => (
                    <button
                      onClick={() => navigate(workspace.path)}
                      className={cn(
                        active ? 'bg-gray-800 text-white' : 'text-gray-300',
                        'group flex w-full items-center px-4 py-2.5 text-sm transition-colors'
                      )}
                    >
                      <Icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" aria-hidden="true" />
                      <span className="flex-1 text-left font-medium">{workspace.name}</span>
                      {isActive && <Check className="h-4 w-4 text-blue-500" />}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
