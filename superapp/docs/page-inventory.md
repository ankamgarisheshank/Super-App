# SuperApp Ecommerce Page Inventory & Routing Map

This document maps the UI pages to their respective platforms and routes.

## 1. Customer App (Mobile) - ~70 Pages
- **Auth & Onboarding**: `/splash`, `/language`, `/walkthrough`, `/login`, `/register`, `/otp-verify`, `/location-setup`.
- **Home**: `/home`, `/home/ecom`, `/categories-quick`, `/categories-ecom`.
- **Search**: `/search`, `/search/results-products`, `/search/results-stores`.
- **Discovery**: `/products/listing`, `/products/details/:id`, `/brand/:id`, `/wishlist`.
- **Cart & Checkout**: `/cart`, `/checkout/summary`, `/checkout/address`, `/checkout/slot`, `/payment/select`, `/payment/upi`.
- **Tracking**: `/orders/track-live/:id`, `/orders/history`, `/orders/details/:id`.

## 2. Dark Store / Vendor Panel (Web) - ~30 Pages
- **Dashboard**: `/home`, `/operational-health`, `/demand-heatmap`.
- **Inventory**: `/inventory/catalog`, `/inventory/stock-adjust`, `/inventory/inbound-grn`, `/inventory/expiry-mgmt`.
- **Operations**: `/orders/picking`, `/orders/packing`, `/orders/handover`, `/orders/exceptions`.

## 3. Rider App (Mobile) - ~25 Pages
- **Home**: `/dashboard`, `/availability`.
- **Flow**: `/request/:id`, `/pickup-navigation`, `/pickup-verify`, `/delivery-navigation`, `/delivery-verify`.
- **Earnings**: `/earnings`, `/payout-history`, `/incentives`.

## 4. Admin Web (Global) - ~25 Pages
- **Global View**: `/dashboard`, `/analytics-customer`.
- **Management**: `/customers`, `/riders`, `/dark-stores`, `/vendors`.
- **Catalog**: `/catalog-mgmt`, `/pricing-rules`, `/coupons`.

## 5. Developer Backoffice (Internal) - ~10 Pages
- **Monitor**: `/health`, `/logs`, `/queues`.
- **Tools**: `/api-explorer`, `/db-explorer`, `/feature-flags`.
