import { ActionTree } from 'vuex';
import { StateInterface } from '../';

import { DTCCodesInterface, IDTCCode } from './state';

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const actions: ActionTree<DTCCodesInterface, StateInterface> = {
  async getDTCfromEFI({ commit, state }) {
    // Mock:
    const codes = ['P0601', 'P060A', 'P0632', 'P0648', 'P0642'];
    commit('setParsedLoading', true);
    commit('clearParsedCodes');

    for (let codeIndex = 0; codeIndex < codes.length; codeIndex++) {
      const code = codes[codeIndex];
      await timeout(150);
      const codeDirectory = code.slice(0, 3).toLowerCase();
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/openefi/dtc_codes@main/mocks/${codeDirectory}/${code.toLowerCase()}.json`
      );
      const jsonResponse = (await response.json()) as IDTCCode;
      commit('appedParsedCode', jsonResponse);
    }

    commit('setParsedLoading', false);
  },

  someAction(/* context */) {
    // your code
  },
};

export default actions;
