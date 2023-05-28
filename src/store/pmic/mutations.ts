import { MutationTree } from 'vuex';
import { PMICInterface } from './state';

const mutation: MutationTree<PMICInterface> = {
  toogleMenu(state, v: boolean) {
    state.toogleMenu = v;
  },
};

export default mutation;
