import { Commit } from "vuex";

export default {
  namespaced: true,

  state: {
    stepNumber: 1,
  },

  mutations: {
    SET_STEP_NUMBER(state: any, data: number) {
      state.stepNumber = data;
    },
  },

  actions: {
    setStepNumber({ commit }: { commit: Commit }, data: number) {
      commit("SET_STEP_NUMBER", data);
    },
  },
};
