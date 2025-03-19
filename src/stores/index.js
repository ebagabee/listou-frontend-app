import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    isOfflineMode: false,
    user: null,
    lists: [],
  }),

  getters: {
    isLoggedIn: (state) => !!state.user,
  },

  actions: {
    setOfflineMode(isOffline) {
      this.isOfflineMode = isOffline;
    },

    login(user) {
      this.user = user;
    },

    logout() {
      this.user = null;
    },

    fetchLists() {
      this.lists = [
        { id: 1, name: "Supermercado", items: [] },
        { id: 2, name: "Farmácia", items: [] },
      ];
    },
  },
});
