import { create } from "zustand";

const useTokenStore = create((set) => ({
  token: "",
  setToken: (token) => set({ token }),
  resetToken: () => set({ token: "" }),
}));

export default useTokenStore;
