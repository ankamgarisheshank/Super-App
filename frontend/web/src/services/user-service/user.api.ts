import { api } from '@/integrations/api';
import type { User, PaginatedResponse } from '@shared/types';
import type { UserFilters, CreateUserDTO, UpdateUserDTO } from './user.types';

export const UserAPI = {
  getAll: async (params: UserFilters) => {
    // We clean up params to remove empty strings or 'all' if backend expects standard optional params
    const cleanParams = Object.fromEntries(
      Object.entries(params).filter(([_, v]) => v !== '' && v !== 'all' && v != null)
    );
    const { data } = await api.get<PaginatedResponse<User>>('/admin/users', { params: cleanParams });
    return data;
  },

  getById: async (id: string) => {
    const { data } = await api.get<{ data: User }>(`/admin/users/${id}`);
    return data.data;
  },

  create: async (payload: CreateUserDTO) => {
    const { data } = await api.post<{ data: User }>('/admin/users', payload);
    return data.data;
  },

  update: async ({ id, payload }: { id: string; payload: UpdateUserDTO }) => {
    const { data } = await api.patch<{ data: User }>(`/admin/users/${id}`, payload);
    return data.data;
  },

  delete: async (id: string) => {
    await api.delete(`/admin/users/${id}`);
    return id;
  },
};
