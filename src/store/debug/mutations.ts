import { MutationTree } from 'vuex';
import { DebugInterface, IDebugMessage } from './state';

const mutation: MutationTree<DebugInterface> = {
  appendDebugMessage(state, msg: IDebugMessage) {
    if (state.messages === null) {
      state.messages = [msg];
    } else {
      state.messages.push(msg);
    }
  },
};

export default mutation;
