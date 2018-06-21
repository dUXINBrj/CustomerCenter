import * as types from './types';
export default {
  increment: ({commit, state}) => {
    commit(types.INCREMENT);
  },
  hideAside: ({commit, state}) => {
    commit(types.HIDEASIDE);
  }
};
