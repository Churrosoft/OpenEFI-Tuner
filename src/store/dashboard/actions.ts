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
        const load = (((frame[4] << 8) + frame[5]) / 100).toFixed(2);
        const battery = (((frame[6] << 8) + frame[7]) / 100).toFixed(2);
        const advance = (frame[8] << 8) + frame[9];

        const efiStatus = 'NORMAL';

        commit('setDashboard', { rpm, temperature, load, battery, advance, efiStatus });

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
        const frame = command.payload;

        const maxRpm = (frame[0] << 8) + frame[1];
        // const maxTemp = (frame[1] << 8) + frame[2];

        const rpmTicks = [750, 1000, 1500];
        for (let index = 1500; index <= maxRpm; index += 500) {
          rpmTicks.push(index);
        }

        const highlights = [
          {
            from: rpmTicks.slice(-3)[0],
            to: rpmTicks.slice(-1)[0],
            color: 'rgba(255, 0, 0, .3)',
          },
        ];

        commit('setDashboardConfig', { rpmTicks, maxRpm, highlights });

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
