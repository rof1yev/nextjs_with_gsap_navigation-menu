import { create } from "zustand";

type Store = {
  isOpen: boolean;
  setOpen: () => void;
};

export const useMenu = create<Store>()((set) => ({
  isOpen: false,
  setOpen: () => set((state: Store) => ({ isOpen: !state.isOpen })),
}));
