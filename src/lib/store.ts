import { create } from 'zustand';

export interface User {
  id: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
}

interface UserState {
  isAuthenticated: boolean;
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

interface AppState {
  theme: 'light' | 'dark';
  setTheme: (theme: AppState['theme']) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
})); 