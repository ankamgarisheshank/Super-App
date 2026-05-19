import { useQuery } from '@tanstack/react-query';
import { ConsumerAPI } from './consumer.api';
import { consumerKeys } from './consumer.keys';

export function useConsumerFeed() {
  return useQuery({
    queryKey: consumerKeys.feed(),
    queryFn: ConsumerAPI.getHomeFeed,
    staleTime: 5 * 60 * 1000,
  });
}
