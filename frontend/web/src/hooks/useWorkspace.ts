/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ useWorkspace Hook
 * ─────────────────────────────────────────────────────────────
 * Determines the current workspace based on URL path.
 * Used by layouts and navigation to render workspace-specific UI.
 */

import { useLocation } from 'react-router-dom';

export type WorkspaceType =
  | 'consumer'
  | 'admin'
  | 'vendor'
  | 'delivery'
  | 'partner'
  | 'food'
  | 'ecommerce'
  | 'ride'
  | 'healthcare'
  | 'unknown';

const WORKSPACE_MAP: Record<string, WorkspaceType> = {
  '/app': 'consumer',
  '/admin': 'admin',
  '/vendor': 'vendor',
  '/delivery': 'delivery',
  '/partner': 'partner',
  '/food': 'food',
  '/shop': 'ecommerce',
  '/ride': 'ride',
  '/health': 'healthcare',
};

export function useWorkspace(): WorkspaceType {
  const { pathname } = useLocation();

  for (const [prefix, workspace] of Object.entries(WORKSPACE_MAP)) {
    if (pathname.startsWith(prefix)) {
      return workspace;
    }
  }

  return 'unknown';
}
