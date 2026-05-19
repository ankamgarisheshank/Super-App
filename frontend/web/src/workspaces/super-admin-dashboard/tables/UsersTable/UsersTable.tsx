import { DataTable } from '@shared/components/organisms/DataTable';
import { userColumns } from './columns';
import type { User } from '@shared/types';

interface UsersTableProps {
  data: User[];
  meta?: any;
  isLoading: boolean;
  onPaginationChange: (page: number, pageSize: number) => void;
}

export function UsersTable({
  data,
  meta,
  isLoading,
  onPaginationChange,
}: UsersTableProps) {
  return (
    <DataTable
      columns={userColumns}
      data={data}
      isLoading={isLoading}
      pageCount={meta?.totalPages || 0}
      onPaginationChange={onPaginationChange}
      serverSide={true}
    />
  );
}
