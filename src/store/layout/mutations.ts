import { MutationTree } from 'vuex';
import { LayoutInterface } from './state';

const mutation: MutationTree<LayoutInterface> = {
  toogleMenu(state, v: boolean) {
    state.toogleMenu = v;
  },
};

export default mutation;
