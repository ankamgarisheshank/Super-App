export const orderKeys = {
  all: ['orders'] as const,
  history: () => [...orderKeys.all, 'history'] as const,
  active: () => [...orderKeys.all, 'active'] as const,
  detail: (id: string) => [...orderKeys.all, 'detail', id] as const,
};
