import { ActionTree } from 'vuex';
import { StateInterface } from '../';

import { PMICInterface } from './state';
import { IUSBCommand } from 'src/types/commands';

const actions: ActionTree<PMICInterface, StateInterface> = {
  toogleMenu({ commit, state }) {
    commit('toogleMenu', !state.toogleMenu);
  },

  parseFastStatus({ rootState, rootGetters }) {
    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    const data = rootGetters['UsbLayer/getCommandArr'](1131, 224) as Array<IUSBCommand>;

    const payload = [0];

    data?.map((cmd) => payload.push(...cmd.payload.slice(0, 123)));

    const reconstituted = String.fromCharCode.apply(
      null,
      payload.filter((ch) => ch)
    );

    console.log(JSON.parse(reconstituted));
  },
};

export default actions;
