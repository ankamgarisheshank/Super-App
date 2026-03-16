// app/customer-app/src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 1.1 Auth, Onboarding, Location (1-12)
  { path: 'splash', loadChildren: () => import('./pages/auth/splash/splash.module').then(m => m.SplashModule) },
  { path: 'language-select', loadChildren: () => import('./pages/auth/language/language.module').then(m => m.LanguageModule) },
  { path: 'walkthrough', loadChildren: () => import('./pages/auth/walkthrough/walkthrough.module').then(m => m.WalkthroughModule) },
  { path: 'login-method', loadChildren: () => import('./pages/auth/login-method/login-method.module').then(m => m.LoginMethodModule) },
  { path: 'phone-login', loadChildren: () => import('./pages/auth/phone-login/phone-login.module').then(m => m.PhoneLoginModule) },
  { path: 'otp-verify', loadChildren: () => import('./pages/auth/otp-verify/otp-verify.module').then(m => m.OtpVerifyModule) },
  { path: 'email-login', loadChildren: () => import('./pages/auth/email-login/email-login.module').then(m => m.EmailLoginModule) },
  { path: 'register', loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'forgot-password', loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'location-permission', loadChildren: () => import('./pages/location/permission/permission.module').then(m => m.PermissionModule) },
  { path: 'pincode-entry', loadChildren: () => import('./pages/location/pincode/pincode.module').then(m => m.PincodeModule) },
  { path: 'serviceability-result', loadChildren: () => import('./pages/location/serviceability/serviceability.module').then(m => m.ServiceabilityModule) },

  // 1.2 Home & Global Navigation (13-27)
  { path: 'home-quick', loadChildren: () => import('./pages/home/quick-commerce/quick-commerce.module').then(m => m.QuickCommerceModule) },
  { path: 'home-ecom', loadChildren: () => import('./pages/home/ecom-tab/ecom-tab.module').then(m => m.EcomTabModule) },
  { path: 'category-grid-quick', loadChildren: () => import('./pages/home/category-grid-quick/category-grid-quick.module').then(m => m.CategoryGridQuickModule) },
  { path: 'category-grid-ecom', loadChildren: () => import('./pages/home/category-grid-ecom/category-grid-ecom.module').then(m => m.CategoryGridEcomModule) },
  { path: 'subcategory-listing', loadChildren: () => import('./pages/home/subcategory-listing/subcategory-listing.module').then(m => m.SubcategoryListingModule) },
  { path: 'search', loadChildren: () => import('./pages/search/global/global.module').then(m => m.GlobalModule) },
  { path: 'search-results-products', loadChildren: () => import('./pages/search/results-products/results-products.module').then(m => m.ResultsProductsModule) },
  { path: 'search-results-stores', loadChildren: () => import('./pages/search/results-stores/results-stores.module').then(m => m.ResultsStoresModule) },
  { path: 'search-suggestions', loadChildren: () => import('./pages/search/suggestions/suggestions.module').then(m => m.SuggestionsModule) },
  { path: 'deals', loadChildren: () => import('./pages/marketing/deals/deals.module').then(m => m.DealsModule) },
  { path: 'notifications', loadChildren: () => import('./pages/marketing/notifications/notifications.module').then(m => m.NotificationsModule) },
  { path: 'notification-detail', loadChildren: () => import('./pages/marketing/notification-detail/notification-detail.module').then(m => m.NotificationDetailModule) },
  { path: 'app-update', loadChildren: () => import('./pages/system/update/update.module').then(m => m.UpdateModule) },
  { path: 'maintenance', loadChildren: () => import('./pages/system/maintenance/maintenance.module').then(m => m.MaintenanceModule) },
  { path: 'no-service-region', loadChildren: () => import('./pages/system/no-service/no-service.module').then(m => m.NoServiceModule) },

  // 1.3 Product Discovery & Details (28-44)
  { path: 'listing-quick', loadChildren: () => import('./pages/products/listing-quick/listing-quick.module').then(m => m.ListingQuickModule) },
  { path: 'listing-ecom', loadChildren: () => import('./pages/products/listing-ecom/listing-ecom.module').then(m => m.ListingEcomModule) },
  { path: 'sort-options', loadChildren: () => import('./pages/products/sort-modal/sort-modal.module').then(m => m.SortModalModule) },
  { path: 'filters', loadChildren: () => import('./pages/products/filters/filters.module').then(m => m.FiltersModule) },
  { path: 'product-grocery', loadChildren: () => import('./pages/products/details-grocery/details-grocery.module').then(m => m.DetailsGroceryModule) },
  { path: 'product-fmcg', loadChildren: () => import('./pages/products/details-fmcg/details-fmcg.module').then(m => m.DetailsFmcgModule) },
  { path: 'product-electronics', loadChildren: () => import('./pages/products/details-electronics/details-electronics.module').then(m => m.DetailsElectronicsModule) },
  { path: 'product-fashion', loadChildren: () => import('./pages/products/details-fashion/details-fashion.module').then(m => m.DetailsFashionModule) },
  { path: 'product-reviews', loadChildren: () => import('./pages/products/reviews/reviews.module').then(m => m.ReviewsModule) },
  { path: 'product-qa', loadChildren: () => import('./pages/products/qa/qa.module').then(m => m.QaModule) },
  { path: 'brand-quick', loadChildren: () => import('./pages/products/brand-quick/brand-quick.module').then(m => m.BrandQuickModule) },
  { path: 'brand-ecom', loadChildren: () => import('./pages/products/brand-ecom/brand-ecom.module').then(m => m.BrandEcomModule) },
  { path: 'recently-viewed', loadChildren: () => import('./pages/products/recently-viewed/recently-viewed.module').then(m => m.RecentlyViewedModule) },
  { path: 'wishlist', loadChildren: () => import('./pages/products/wishlist/wishlist.module').then(m => m.WishlistModule) },
  { path: 'price-drop-alerts', loadChildren: () => import('./pages/products/price-alerts/price-alerts.module').then(m => m.PriceAlertsModule) },
  { path: 'stock-alternatives', loadChildren: () => import('./pages/products/alternatives/alternatives.module').then(m => m.AlternativesModule) },
  { path: 'recommendations', loadChildren: () => import('./pages/products/recommendations/recommendations.module').then(m => m.RecommendationsModule) },

  // 1.4 Cart, Checkout & Payments (45-62)
  { path: 'cart-quick', loadChildren: () => import('./pages/cart/quick/quick.module').then(m => m.QuickModule) },
  { path: 'cart-ecom', loadChildren: () => import('./pages/cart/ecom/ecom.module').then(m => m.EcomModule) },
  { path: 'cart-edit', loadChildren: () => import('./pages/cart/edit-modal/edit-modal.module').then(m => m.EditModalModule) },
  { path: 'apply-coupon', loadChildren: () => import('./pages/cart/coupons/coupons.module').then(m => m.CouponsModule) },
  { path: 'address-list', loadChildren: () => import('./pages/checkout/address-list/address-list.module').then(m => m.AddressListModule) },
  { path: 'address-edit', loadChildren: () => import('./pages/checkout/address-edit/address-edit.module').then(m => m.AddressEditModule) },
  { path: 'slot-instant', loadChildren: () => import('./pages/checkout/slot-instant/slot-instant.module').then(m => m.SlotInstantModule) },
  { path: 'slot-ecom', loadChildren: () => import('./pages/checkout/slot-ecom/slot-ecom.module').then(m => m.SlotEcomModule) },
  { path: 'summary-quick', loadChildren: () => import('./pages/checkout/summary-quick/summary-quick.module').then(m => m.SummaryQuickModule) },
  { path: 'summary-ecom', loadChildren: () => import('./pages/checkout/summary-ecom/summary-ecom.module').then(m => m.SummaryEcomModule) },
  { path: 'payment-methods', loadChildren: () => import('./pages/checkout/payment-select/payment-select.module').then(m => m.PaymentSelectModule) },
  { path: 'upi-pay', loadChildren: () => import('./pages/checkout/upi-pay/upi-pay.module').then(m => m.UpiPayModule) },
  { path: 'card-pay', loadChildren: () => import('./pages/checkout/card-pay/card-pay.module').then(m => m.CardPayModule) },
  { path: 'wallet-topup', loadChildren: () => import('./pages/checkout/wallet-topup/wallet-topup.module').then(m => m.WalletTopupModule) },
  { path: 'order-confirmation', loadChildren: () => import('./pages/checkout/confirmation/confirmation.module').then(m => m.ConfirmationModule) },
  { path: 'payment-failed', loadChildren: () => import('./pages/checkout/failed/failed.module').then(m => m.FailedModule) },
  { path: 'split-cart', loadChildren: () => import('./pages/checkout/split-cart/split-cart.module').then(m => m.SplitCartModule) },
  { path: 'mov-upsell', loadChildren: () => import('./pages/checkout/upsell/upsell.module').then(m => m.UpsellModule) },

  // 1.5 Order Tracking, History & Returns (63-77)
  { path: 'track-live-instant', loadChildren: () => import('./pages/orders/tracking-live/tracking-live.module').then(m => m.TrackingLiveModule) },
  { path: 'rider-live-map', loadChildren: () => import('./pages/orders/rider-map/rider-map.module').then(m => m.RiderMapModule) },
  { path: 'order-status-ecom', loadChildren: () => import('./pages/orders/status-ecom/status-ecom.module').then(m => m.StatusEcomModule) },
  { path: 'shipment-detail', loadChildren: () => import('./pages/orders/shipment-detail/shipment-detail.module').then(m => m.ShipmentDetailModule) },
  { path: 'orders-list-quick', loadChildren: () => import('./pages/orders/list-quick/list-quick.module').then(m => m.ListQuickModule) },
  { path: 'orders-list-ecom', loadChildren: () => import('./pages/orders/list-ecom/list-ecom.module').then(m => m.ListEcomModule) },
  { path: 'order-detail-instant', loadChildren: () => import('./pages/orders/detail-instant/detail-instant.module').then(m => m.DetailInstantModule) },
  { path: 'order-detail-ecom', loadChildren: () => import('./pages/orders/detail-ecom/detail-ecom.module').then(m => m.DetailEcomModule) },
  { path: 'reorder', loadChildren: () => import('./pages/orders/reorder/reorder.module').then(m => m.ReorderModule) },
  { path: 'rate-rider', loadChildren: () => import('./pages/orders/rate-rider/rate-rider.module').then(m => m.RateRiderModule) },
  { path: 'rate-product', loadChildren: () => import('./pages/orders/rate-product/rate-product.module').then(m => m.RateProductModule) },
  { path: 'rate-store', loadChildren: () => import('./pages/orders/rate-store/rate-store.module').then(m => m.RateStoreModule) },
  { path: 'return-request', loadChildren: () => import('./pages/orders/return-request/return-request.module').then(m => m.ReturnRequestModule) },
  { path: 'return-status', loadChildren: () => import('./pages/orders/return-status/return-status.module').then(m => m.ReturnStatusModule) },
  { path: 'invoice-view', loadChildren: () => import('./pages/orders/invoice/invoice.module').then(m => m.InvoiceModule) },

  // 1.6 Profile, Wallet, Support, Settings (78-92)
  { path: 'profile-overview', loadChildren: () => import('./pages/profile/overview/overview.module').then(m => m.OverviewModule) },
  { path: 'personal-info-edit', loadChildren: () => import('./pages/profile/edit/edit.module').then(m => m.EditModule) },
  { path: 'wallet-home', loadChildren: () => import('./pages/profile/wallet/wallet.module').then(m => m.WalletModule) },
  { path: 'wallet-transactions', loadChildren: () => import('./pages/profile/wallet-transactions/wallet-transactions.module').then(m => m.WalletTransactionsModule) },
  { path: 'saved-cards-upi', loadChildren: () => import('./pages/profile/saved-methods/saved-methods.module').then(m => m.SavedMethodsModule) },
  { path: 'address-manager', loadChildren: () => import('./pages/profile/address-manager/address-manager.module').then(m => m.AddressManagerModule) },
  { path: 'subscription-prime', loadChildren: () => import('./pages/profile/subscription/subscription.module').then(m => m.SubscriptionModule) },
  { path: 'offers-rewards', loadChildren: () => import('./pages/profile/rewards/rewards.module').then(m => m.RewardsModule) },
  { path: 'support-home', loadChildren: () => import('./pages/profile/support-home/support-home.module').then(m => m.SupportHomeModule) },
  { path: 'chat-support', loadChildren: () => import('./pages/profile/chat-support/chat-support.module').then(m => m.ChatSupportModule) },
  { path: 'call-support', loadChildren: () => import('./pages/profile/call-support/call-support.module').then(m => m.CallSupportModule) },
  { path: 'help-article', loadChildren: () => import('./pages/profile/help-article/help-article.module').then(m => m.HelpArticleModule) },
  { path: 'app-settings', loadChildren: () => import('./pages/profile/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'legal-privacy', loadChildren: () => import('./pages/profile/legal/legal.module').then(m => m.LegalModule) },
  { path: 'logout', loadChildren: () => import('./pages/profile/logout/logout.module').then(m => m.LogoutModule) },

  { path: '', redirectTo: '/splash', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
