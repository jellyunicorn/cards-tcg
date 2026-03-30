import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  objectId: string;
  name: string;
  email: string;
  userToken: string;
}

type Store = {
  user: User | null;
  login: (id: string, name: string, email: string, token: string) => void;
  logout: () => void;
};

const useAuth = create<Store>()(
  persist(
    (set) => ({
      user: null,
      login: (id: string, name: string, email: string, token: string) =>
        set({
          user: { objectId: id, name: name, email: email, userToken: token },
        }),
      logout: () => set({ user: null }),
    }),
    { name: "authStore" },
  ),
);

export default useAuth;
