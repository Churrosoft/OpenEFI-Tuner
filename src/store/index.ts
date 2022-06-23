import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex';

import UsbLayer from './usb-layer';
import DtcCodes from './dtc_codes';
import Layout from './layout';
import Ignition from './ignition';
import Dashboard from './dashboard';
import Debug from './debug';

import { UsbLayerInterface } from './usb-layer/state';
import { LayoutInterface } from './layout/state';
import { DTCCodesInterface } from './dtc_codes/state';
import { IgnitionInterface } from './ignition/state';
import { DashboardInterface } from './dashboard/state';
import { DebugInterface } from './debug/state';

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
  Dashboard: DashboardInterface;
  Debug: DebugInterface;
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> =
  Symbol('vuex-key');

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      // example
      UsbLayer,
      Layout,
      DtcCodes,
      Ignition,
      Dashboard,
      Debug,
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
