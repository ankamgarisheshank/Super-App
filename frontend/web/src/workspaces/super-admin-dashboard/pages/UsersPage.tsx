import { useState } from 'react';
import { useUsers } from '@services/user-service';
import { UsersTable } from '../tables/UsersTable/UsersTable';
import { useUIStore } from '@store/index';
import { Button } from '@shared/components/atoms/Button';
import { Input } from '@shared/components/atoms/Input';
import { Can } from '@core/permissions';
import { Plus, Search } from 'lucide-react';
import { useDebounce } from '@hooks/useDebounce';

export function UsersPage() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  
  const debouncedSearch = useDebounce(search, 500);
  const openModal = useUIStore((s) => s.openModal);

  // Tanstack Table passes page index starting from 0, API might want 1-indexed depending on backend.
  // We'll pass 1-indexed to the query if needed, or 0-indexed if the backend expects it.
  const { data, isLoading, isError } = useUsers({
    page: page + 1,
    limit: pageSize,
    search: debouncedSearch,
  } as any);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">User Management</h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage platform users, roles, and system access.
          </p>
        </div>
        
        <Can permission="users:create">
          <Button onClick={() => openModal('CREATE_USER')}>
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </Can>
      </div>

      {/* Tool bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center bg-gray-900/50 p-4 rounded-xl border border-gray-800 backdrop-blur-sm">
        <div className="relative w-full sm:max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
          <Input 
            type="text" 
            placeholder="Search by name or email..." 
            className="pl-10 h-10 bg-gray-950 border-gray-800"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(0); // Reset page on search
            }}
          />
        </div>
        
        {/* We can add role or status filters here later */}
      </div>

      {isError ? (
        <div className="p-8 text-center border border-red-500/20 bg-red-500/10 rounded-xl">
          <p className="text-red-400 font-medium">Failed to load users. Please try again.</p>
        </div>
      ) : (
        <UsersTable 
          data={data?.data || []} 
          meta={data?.meta} 
          isLoading={isLoading} 
          onPaginationChange={(p, s) => { 
            setPage(p); 
            setPageSize(s); 
          }} 
        />
      )}
    </div>
  );
}
