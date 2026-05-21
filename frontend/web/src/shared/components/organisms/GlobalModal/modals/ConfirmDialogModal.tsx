import { Dialog } from '@headlessui/react';
import { AlertTriangle, Info } from 'lucide-react';
import { Button } from '../../../atoms/Button';
import { cn } from '@shared/utils';

export interface ConfirmDialogData {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'info';
  onConfirm: () => void | Promise<void>;
}

export default function ConfirmDialogModal({
  data,
  onClose,
}: {
  data: unknown;
  onClose: () => void;
}) {
  const {
    title,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    variant = 'danger',
    onConfirm,
  } = data as ConfirmDialogData;

  const handleConfirm = async () => {
    await onConfirm();
    onClose();
  };

  return (
    <div className="p-6">
      <div className="sm:flex sm:items-start">
        <div
          className={cn(
            'mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10',
            variant === 'danger' ? 'bg-red-500/10' : 'bg-blue-500/10'
          )}
        >
          {variant === 'danger' ? (
            <AlertTriangle className="h-6 w-6 text-red-500" aria-hidden="true" />
          ) : (
            <Info className="h-6 w-6 text-blue-500" aria-hidden="true" />
          )}
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-white">
            {title}
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-400">{message}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 sm:flex sm:flex-row-reverse sm:gap-3">
        <Button
          variant={variant === 'danger' ? 'destructive' : 'default'}
          onClick={handleConfirm}
          className="w-full sm:w-auto"
        >
          {confirmText}
        </Button>
        <Button
          variant="outline"
          onClick={onClose}
          className="mt-3 w-full sm:mt-0 sm:w-auto"
        >
          {cancelText}
        </Button>
      </div>
    </div>
  );
}
