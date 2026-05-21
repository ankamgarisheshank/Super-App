import type { PaginationParams, UserRole } from '@shared/types';

export interface UserFilters extends PaginationParams {
  role?: UserRole | 'all';
  status?: 'active' | 'inactive' | 'all';
}

export interface CreateUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  password?: string; // Optional if you auto-generate on backend
}

export interface UpdateUserDTO extends Partial<CreateUserDTO> {
  isActive?: boolean;
}
