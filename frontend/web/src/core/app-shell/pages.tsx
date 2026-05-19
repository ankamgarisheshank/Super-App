/**
 * Placeholder workspace dashboard pages.
 * Each workspace will get its own rich implementation later.
 */

export function ConsumerDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Consumer Dashboard
      </h1>
      <p className="text-gray-400">Welcome to your personal dashboard. Explore food, shopping, rides, and more.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {['Orders', 'Wallet', 'Rewards', 'Support'].map((item) => (
          <div key={item} className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-gray-700 transition-colors">
            <h3 className="font-semibold text-lg">{item}</h3>
            <p className="text-sm text-gray-500 mt-1">Manage your {item.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Admin Dashboard
      </h1>
      <p className="text-gray-400">Platform overview and management controls.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Users', value: '24,521', color: 'from-blue-500 to-cyan-500' },
          { label: 'Active Orders', value: '1,342', color: 'from-green-500 to-emerald-500' },
          { label: 'Revenue (Today)', value: '₹4,52,000', color: 'from-purple-500 to-pink-500' },
          { label: 'System Health', value: '99.9%', color: 'from-amber-500 to-orange-500' },
        ].map((stat) => (
          <div key={stat.label} className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800">
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className={`text-2xl font-bold mt-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VendorDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
        Vendor Dashboard
      </h1>
      <p className="text-gray-400">Manage your products, orders, and analytics.</p>
    </div>
  );
}

export function DeliveryDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
        Delivery Dashboard
      </h1>
      <p className="text-gray-400">View active deliveries, earnings, and route maps.</p>
    </div>
  );
}

export function PartnerDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
        Partner Dashboard
      </h1>
      <p className="text-gray-400">Track performance, settlements, and analytics.</p>
    </div>
  );
}

export function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="text-center space-y-4">
        <div className="text-7xl">🚫</div>
        <h1 className="text-3xl font-bold text-red-400">403 — Access Denied</h1>
        <p className="text-gray-400 max-w-md">
          You don&apos;t have permission to access this page. Contact your administrator if you believe this is an error.
        </p>
        <a href="/" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors font-medium">
          Go Home
        </a>
      </div>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="text-center space-y-4">
        <div className="text-7xl">🔍</div>
        <h1 className="text-3xl font-bold text-gray-300">404 — Page Not Found</h1>
        <p className="text-gray-500">The page you&apos;re looking for doesn&apos;t exist.</p>
        <a href="/" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors font-medium">
          Back to Home
        </a>
      </div>
    </div>
  );
}
