/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {IUSBCommand} from 'src/types/commands';
import {ActionTree} from 'vuex';
import {StateInterface} from '../';
import {defaultInjectionVE} from './default';

import {InjectionInterface} from './state';
import {ITableRow} from 'src/types/table';

const actions: ActionTree<InjectionInterface, StateInterface> = {
    requestInjectionTableRPMTPS({commit}) { // done
        commit('setInjectionLoading', true);
    },
    async getInjectionTableRPMTPS({commit}, payload) { //done
        commit('setTableRPM_TPS', payload);
    },
    async pathTableRPM_TPS({commit}, payload) {
        commit('pathTableRPM_TPS', payload);
    },
    errorTableRPMTPS({commit}) {
        commit('setTable_RPMTPS_Status', 'error');
        commit('setTableRPM_TPS', defaultInjectionVE);
        commit('setInjectionLoading', false);
    },
    updateTableRPMTPS({commit}, payload: Array<ITableRow>) { //repetido
        commit('setTableRPM_TPS', payload);
    },
    uploadTableRPMTPS({commit}) {
        commit('setInjectionLoading', true);
    },

    // este ya seria "generico"
    checkUploadResult({dispatch, commit}, payload: Array<IUSBCommand> | null) {
        if (payload === null) return;

        payload.map((command) => {
            if (command !== null) { //este if esta al pedo?
                void dispatch('UsbLayer/removeMesage', command, {
                    root: true,
                });
            }
        });
        commit('setInjectionLoading', false);
    },

    // new generics:
    // store => efi
    requestTable({state, commit}, table: keyof typeof state.tables) {
        commit('setTableStatus', {table, status: 'loading'})
    },
    // ui => store => efi
    uploadTable({state, commit}, table: keyof typeof state.tables) {
        commit('setTableStatus', {table, status: 'loading'})
    },
// efi => store => ui
    getTable({state, commit}, payload: { table: keyof typeof state.tables, tableData: Array<ITableRow> }) {
        commit('setTableStatus', {table: payload.table, status: 'error'})
        commit('setTable', payload);
    },
    errorTable({state, commit}, table: keyof typeof state.tables) {
        commit('setTableStatus', {table, status: 'error'})
        commit('pathTable', {table, tableData: defaultInjectionVE});
    },
    // ui => store
    pathTable({state, commit}, payload: { table: keyof typeof state.tables, tableData: Array<ITableRow> }) {
        commit('pathTable', payload);
    }
};

export default actions;
