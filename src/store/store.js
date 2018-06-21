/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
var state = {
  count: 10
};

const actions = {
  increment: ({commit, state}) => {
    console.log(state);
    commit('increment');
  }
};

const mutations = {
  increment (state) {
    state.count++;
    console.log(state.count);
  }
};

const getters = {
  count (state) {
    return state.count;
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
