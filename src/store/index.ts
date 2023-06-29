import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import authModule from "./modules/authModule";

export default createStore({
  plugins: [
    createPersistedState({
      key: "frontend_props",
      storage: window.localStorage,
    }),
  ],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: authModule,
  },
});
