// app/delivery-partner-app/src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 3. Delivery Rider App (123-147)
  { path: 'splash', loadChildren: () => import('./pages/auth/splash/splash.module').then(m => m.SplashModule) },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/home/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'availability', loadChildren: () => import('./pages/auth/availability/availability.module').then(m => m.AvailabilityModule) },
  
  // Delivery Flow
  { path: 'incoming-request', loadChildren: () => import('./pages/delivery/incoming/incoming.module').then(m => m.IncomingModule) },
  { path: 'request-details', loadChildren: () => import('./pages/delivery/details/details.module').then(m => m.DetailsModule) },
  { path: 'pickup-navigation', loadChildren: () => import('./pages/delivery/navigation-pickup/navigation-pickup.module').then(m => m.NavigationPickupModule) },
  { path: 'pickup-verification', loadChildren: () => import('./pages/delivery/verify-pickup/verify-pickup.module').then(m => m.VerifyPickupModule) },
  { path: 'item-shortage', loadChildren: () => import('./pages/delivery/shortage/shortage.module').then(m => m.ShortageModule) },
  { path: 'customer-navigation', loadChildren: () => import('./pages/delivery/navigation-customer/navigation-customer.module').then(m => m.NavigationCustomerModule) },
  { path: 'call-customer', loadChildren: () => import('./pages/delivery/call/call.module').then(m => m.CallModule) },
  { path: 'chat-customer', loadChildren: () => import('./pages/delivery/chat/chat.module').then(m => m.ChatModule) },
  { path: 'otp-verification', loadChildren: () => import('./pages/delivery/verify-otp/verify-otp.module').then(m => m.VerifyOtpModule) },
  { path: 'delivery-proof', loadChildren: () => import('./pages/delivery/proof/proof.module').then(m => m.ProofModule) },
  { path: 'mark-delivered', loadChildren: () => import('./pages/delivery/complete/complete.module').then(m => m.CompleteModule) },
  { path: 'delivery-issue', loadChildren: () => import('./pages/delivery/issue/issue.module').then(m => m.IssueModule) },
  { path: 'multi-order-batch', loadChildren: () => import('./pages/delivery/batch/batch.module').then(m => m.BatchModule) },
  
  // Account & Earnings
  { path: 'earnings-home', loadChildren: () => import('./pages/account/earnings/earnings.module').then(m => m.EarningsModule) },
  { path: 'earnings-detail', loadChildren: () => import('./pages/account/earnings/earnings.module').then(m => m.EarningsModule) },
  { path: 'payouts-bank', loadChildren: () => import('./pages/account/payouts/payouts.module').then(m => m.PayoutsModule) },
  { path: 'rider-profile', loadChildren: () => import('./pages/account/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'documents-compliance', loadChildren: () => import('./pages/account/documents/documents.module').then(m => m.DocumentsModule) },
  { path: 'app-settings', loadChildren: () => import('./pages/account/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'rider-support', loadChildren: () => import('./pages/support/help/help.module').then(m => m.HelpModule) },
  { path: 'safety-incidents', loadChildren: () => import('./pages/support/safety/safety.module').then(m => m.SafetyModule) },
  { path: 'logout-summary', loadChildren: () => import('./pages/support/logout-summary/logout-summary.module').then(m => m.LogoutSummaryModule) },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
