import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'food', pathMatch: 'full' },
  { path: 'food', loadChildren: () => import('./features/food-delivery/food-delivery-module').then(m => m.FoodDeliveryModule) },
  { path: 'quick', loadChildren: () => import('./features/quick-commerce/quick-commerce-module').then(m => m.QuickCommerceModule) },
  { path: 'ecommerce', loadChildren: () => import('./features/ecommerce/ecommerce-module').then(m => m.EcommerceModule) },
  { path: 'services', loadChildren: () => import('./features/services/services-module').then(m => m.ServicesModule) },
  { path: 'admin', loadChildren: () => import('./features/admin/admin-module').then(m => m.AdminModule) },
  { path: 'partner', loadChildren: () => import('./features/partner-portal/partner-portal-module').then(m => m.PartnerPortalModule) },
  { path: 'developer', loadChildren: () => import('./features/developer-portal/developer-portal-module').then(m => m.DeveloperPortalModule) },
];
