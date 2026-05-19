import { useUIStore } from '@store/index';
import { ToastMessage } from './ToastMessage';

export function ToastContainer() {
  const toasts = useUIStore((s) => s.toasts);

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 z-[1700] flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        {toasts.map((toast) => (
          <ToastMessage key={toast.id} toast={toast} />
        ))}
      </div>
    </div>
  );
}
