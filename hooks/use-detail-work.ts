import { WORK } from "@/app/work/page";
import { create } from "zustand";

interface IUseDetailWork {
  isOpen: boolean;
  work: WORK | null
  onOpen: (work: WORK) => void;
  onClose: () => void;
}

export const useDetailWork = create<IUseDetailWork>((set) => ({
  isOpen: false,
  work: null,
  onOpen: (work: WORK) => set({ isOpen: true, work }),
  onClose: () => set({ isOpen: false, work: null }),
}));
