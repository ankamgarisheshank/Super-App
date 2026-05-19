export const deliveryKeys = {
  all: ['deliveries'] as const,
  lists: () => [...deliveryKeys.all, 'list'] as const,
  list: (filters: Record<string, any>) => [...deliveryKeys.lists(), { filters }] as const,
  details: () => [...deliveryKeys.all, 'detail'] as const,
  detail: (id: string) => [...deliveryKeys.details(), id] as const,
  activeQueue: () => [...deliveryKeys.all, 'queue'] as const,
  drivers: () => [...deliveryKeys.all, 'drivers'] as const,
};
