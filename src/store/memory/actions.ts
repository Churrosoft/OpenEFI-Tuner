import { ActionTree } from 'vuex';
import { StateInterface } from '../';

import { MemoryInterface } from './state';

const actions: ActionTree<MemoryInterface, StateInterface> = {
  toogleMenu({ commit, state }) {
    commit('toogleMenu', !state.toogleMenu);
  },
  getTable({ commit, state }) {
    // llega la refe de la tabla y a que mutation tiene que mandar la tabla
    commit('toogleMenu', !state.toogleMenu);
  },
  writeTable({ commit, state }) {
    // llega refe de la tabla, data, y mutations para loading/resultado
    commit('toogleMenu', !state.toogleMenu);
  },
  resetTable({ commit, state }) {
    // borra tabla y setea valores por defecto, recibe ref y data
    commit('toogleMenu', !state.toogleMenu);
  },

  resizeTable({ commit, state }) {
    // TDB, pero desde aca se cambiaria el tamaño de la tabla cuando cree el header de tabla nuevo en la flash
    commit('toogleMenu', !state.toogleMenu);
  },

  someAction(/* context */) {
    // your code
  },
};

export default actions;
