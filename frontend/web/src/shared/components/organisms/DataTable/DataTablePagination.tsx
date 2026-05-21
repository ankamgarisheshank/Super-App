import { Table } from '@tanstack/react-table';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '../../atoms/Button';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  onPaginationChange?: (page: number, pageSize: number) => void;
  serverSide?: boolean;
}

export function DataTablePagination<TData>({
  table,
  onPaginationChange,
  serverSide,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-gray-500">
        {/* Can add selected rows count here if row selection is enabled */}
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium text-gray-400">Rows per page</p>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              const newSize = Number(e.target.value);
              table.setPageSize(newSize);
              if (serverSide && onPaginationChange) {
                onPaginationChange(table.getState().pagination.pageIndex, newSize);
              }
            }}
            className="h-8 rounded-md border border-gray-700 bg-gray-900 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center text-sm font-medium text-gray-400">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount() || 1}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 p-0"
            onClick={() => {
              table.setPageIndex(0);
              if (serverSide && onPaginationChange) {
                onPaginationChange(0, table.getState().pagination.pageSize);
              }
            }}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 p-0"
            onClick={() => {
              table.previousPage();
              if (serverSide && onPaginationChange) {
                onPaginationChange(
                  table.getState().pagination.pageIndex - 1,
                  table.getState().pagination.pageSize
                );
              }
            }}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 p-0"
            onClick={() => {
              table.nextPage();
              if (serverSide && onPaginationChange) {
                onPaginationChange(
                  table.getState().pagination.pageIndex + 1,
                  table.getState().pagination.pageSize
                );
              }
            }}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 p-0"
            onClick={() => {
              const lastPage = table.getPageCount() - 1;
              table.setPageIndex(lastPage);
              if (serverSide && onPaginationChange) {
                onPaginationChange(lastPage, table.getState().pagination.pageSize);
              }
            }}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
