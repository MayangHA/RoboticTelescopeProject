import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create(
  persist(
    (set) => ({
      auth: {},
      setAuth(auth) {
        set({ auth });
      },
      token: null,
      setToken(token) {
        const auth = jwtDecode(token);

        set({
          auth,
          token,
        });
      },
      removeToken() {
        set({
          auth: {},
          token: null,
        });
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAuthStore;
