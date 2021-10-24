import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: {},
    date : 0,
    type : 0
  },

  mutations: {
    SET_DATA(state, payload) {
      state.date  = payload.query.date;
      state.type  = payload.query.type;
      state.score = payload.data.data;
    }
  },

  actions: {
    changeTab({ commit }, query) {
      const data = require('../helpers/data.json');
      commit("SET_DATA", {query: query, data:data});
    }
  }
});