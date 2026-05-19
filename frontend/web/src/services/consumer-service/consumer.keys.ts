export const consumerKeys = {
  all: ['consumer'] as const,
  feed: () => [...consumerKeys.all, 'feed'] as const,
  restaurants: () => [...consumerKeys.all, 'restaurants'] as const,
  restaurantDetail: (id: string) => [...consumerKeys.restaurants(), id] as const,
};
