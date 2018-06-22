import * as types from './types';
import getters from './getters';
const state = {
  hideAside: false,
  asideWidth: '200px',
  count: 20,
  navTabs: [],
  activeTab: ''
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
  },
  'addTabs' (state, data) {
    state.navTabs.push(data);
  },
  'setActiveTabs' (state, data) {
    state.activeTab = data;
  },
  deleteTabs (state, route) {
    let index = 0;
    for (let option of state.navTabs) {
      if (option.route === route) {
        break;
      }
      index++;
    }
    state.navTabs.splice(index, 1);
  }
};

export default {
  state,
  mutations,
  getters
};
