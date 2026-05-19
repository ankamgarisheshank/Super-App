/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Auth Layout
 * ─────────────────────────────────────────────────────────────
 * Clean, centered layout for login/register/forgot-password.
 */

import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Left: Branding Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="relative z-10 flex flex-col justify-center p-16">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-xl mb-8">
            SA
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Super-App
          </h1>
          <p className="text-xl text-gray-300 max-w-md">
            Enterprise platform powering food delivery, e-commerce, rides, healthcare & more — all in one place.
          </p>
          <div className="mt-12 flex gap-4">
            {['Food', 'Shop', 'Ride', 'Health'].map((label) => (
              <div
                key={label}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
