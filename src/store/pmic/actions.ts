import { ActionTree } from 'vuex';
import { StateInterface } from '../';

import { PMICInterface } from './state';
import { IUSBCommand } from 'src/types/commands';

const actions: ActionTree<PMICInterface, StateInterface> = {
  parseFastStatus({ rootState, rootGetters, commit }) {
    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    const data = rootGetters['UsbLayer/getCommandArr'](129, 224) as Array<IUSBCommand>;
    const payload = [0];

    data?.map((cmd) => payload.push(...cmd.payload.slice(0, 123).filter((ch) => ch)));
    if (payload.length < 1) return;

    const reconstituted = String.fromCharCode.apply(null, payload.slice(1));
    console.debug(reconstituted);
    commit('updateFastStatus', JSON.parse(reconstituted));
  },
  parseInjectionStatus({ rootState, rootGetters, commit }) {
    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    const data = rootGetters['UsbLayer/getCommandArr'](130, 224) as Array<IUSBCommand>;

    const payload = [0];

    data?.map((cmd) => payload.push(...cmd.payload.slice(0, 123).filter((ch) => ch)));
    if (payload.length < 1) return;

    const reconstituted = String.fromCharCode.apply(null, payload.slice(1));
    commit('updateFastStatus', JSON.parse(reconstituted));
  },
  parseIgnitionStatus({ rootState, rootGetters, commit }) {
    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    const data = rootGetters['UsbLayer/getCommandArr'](131, 224) as Array<IUSBCommand>;

    const payload = [0];

    data?.map((cmd) => payload.push(...cmd.payload.slice(0, 123).filter((ch) => ch)));
    if (payload.length < 1) return;

    const reconstituted = String.fromCharCode.apply(null, payload.slice(1));
    commit('updateFastStatus', JSON.parse(reconstituted));
  },
};

export default actions;
