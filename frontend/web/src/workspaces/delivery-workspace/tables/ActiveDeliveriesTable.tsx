import { ColumnDef } from '@tanstack/react-table';
import type { Delivery } from '@services/delivery-service';
import { Badge } from '@shared/components/atoms/Badge';
import { DataTable } from '@shared/components/organisms/DataTable';
import { MoreHorizontal } from 'lucide-react';

const columns: ColumnDef<Delivery>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => <span className="font-mono text-xs text-gray-400">{row.original.id}</span>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status;
      const variant = status === 'in_transit' ? 'success' : status === 'pending' ? 'warning' : 'default';
      return (
        <Badge variant={variant} className="capitalize">
          {status.replace('_', ' ')}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'pickupLocation',
    header: 'Pickup',
    cell: ({ row }) => <span className="text-sm truncate max-w-[150px] inline-block">{row.original.pickupLocation.address}</span>,
  },
  {
    accessorKey: 'dropoffLocation',
    header: 'Dropoff',
    cell: ({ row }) => <span className="text-sm truncate max-w-[150px] inline-block">{row.original.dropoffLocation.address}</span>,
  },
  {
    accessorKey: 'estimatedTimeOfArrival',
    header: 'ETA',
    cell: ({ row }) => (
      <span className="text-sm text-blue-400 font-medium">
        {row.original.estimatedTimeOfArrival ? new Date(row.original.estimatedTimeOfArrival).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-'}
      </span>
    ),
  },
  {
    id: 'actions',
    cell: () => (
      <button className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
        <MoreHorizontal className="h-4 w-4" />
      </button>
    )
  }
];

interface ActiveDeliveriesTableProps {
  data: Delivery[];
  isLoading: boolean;
}

export function ActiveDeliveriesTable({ data, isLoading }: ActiveDeliveriesTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      isLoading={isLoading}
      serverSide={false}
    />
  );
}
