import * as types from './types';
import getters from './getters';
const state = {
  hideAside: false,
  asideWidth: '200px',
  count: 20,
  navTabs: [],
  activeTab: '',
  finacingData: {},
  ecommerceData: {},
  RbData: {}
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
  changeTabStatu (state, path) {
    for (let item of state.navTabs) {
      if (item.route === path) {
        item.exist = true;
        break;
      }
    }
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
  },
  addDetailData (state, data) {
    state[data.name][data.custId] = data.data;
  },
  deleteDetailData (state, data) {
    if (state[data.name][data.custId]) {
      delete state[data.name][data.custId];
    }
  }
};

export default {
  state,
  mutations,
  getters
};
