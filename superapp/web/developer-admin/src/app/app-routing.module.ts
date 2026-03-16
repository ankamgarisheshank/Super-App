// web/developer-admin/src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 5. Developer / Internal Backoffice (172-181)
  { path: 'service-health', loadChildren: () => import('./pages/health/health.module').then(m => m.HealthModule) },
  { path: 'log-viewer', loadChildren: () => import('./pages/logs/logs.module').then(m => m.LogsModule) },
  { path: 'job-queue-monitor', loadChildren: () => import('./pages/queues/queues.module').then(m => m.QueuesModule) },
  { path: 'config-feature-flags', loadChildren: () => import('./pages/flags/flags.module').then(m => m.FlagsModule) },
  { path: 'api-explorer', loadChildren: () => import('./pages/api-explorer/api-explorer.module').then(m => m.ApiExplorerModule) },
  { path: 'db-collections-explorer', loadChildren: () => import('./pages/db-explorer/db-explorer.module').then(m => m.DbExplorerModule) },
  { path: 'search-index-monitor', loadChildren: () => import('./pages/search-monitor/search-monitor.module').then(m => m.SearchMonitorModule) },
  { path: 'cache-rate-limit-monitor', loadChildren: () => import('./pages/cache-monitor/cache-monitor.module').then(m => m.CacheMonitorModule) },
  { path: 'release-management', loadChildren: () => import('./pages/releases/releases.module').then(m => m.ReleasesModule) },
  { path: 'alert-routing-settings', loadChildren: () => import('./pages/alerts/alerts.module').then(m => m.AlertsModule) },

  { path: '', redirectTo: '/service-health', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
