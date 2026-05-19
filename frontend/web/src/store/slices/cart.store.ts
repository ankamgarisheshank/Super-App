import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
  id: string; // The specific cart item ID (in case we need to differentiate the same item with different options)
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  specialInstructions?: string;
  imageUrl?: string;
}

export interface CartState {
  restaurantId: string | null;
  restaurantName: string | null;
  items: CartItem[];
  
  // Actions
  addItem: (item: Omit<CartItem, 'id'>, restaurantId: string, restaurantName: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Computed
  getSubtotal: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      restaurantId: null,
      restaurantName: null,
      items: [],

      addItem: (item, resId, resName) => set((state) => {
        // If adding from a different restaurant, clear the cart first (Restaurant-aware isolation)
        if (state.restaurantId && state.restaurantId !== resId) {
          if (!window.confirm('Adding items from a new restaurant will clear your current cart. Continue?')) {
            return state;
          }
          return {
            restaurantId: resId,
            restaurantName: resName,
            items: [{ ...item, id: crypto.randomUUID() }]
          };
        }

        // Check if item already exists
        const existingItemIndex = state.items.findIndex(i => i.menuItemId === item.menuItemId);
        if (existingItemIndex >= 0) {
          const newItems = [...state.items];
          newItems[existingItemIndex].quantity += item.quantity;
          return { items: newItems, restaurantId: resId, restaurantName: resName };
        }

        return {
          restaurantId: resId,
          restaurantName: resName,
          items: [...state.items, { ...item, id: crypto.randomUUID() }]
        };
      }),

      removeItem: (itemId) => set((state) => {
        const newItems = state.items.filter(i => i.id !== itemId);
        // If cart is empty, reset restaurant binding
        if (newItems.length === 0) {
          return { items: [], restaurantId: null, restaurantName: null };
        }
        return { items: newItems };
      }),

      updateQuantity: (itemId, quantity) => set((state) => {
        if (quantity <= 0) {
          return get().removeItem(itemId) as any;
        }
        return {
          items: state.items.map(i => i.id === itemId ? { ...i, quantity } : i)
        };
      }),

      clearCart: () => set({ items: [], restaurantId: null, restaurantName: null }),

      getSubtotal: () => {
        const state = get();
        return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },

      getTotalItems: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'super-app-cart', // unique name
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      // Only persist data, not computed functions (handled implicitly by zustand persist)
    }
  )
);
