import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserAPI } from './user.api';
import { userKeys } from './user.keys';
import { useUIStore } from '@store/index';
import type { CreateUserDTO, UpdateUserDTO } from './user.types';

export function useCreateUser() {
  const queryClient = useQueryClient();
  const addToast = useUIStore((s) => s.addToast);

  return useMutation({
    mutationFn: (payload: CreateUserDTO) => UserAPI.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
      addToast({ type: 'success', title: 'User created successfully' });
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || 'Failed to create user';
      addToast({ type: 'error', title: 'Error', message });
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const addToast = useUIStore((s) => s.addToast);

  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateUserDTO }) => 
      UserAPI.update({ id, payload }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
      queryClient.invalidateQueries({ queryKey: userKeys.detail(variables.id) });
      addToast({ type: 'success', title: 'User updated successfully' });
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || 'Failed to update user';
      addToast({ type: 'error', title: 'Error', message });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const addToast = useUIStore((s) => s.addToast);

  return useMutation({
    mutationFn: (id: string) => UserAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
      addToast({ type: 'success', title: 'User deleted successfully' });
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || 'Failed to delete user';
      addToast({ type: 'error', title: 'Error', message });
    },
  });
}
