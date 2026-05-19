/**
 * ─────────────────────────────────────────────────────────────
 * Super-App │ UI Store (Zustand)
 * ─────────────────────────────────────────────────────────────
 * Manages global UI state: sidebar, theme, toasts, modals.
 */

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { ThemeMode, Toast } from '@shared/types';
import { generateId } from '@shared/utils';

interface UIState {
  // Theme
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;

  // Sidebar
  isSidebarOpen: boolean;
  isSidebarCollapsed: boolean;
  isCartOpen: boolean;
  toggleSidebar: () => void;
  collapseSidebar: () => void;
  toggleCart: (isOpen?: boolean) => void;

  // Toasts
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;

  // Modal
  activeModal: string | null;
  modalData: unknown;
  openModal: (id: string, data?: unknown) => void;
  closeModal: () => void;

  // Loading overlay
  isGlobalLoading: boolean;
  setGlobalLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    persist(
      (set, get) => ({
        // ── Theme ──────────────────────────────────────────
        theme: 'system',
        setTheme: (theme) => set({ theme }),

        // ── Sidebar ────────────────────────────────────────
        isSidebarOpen: true,
        isSidebarCollapsed: false,
        isCartOpen: false,
        toggleSidebar: () => set({ isSidebarOpen: !get().isSidebarOpen }),
        collapseSidebar: () => set({ isSidebarCollapsed: !get().isSidebarCollapsed }),
        toggleCart: (isOpen) => set({ isCartOpen: isOpen !== undefined ? isOpen : !get().isCartOpen }),

        // ── Toasts ─────────────────────────────────────────
        toasts: [],
        addToast: (toast) => {
          const id = generateId();
          const newToast: Toast = { ...toast, id };
          set({ toasts: [...get().toasts, newToast] });

          // Auto-remove after duration
          setTimeout(() => {
            get().removeToast(id);
          }, toast.duration || 5000);
        },
        removeToast: (id) => {
          set({ toasts: get().toasts.filter((t) => t.id !== id) });
        },

        // ── Modal ──────────────────────────────────────────
        activeModal: null,
        modalData: null,
        openModal: (id, data) => set({ activeModal: id, modalData: data }),
        closeModal: () => set({ activeModal: null, modalData: null }),

        // ── Global Loading ─────────────────────────────────
        isGlobalLoading: false,
        setGlobalLoading: (loading) => set({ isGlobalLoading: loading }),
      }),
      {
        name: 'super-app-ui',
        partialize: (state) => ({
          theme: state.theme,
          isSidebarCollapsed: state.isSidebarCollapsed,
        }),
      }
    ),
    { name: 'UIStore' }
  )
);
