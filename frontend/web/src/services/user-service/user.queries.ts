import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { UserAPI } from './user.api';
import { userKeys } from './user.keys';
import type { UserFilters } from './user.types';

export function useUsers(filters: UserFilters) {
  return useQuery({
    queryKey: userKeys.list(filters),
    queryFn: () => UserAPI.getAll(filters),
    placeholderData: keepPreviousData,
    staleTime: 60 * 1000, // 1 minute
  });
}

export function useUser(id: string) {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => UserAPI.getById(id),
    enabled: !!id,
    staleTime: 60 * 1000,
  });
}
