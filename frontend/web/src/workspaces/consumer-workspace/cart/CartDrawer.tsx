import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useCartStore, useUIStore } from '@store/index';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@shared/components/atoms/Button';
import { useNavigate } from 'react-router-dom';

export function CartDrawer() {
  const isCartOpen = useUIStore((s) => s.isCartOpen);
  const toggleCart = useUIStore((s) => s.toggleCart);
  
  const items = useCartStore((s) => s.items);
  const restaurantName = useCartStore((s) => s.restaurantName);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const getSubtotal = useCartStore((s) => s.getSubtotal);
  
  const navigate = useNavigate();

  const handleCheckout = () => {
    toggleCart(false);
    navigate('/app/checkout');
  };

  return (
    <Transition.Root show={isCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => toggleCart(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-gray-900 border-l border-gray-800 shadow-2xl">
                    <div className="flex items-start justify-between px-6 py-5 border-b border-gray-800">
                      <Dialog.Title className="text-lg font-bold text-white flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-blue-500" />
                        Your Order
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-300"
                          onClick={() => toggleCart(false)}
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 py-4">
                      {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                          <ShoppingBag className="h-16 w-16 opacity-20" />
                          <p className="text-lg font-medium text-gray-400">Your cart is empty</p>
                          <p className="text-sm text-center px-4">Looks like you haven't added anything to your cart yet.</p>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Ordering From</p>
                            <p className="text-base font-bold text-white">{restaurantName}</p>
                          </div>
                          
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-800">
                              {items.map((item) => (
                                <li key={item.id} className="flex py-6">
                                  {item.imageUrl && (
                                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-gray-800">
                                      <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover object-center" />
                                    </div>
                                  )}

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-white">
                                        <h3>{item.name}</h3>
                                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden bg-gray-950">
                                        <button 
                                          className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                          <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="px-3 text-white font-medium">{item.quantity}</span>
                                        <button 
                                          className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                          <Plus className="w-4 h-4" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {items.length > 0 && (
                      <div className="border-t border-gray-800 bg-gray-900 px-6 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-white mb-4">
                          <p>Subtotal</p>
                          <p>${getSubtotal().toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-400 mb-6">Taxes and delivery calculated at checkout.</p>
                        <Button className="w-full h-12 text-base font-bold" onClick={handleCheckout}>
                          Proceed to Checkout
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
