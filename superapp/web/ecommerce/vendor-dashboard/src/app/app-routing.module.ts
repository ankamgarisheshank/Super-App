// web/ecommerce/vendor-dashboard/src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 2.1 Dashboard & Overview (93-98)
  { path: 'home', loadChildren: () => import('./pages/dashboard/home/home.module').then(m => m.HomeModule) },
  { path: 'operational-health', loadChildren: () => import('./pages/dashboard/health/health.module').then(m => m.HealthModule) },
  { path: 'demand-heatmap', loadChildren: () => import('./pages/dashboard/heatmap/heatmap.module').then(m => m.HeatmapModule) },
  { path: 'alerts-center', loadChildren: () => import('./pages/dashboard/alerts/alerts.module').then(m => m.AlertsModule) },
  { path: 'shift-status', loadChildren: () => import('./pages/dashboard/shift/shift.module').then(m => m.ShiftModule) },
  { path: 'store-settings', loadChildren: () => import('./pages/settings/store/store.module').then(m => m.StoreModule) },
  
  // 2.2 Inventory Management (99-110)
  { path: 'inventory-catalog', loadChildren: () => import('./pages/inventory/catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'inventory-detail', loadChildren: () => import('./pages/inventory/detail/detail.module').then(m => m.DetailModule) },
  { path: 'stock-adjustments', loadChildren: () => import('./pages/inventory/adjust/adjust.module').then(m => m.AdjustModule) },
  { path: 'stock-inbound', loadChildren: () => import('./pages/inventory/inbound/inbound.module').then(m => m.InboundModule) },
  { path: 'expiry-management', loadChildren: () => import('./pages/inventory/expiry/expiry.module').then(m => m.ExpiryModule) },
  { path: 'category-management', loadChildren: () => import('./pages/inventory/categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'bulk-upload', loadChildren: () => import('./pages/inventory/bulk/bulk.module').then(m => m.BulkModule) },
  { path: 'stock-alerts-list', loadChildren: () => import('./pages/inventory/alerts/alerts.module').then(m => m.AlertsModule) },
  { path: 'purchase-orders', loadChildren: () => import('./pages/inventory/po-list/po-list.module').then(m => m.PoListModule) },
  { path: 'po-detail', loadChildren: () => import('./pages/inventory/po-detail/po-detail.module').then(m => m.PoDetailModule) },
  { path: 'unit-conversion', loadChildren: () => import('./pages/inventory/conversion/conversion.module').then(m => m.ConversionModule) },
  { path: 'pricing-promotions', loadChildren: () => import('./pages/inventory/pricing/pricing.module').then(m => m.PricingModule) },

  // 2.3 Order Operations (111-117)
  { path: 'store-orders', loadChildren: () => import('./pages/operations/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'order-picking', loadChildren: () => import('./pages/operations/picking/picking.module').then(m => m.PickingModule) },
  { path: 'replacement-tool', loadChildren: () => import('./pages/operations/replacement/replacement.module').then(m => m.ReplacementModule) },
  { path: 'order-packing', loadChildren: () => import('./pages/operations/packing/packing.module').then(m => m.PackingModule) },
  { path: 'rider-handover', loadChildren: () => import('./pages/operations/handover/handover.module').then(m => m.HandoverModule) },
  { path: 'order-exceptions', loadChildren: () => import('./pages/operations/exceptions/exceptions.module').then(m => m.ExceptionsModule) },
  { path: 'store-returns', loadChildren: () => import('./pages/operations/returns/returns.module').then(m => m.ReturnsModule) },

  // 2.4 Analytics & Staff (118-122)
  { path: 'analytics-overview', loadChildren: () => import('./pages/analytics/overview/overview.module').then(m => m.OverviewModule) },
  { path: 'category-performance', loadChildren: () => import('./pages/analytics/performance/performance.module').then(m => m.PerformanceModule) },
  { path: 'staff-management', loadChildren: () => import('./pages/analytics/staff/staff.module').then(m => m.StaffModule) },
  { path: 'staff-performance', loadChildren: () => import('./pages/analytics/staff-perf/staff-perf.module').then(m => m.StaffPerfModule) },
  { path: 'audit-log', loadChildren: () => import('./pages/analytics/audit/audit.module').then(m => m.AuditModule) },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
