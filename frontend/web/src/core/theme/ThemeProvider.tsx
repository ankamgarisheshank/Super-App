/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ Theme Provider
 * ─────────────────────────────────────────────────────────────
 * Manages dark/light/system theme. Applies theme class to <html>
 * and syncs with OS preference when set to 'system'.
 */

import { useEffect } from 'react';
import { useUIStore } from '@store/index';
import type { ThemeMode } from '@shared/types';

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;

  if (theme === 'system') {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.classList.toggle('dark', systemDark);
  } else {
    root.classList.toggle('dark', theme === 'dark');
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useUIStore((s) => s.theme);

  useEffect(() => {
    applyTheme(theme);

    // Listen for OS theme changes when set to 'system'
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => applyTheme('system');
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [theme]);

  return <>{children}</>;
}
