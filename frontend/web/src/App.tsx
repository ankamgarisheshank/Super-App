/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Root Application Component
 * ─────────────────────────────────────────────────────────────
 */

import { AppProviders } from '@core/providers';
import { AppRouter } from '@core/routing';

export default function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}
