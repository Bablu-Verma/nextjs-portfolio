import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  isMenuOpen: boolean;
  isModalOpen: boolean;
  isScrolled: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  openModal: () => void;
  closeModal: () => void;
  setScrolled: (scrolled: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  isModalOpen: false,
  isScrolled: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setScrolled: (scrolled: boolean) => set({ isScrolled: scrolled }),
}));

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'dark',
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'portfolio-theme',
    }
  )
);