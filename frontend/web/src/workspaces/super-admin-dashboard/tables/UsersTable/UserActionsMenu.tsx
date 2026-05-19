import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { cn } from '@shared/utils';
import type { User } from '@shared/types';
import { useUIStore } from '@store/index';
import { useDeleteUser } from '@services/user-service';

export function UserActionsMenu({ user }: { user: User }) {
  const openModal = useUIStore((s) => s.openModal);
  const deleteUser = useDeleteUser();

  const handleEdit = () => {
    openModal('EDIT_USER', { user });
  };

  const handleDelete = () => {
    openModal('CONFIRM_DIALOG', {
      title: 'Delete User',
      message: `Are you sure you want to delete ${user.firstName} ${user.lastName}? This action cannot be undone.`,
      confirmText: 'Delete',
      variant: 'danger',
      onConfirm: async () => {
        await deleteUser.mutateAsync(user.id);
      },
    });
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center rounded-full p-2 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
          <span className="sr-only">Open options</span>
          <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-gray-900 border border-gray-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleEdit}
                  className={cn(
                    active ? 'bg-gray-800 text-white' : 'text-gray-300',
                    'group flex w-full items-center px-4 py-2.5 text-sm transition-colors'
                  )}
                >
                  <Edit className="mr-3 h-4 w-4 text-gray-400 group-hover:text-white" />
                  Edit User
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleDelete}
                  className={cn(
                    active ? 'bg-red-500/10 text-red-400' : 'text-red-500',
                    'group flex w-full items-center px-4 py-2.5 text-sm transition-colors'
                  )}
                >
                  <Trash2 className="mr-3 h-4 w-4 text-red-500 group-hover:text-red-400" />
                  Delete User
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
