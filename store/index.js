import { defineStore } from "pinia";
// import persistedState from "pinia-plugin-persistedstate";

export const useProductStore = defineStore({
  id: "product",

  state: () => ({
    navbarDrop : false
  }),

  actions: {
  },

  //   persist: true,

  persist: {
    storage: persistedState.localStorage,
  },
});