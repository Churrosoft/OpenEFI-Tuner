import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import { createStore, Store as VuexStore, useStore as vuexUseStore } from 'vuex';

import UsbLayer from './usb-layer';
import DtcCodes from './dtc_codes';
import Layout from './layout';
import Ignition from './ignition';
import Injection from './injection';

import Dashboard from './dashboard';
import Debug from './debug';
import Memory from './memory';
import Pmic from './pmic';

import { UsbLayerInterface } from './usb-layer/state';
import { LayoutInterface } from './layout/state';
import { DTCCodesInterface } from './dtc_codes/state';
import { IgnitionInterface } from './ignition/state';
import { InjectionInterface } from './injection/state';

import { DashboardInterface } from './dashboard/state';
import { DebugInterface } from './debug/state';
import { MemoryInterface } from './memory/state';
import { PMICInterface } from './pmic/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  UsbLayer: UsbLayerInterface;
  Layout: LayoutInterface;
  DtcCodes: DTCCodesInterface;
  Ignition: IgnitionInterface;
  Injection: InjectionInterface;
  Dashboard: DashboardInterface;
  Debug: DebugInterface;
  Memory: MemoryInterface;
  Pmic: PMICInterface;
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key');

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      // example
      UsbLayer,
      Layout,
      DtcCodes,
      Ignition,
      Injection,
      Dashboard,
      Debug,
      Memory,
      Pmic,
    },
    /* getters: {
      UsbLayerGetters: UsbLayerGetters.getCommand as never,
    }, */
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

export function useStore() {
  return vuexUseStore(storeKey);
}
