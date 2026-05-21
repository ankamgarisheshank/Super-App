/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Global Error Boundary
 * ─────────────────────────────────────────────────────────────
 * Catches unhandled React errors to prevent white-screen crashes.
 * Shows a user-friendly fallback UI with recovery options.
 */

import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });

    // TODO: Send to observability service (Sentry, DataDog, etc.)
    console.error('[ErrorBoundary] Uncaught error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-8">
          <div className="max-w-lg w-full text-center space-y-6">
            <div className="text-6xl">💥</div>
            <h1 className="text-2xl font-bold text-red-400">
              Something went wrong
            </h1>
            <p className="text-gray-400">
              An unexpected error occurred. Our team has been notified.
            </p>
            {import.meta.env.DEV && this.state.error && (
              <details className="text-left bg-gray-900 rounded-lg p-4 text-sm text-gray-300 overflow-auto max-h-48">
                <summary className="cursor-pointer text-red-300 font-mono">
                  {this.state.error.message}
                </summary>
                <pre className="mt-2 text-xs whitespace-pre-wrap">
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => (window.location.href = '/')}
                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
