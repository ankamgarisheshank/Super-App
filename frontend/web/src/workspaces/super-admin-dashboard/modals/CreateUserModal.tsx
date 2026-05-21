import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@shared/components/atoms/Button';
import { Input } from '@shared/components/atoms/Input';
import { useCreateUser } from '@services/user-service';

const createUserSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['super_admin', 'admin', 'manager', 'user', 'vendor_admin', 'vendor_staff', 'driver', 'support_agent', 'customer'] as const),
});

type CreateUserForm = z.infer<typeof createUserSchema>;

export default function CreateUserModal({ onClose }: { onClose: () => void }) {
  const createUser = useCreateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserForm>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      role: 'user',
    },
  });

  const onSubmit = async (data: CreateUserForm) => {
    try {
      await createUser.mutateAsync(data as any);
      onClose();
    } catch (error) {
      // Error is handled globally by the mutation
    }
  };

  return (
    <div className="p-6">
      <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-white mb-4">
        Create New User
      </Dialog.Title>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
            <Input
              {...register('firstName')}
              error={errors.firstName?.message}
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
            <Input
              {...register('lastName')}
              error={errors.lastName?.message}
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <Input
            {...register('email')}
            type="email"
            error={errors.email?.message}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Role</label>
          <select
            {...register('role')}
            className="flex h-11 w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="super_admin">Super Admin</option>
          </select>
          {errors.role?.message && (
            <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.role.message}</p>
          )}
        </div>

        <div className="mt-6 sm:flex sm:flex-row-reverse sm:gap-3 pt-4 border-t border-gray-800">
          <Button
            type="submit"
            isLoading={createUser.isPending}
            className="w-full sm:w-auto"
          >
            Create User
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="mt-3 w-full sm:mt-0 sm:w-auto"
            disabled={createUser.isPending}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
