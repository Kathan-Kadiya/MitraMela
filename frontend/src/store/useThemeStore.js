import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("MitraMela-theme") || "forest",
    setTheme: (theme) => {
        localStorage.setItem("MitraMela-theme", theme);
        set({ theme });
    },
}));