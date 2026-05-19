import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useUIStore } from '@store/index';
import type { Toast } from '@shared/types';
import { cn } from '@shared/utils';

const toastConfig = {
  success: {
    icon: CheckCircle,
    styles: 'bg-green-500/10 border-green-500/20 text-green-400',
    iconStyles: 'text-green-400',
  },
  error: {
    icon: AlertCircle,
    styles: 'bg-red-500/10 border-red-500/20 text-red-400',
    iconStyles: 'text-red-400',
  },
  warning: {
    icon: AlertTriangle,
    styles: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    iconStyles: 'text-amber-400',
  },
  info: {
    icon: Info,
    styles: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    iconStyles: 'text-blue-400',
  },
};

export function ToastMessage({ toast }: { toast: Toast }) {
  const [show, setShow] = useState(false);
  const removeToast = useUIStore((s) => s.removeToast);

  // Trigger entrance animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const config = toastConfig[toast.type];
  const Icon = config.icon;

  const handleDismiss = () => {
    setShow(false);
    // Wait for exit animation before removing from store
    setTimeout(() => removeToast(toast.id), 300);
  };

  return (
    <Transition
      show={show}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={cn(
          'pointer-events-auto w-full max-w-sm overflow-hidden rounded-xl border p-4 shadow-xl backdrop-blur-xl',
          'bg-gray-900/90',
          config.styles
        )}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Icon className={cn('h-5 w-5', config.iconStyles)} aria-hidden="true" />
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-semibold text-white">{toast.title}</p>
            {toast.message && (
              <p className="mt-1 text-sm text-gray-300">{toast.message}</p>
            )}
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              type="button"
              className="inline-flex rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              onClick={handleDismiss}
            >
              <span className="sr-only">Close</span>
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
}
