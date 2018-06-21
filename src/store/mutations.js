import * as types from './types';
import getters from './getters';
const state = {
  hideAside: false,
  asideWidth: '200px',
  count: 20
};

const mutations = {
  [types.INCREMENT] (state) {
    state.count++;
  },
  [types.HIDEASIDE] (state) {
    state.hideAside = !state.hideAside;
    if (state.hideAside) {
      state.asideWidth = '64px';
    } else {
      state.asideWidth = '200px';
    }
    console.log(state);
  }
};

export default {
  state,
  mutations,
  getters
};
