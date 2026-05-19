import { useQuery } from '@tanstack/react-query';
import { DeliveryAPI } from './delivery.api';
import { deliveryKeys } from './delivery.keys';

export function useActiveDeliveries() {
  return useQuery({
    queryKey: deliveryKeys.activeQueue(),
    queryFn: DeliveryAPI.getActiveDeliveries,
    staleTime: 60 * 1000,
  });
}

export function useAvailableDrivers() {
  return useQuery({
    queryKey: deliveryKeys.drivers(),
    queryFn: DeliveryAPI.getAvailableDrivers,
    staleTime: 30 * 1000,
  });
}
