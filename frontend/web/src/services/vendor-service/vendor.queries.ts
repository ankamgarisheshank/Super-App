import { useQuery } from '@tanstack/react-query';
import { VendorAPI } from './vendor.api';
import { vendorKeys } from './vendor.keys';

export function useActiveOrders() {
  return useQuery({
    queryKey: vendorKeys.orderQueue(),
    queryFn: VendorAPI.getActiveOrders,
    staleTime: 30 * 1000,
  });
}

export function useVendorAnalytics() {
  return useQuery({
    queryKey: vendorKeys.analytics(),
    queryFn: VendorAPI.getAnalytics,
    staleTime: 5 * 60 * 1000, // 5 mins
  });
}
