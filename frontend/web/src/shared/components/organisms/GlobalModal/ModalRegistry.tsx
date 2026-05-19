import { lazy } from 'react';

// Lazy load modals so they don't bloat the main bundle
const ConfirmDialogModal = lazy(() => import('./modals/ConfirmDialogModal'));
const CreateUserModal = lazy(() => import('../../../../workspaces/super-admin-dashboard/modals/CreateUserModal'));
// const EditUserModal = lazy(() => import('../../../workspaces/super-admin-dashboard/modals/EditUserModal'));

export const MODAL_REGISTRY: Record<string, React.ElementType> = {
  CONFIRM_DIALOG: ConfirmDialogModal,
  CREATE_USER: CreateUserModal,
  // EDIT_USER: EditUserModal,
};

