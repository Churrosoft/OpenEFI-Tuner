/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import { IUSBCommand } from '../usb-layer/state';

import { DashboardInterface } from './state';

const actions: ActionTree<DashboardInterface, StateInterface> = {
  parseStatus({ commit, rootGetters, dispatch, rootState }) {
    commit('setParsedLoading', true);
    commit('clearParsedCodes');

    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    for (let ind = 0; ind < commandsLength; ind++) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const command = rootGetters['UsbLayer/getCommand'](130) as IUSBCommand;
      if (command !== null) {
        // tendrrrriaaa que llegar un solo comando, pero porladuda':
        void dispatch('UsbLayer/removeCommand', command, {
          root: true,
        });
      }
    }

    commit('setParsedLoading', false);
  },
  // esta cosa se tiene que llamar antes de pedir el stream de data para el status (rpm/temp/bla)
  // trae el limite actual de rpm de la EFI para re-dibujar todo el gauge de rpm, mismo caso para el de temperatura

  updateGaugeConfig({ commit, rootGetters, dispatch, rootState }) {
    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    for (let ind = 0; ind < commandsLength; ind++) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const command = rootGetters['UsbLayer/getCommand'](130) as IUSBCommand;
      if (command !== null) {
        // a partir de aca toca chusmear que onda la config de la efi:
        void dispatch('UsbLayer/removeCommand', command, {
          root: true,
        });
      }
    }
  },
  someAction(/* context */) {
    // your code
  },
};

export default actions;
