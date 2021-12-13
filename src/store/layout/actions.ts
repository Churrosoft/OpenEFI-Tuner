import { ActionTree } from 'vuex';
import { StateInterface } from '../';

import { LayoutInterface } from './state';

const actions: ActionTree<LayoutInterface, StateInterface> = {
  toogleMenu({ commit, state }) {
    commit('toogleMenu', !state.toogleMenu);
  },

  someAction(/* context */) {
    // your code
  },
};

export default actions;
