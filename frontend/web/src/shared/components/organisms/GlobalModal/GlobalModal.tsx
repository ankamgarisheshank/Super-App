import { Fragment, Suspense } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useUIStore } from '@store/index';
import { MODAL_REGISTRY } from './ModalRegistry';
import { Skeleton } from '../../atoms/Skeleton';

export function GlobalModal() {
  const activeModal = useUIStore((s) => s.activeModal);
  const closeModal = useUIStore((s) => s.closeModal);
  const modalData = useUIStore((s) => s.modalData);

  const ModalComponent = activeModal ? MODAL_REGISTRY[activeModal] : null;

  return (
    <Transition.Root show={!!activeModal} as={Fragment}>
      <Dialog as="div" className="relative z-[1400]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                {ModalComponent && (
                  <Suspense fallback={<div className="p-6"><Skeleton className="h-40 w-full" /></div>}>
                    <ModalComponent data={modalData} onClose={closeModal} />
                  </Suspense>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
