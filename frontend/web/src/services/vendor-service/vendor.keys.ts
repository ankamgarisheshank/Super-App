export const vendorKeys = {
  all: ['vendor'] as const,
  orders: () => [...vendorKeys.all, 'orders'] as const,
  orderQueue: () => [...vendorKeys.orders(), 'queue'] as const,
  menu: () => [...vendorKeys.all, 'menu'] as const,
  analytics: () => [...vendorKeys.all, 'analytics'] as const,
};
