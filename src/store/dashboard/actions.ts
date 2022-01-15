/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import { IUSBCommand } from '../usb-layer/state';

import { DashboardInterface } from './state';

const actions: ActionTree<DashboardInterface, StateInterface> = {
  parseStatus({ commit, rootGetters, dispatch, rootState }) {
    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    for (let ind = 0; ind < commandsLength; ind++) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const command = rootGetters['UsbLayer/getCommand'](15) as IUSBCommand;
      if (command !== null) {
        const frame = command.payload;

        const rpm = (frame[0] << 8) + frame[1];
        const temperature = (frame[2] << 8) + frame[3];
        const battery = ((frame[6] << 8) + frame[7]) / 100;
        const advance = (frame[4] << 8) + frame[5];

        const efiStatus = 'NORMAL';

        commit('setDashboard', { rpm, temperature, battery, advance, efiStatus });

        void dispatch('UsbLayer/removeCommand', command, {
          root: true,
        });
      }
    }

    commit('setDashboardLoading', false);
  },
  // esta cosa se tiene que llamar antes de pedir el stream de data para el status (rpm/temp/bla)
  // trae el limite actual de rpm de la EFI para re-dibujar todo el gauge de rpm, mismo caso para el de temperatura

  updateGaugeConfig({ commit, rootGetters, dispatch, rootState }) {
    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    for (let ind = 0; ind < commandsLength; ind++) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const command = rootGetters['UsbLayer/getCommand'](14) as IUSBCommand;
      if (command !== null) {
        // a partir de aca toca chusmear que onda la config de la efi:
        console.warn('le code', command);
        void dispatch('UsbLayer/removeCommand', command, {
          root: true,
        });
      }
    }
  },
  requestGaugeConfig({ commit, dispatch }) {
    void dispatch('UsbLayer/sendMessage', { command: 4, payload: [0] }, { root: true });

    commit('setDashboardLoading', true);
  },
};

export default actions;
