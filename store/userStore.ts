// store/userStore.ts
import create from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
  setUser: (user: UserState["user"]) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage", // Unique name for the storage
      getStorage: () => localStorage, // Use localStorage (default)
    }
  )
);
