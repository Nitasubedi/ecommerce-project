import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  login: (username, password) => {
    if (username === "user" && password === "password") {
      set({ isAuthenticated: true });
      alert("Welcome");
    } else {
      alert("Invalid credentials");
    }
  },
  logout: () => set({ isAuthenticated: false }),
}));

export default useAuthStore;
