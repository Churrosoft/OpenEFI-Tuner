import { MutationTree } from 'vuex';
import { MemoryInterface } from './state';

const mutation: MutationTree<MemoryInterface> = {
  toogleMenu(state, v: boolean) {
    state.toogleMenu = v;
  },
};

export default mutation;
