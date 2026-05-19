/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Login Page
 * ─────────────────────────────────────────────────────────────
 */

import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuthStore } from '@store/index';
import { ROUTES } from '@shared/constants';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((s) => s.login);
  const isLoading = useAuthStore((s) => s.isLoading);
  const error = useAuthStore((s) => s.error);
  const clearError = useAuthStore((s) => s.clearError);
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || ROUTES.CONSUMER.DASHBOARD;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch {
      // Error is handled by the store
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white">Welcome back</h2>
        <p className="text-gray-400 mt-2">Sign in to your Super-App account</p>
      </div>

      {error && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="login-email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="login-password" className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="••••••••"
          />
        </div>

        <div className="flex justify-between items-center">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded bg-gray-800 border-gray-600" />
            <span className="text-sm text-gray-400">Remember me</span>
          </label>
          <Link to={ROUTES.FORGOT_PASSWORD} className="text-sm text-blue-400 hover:text-blue-300">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Signing in...
            </span>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      <p className="text-center text-gray-400 text-sm">
        Don&apos;t have an account?{' '}
        <Link to={ROUTES.REGISTER} className="text-blue-400 hover:text-blue-300 font-medium">
          Create account
        </Link>
      </p>
    </div>
  );
}
