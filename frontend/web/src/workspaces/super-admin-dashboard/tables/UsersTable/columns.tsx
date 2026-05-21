import { ColumnDef } from '@tanstack/react-table';
import type { User } from '@shared/types';
import { Badge } from '@shared/components/atoms/Badge';
import { UserActionsMenu } from './UserActionsMenu';

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'firstName',
    header: 'Name',
    cell: ({ row }) => {
      const { firstName, lastName, email } = row.original;
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-xs font-bold text-blue-400">
            {firstName.charAt(0)}
            {lastName.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">
              {firstName} {lastName}
            </p>
            <p className="truncate text-xs text-gray-500">{email}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => (
      <Badge variant="outline" className="capitalize">
        {row.original.role.replace('_', ' ')}
      </Badge>
    ),
  },
  {
    accessorKey: 'isActive',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant={row.original.isActive ? 'success' : 'error'}>
        {row.original.isActive ? 'Active' : 'Inactive'}
      </Badge>
    ),
  },
  {
    accessorKey: 'lastLogin',
    header: 'Last Login',
    cell: ({ row }) => (
      <span className="text-gray-400">
        {(row.original as any).lastLogin
          ? new Date((row.original as any).lastLogin).toLocaleDateString()
          : 'Never'}
      </span>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => <UserActionsMenu user={row.original} />,
  },
];
