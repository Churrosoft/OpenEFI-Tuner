/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import { DashboardInterface, efiStatusMap, IEfiStatus } from './state';
import { getUSBCommand, IUSBCommand, SerialCommand } from 'src/types/commands';
import { uint8ArrayToInt32 } from 'src/utils/numbers';

const actions: ActionTree<DashboardInterface, StateInterface> = {
  parseStatus({ commit, rootGetters, dispatch, rootState }) {
    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    for (let ind = 0; ind < commandsLength; ind++) {
      const command = getUSBCommand(rootGetters, SerialCommand.DashboardGet);

      if (command !== null) {
        const frame = command.payload;

        const rpm = (frame[0] << 8) + frame[1];
        /*   const temperature = (frame[2] << 8) + frame[3];
        const load = (((frame[4] << 8) + frame[5]) / 100).toFixed(2);
        const battery = (((frame[6] << 8) + frame[7]) / 100).toFixed(2);
        const advance = (frame[8] << 8) + frame[9]; */

        // Sensors:
        const sensor_tps = uint8ArrayToInt32(frame, 2) / 100;
        const sensor_map = uint8ArrayToInt32(frame, 6) / 100;
        const sensor_temp = uint8ArrayToInt32(frame, 10) / 100;
        const sensor_iat = uint8ArrayToInt32(frame, 41) / 100;
        const sensor_vbatt = uint8ArrayToInt32(frame, 18) / 100;
        const sensor_lmb = uint8ArrayToInt32(frame, 22);

        // Ignition:
        const advance = uint8ArrayToInt32(frame, 60) / 100;

        // Injection:
        const injectionTime1Bank = uint8ArrayToInt32(frame, 80) / 1000;
        const injectionBaseAir = uint8ArrayToInt32(frame, 84) / 1000;
        const injectionBaseFuel = uint8ArrayToInt32(frame, 88) / 1000;

        const efiStatus = efiStatusMap[frame[10] as keyof typeof efiStatusMap] as IEfiStatus;

        console.log({
          rpm,
          temperature: sensor_temp,
          load: sensor_map,
          battery: sensor_vbatt,
          advance,
          efiStatus,
          tps: sensor_tps,
          AFR: sensor_lmb,
          airTemperature: sensor_iat,
          injection: {
            time_bank_1: injectionTime1Bank,
            base_air: injectionBaseAir,
            base_fuel: injectionBaseFuel,
          },
        });

        commit('setDashboard', {
          rpm,
          temperature: sensor_temp,
          load: sensor_map,
          battery: sensor_vbatt,
          advance,
          efiStatus,
          tps: sensor_tps,
          AFR: sensor_lmb,
          airTemperature: sensor_iat,
          injection: {
            time_bank_1: injectionTime1Bank,
            base_air: injectionBaseAir,
            base_fuel: injectionBaseFuel,
          },
        });

        void dispatch('UsbLayer/removeMesage', command, {
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

        void dispatch('UsbLayer/removeMesage', command, {
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
