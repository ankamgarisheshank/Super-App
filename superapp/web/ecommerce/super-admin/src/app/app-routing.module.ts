// web/ecommerce/super-admin/src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 4. Admin Web Panel (148-171)
  { path: 'global-dashboard', loadChildren: () => import('./pages/dashboard/global/global.module').then(m => m.GlobalModule) },
  { path: 'customer-management', loadChildren: () => import('./pages/management/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'rider-management', loadChildren: () => import('./pages/management/riders/riders.module').then(m => m.RidersModule) },
  { path: 'dark-store-management', loadChildren: () => import('./pages/management/dark-stores/dark-stores.module').then(m => m.DarkStoresModule) },
  { path: 'vendor-seller-management', loadChildren: () => import('./pages/management/vendors/vendors.module').then(m => m.VendorsModule) },
  { path: 'catalog-management', loadChildren: () => import('./pages/catalog/global/global.module').then(m => m.GlobalModule) },
  { path: 'pricing-rules', loadChildren: () => import('./pages/catalog/pricing/pricing.module').then(m => m.PricingModule) },
  { path: 'promotions-management', loadChildren: () => import('./pages/catalog/promotions/promotions.module').then(m => m.PromotionsModule) },
  { path: 'coupon-engine', loadChildren: () => import('./pages/catalog/coupons/coupons.module').then(m => m.CouponsModule) },
  { path: 'order-management-instant', loadChildren: () => import('./pages/orders/instant/instant.module').then(m => m.InstantModule) },
  { path: 'order-management-ecom', loadChildren: () => import('./pages/orders/ecom/ecom.module').then(m => m.EcomModule) },
  { path: 'return-refund-console', loadChildren: () => import('./pages/orders/returns/returns.module').then(m => m.ReturnsModule) },
  { path: 'payments-reconciliation', loadChildren: () => import('./pages/orders/payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'inventory-snapshot', loadChildren: () => import('./pages/inventory/snapshot/snapshot.module').then(m => m.SnapshotModule) },
  { path: 'serviceability-sla-config', loadChildren: () => import('./pages/config/serviceability/serviceability.module').then(m => m.ServiceabilityModule) },
  { path: 'customer-analytics', loadChildren: () => import('./pages/config/analytics-customer/analytics-customer.module').then(m => m.AnalyticsCustomerModule) },
  { path: 'operations-analytics', loadChildren: () => import('./pages/config/analytics-ops/analytics-ops.module').then(m => m.AnalyticsOpsModule) },
  { path: 'fraud-monitoring', loadChildren: () => import('./pages/config/fraud/fraud.module').then(m => m.FraudModule) },
  { path: 'content-management', loadChildren: () => import('./pages/config/content/content.module').then(m => m.ContentModule) },
  { path: 'support-ticket-console', loadChildren: () => import('./pages/config/support/support.module').then(m => m.SupportModule) },
  { path: 'role-permission-management', loadChildren: () => import('./pages/config/roles/roles.module').then(m => m.RolesModule) },
  { path: 'system-config', loadChildren: () => import('./pages/config/system/system.module').then(m => m.SystemModule) },
  { path: 'audit-logs', loadChildren: () => import('./pages/config/audit/audit.module').then(m => m.AuditModule) },
  { path: 'developer-tools-overview', loadChildren: () => import('./pages/config/dev-tools/dev-tools.module').then(m => m.DevToolsModule) },

  { path: '', redirectTo: '/global-dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
