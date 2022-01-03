<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <example-component
        title="Example component"
        active
        :todos="todos"
        :meta="meta"
      ></example-component>
      <q-btn @click="sendHello"> Send EFI HELLO </q-btn>
      <canvas
        id="canvas-id"
        data-type="radial-gauge"
      ></canvas>
    </div>
  </q-page>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { RadialGauge } from 'canvas-gauges';
import { defineComponent, ref } from 'vue';
import { storeKey } from '../store';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'PageIndex',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  components: { ExampleComponent },
  methods: {
    sendHello() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const gauge = new RadialGauge({
        renderTo: 'canvas-id',
        width: 300,
        height: 300,
        units: '°C',
        title: 'Temperature',
        minValue: -15,
        maxValue: 120,
        majorTicks: [-15,-10,0,10,20,30,40,50,60,70,80,90,120],
        minorTicks: 2,
        strokeTicks: true,
        highlights: [
          {
            from: -15,
            to: 0,
            color: 'rgba(0,0, 255, .3)',
          },
          {
            from: 0,
            to: 50,
            color: 'rgba(255, 0, 0, .3)',
          },
        ],
        ticksAngle: 225,
        startAngle: 67.5,
        colorMajorTicks: '#ddd',
        colorMinorTicks: '#ddd',
        colorTitle: '#eee',
        colorUnits: '#ccc',
        colorNumbers: '#eee',
        colorPlate: '#222',
        borderShadowWidth: 0,
        borders: true,
        needleType: 'arrow',
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: 'linear',
        colorBorderOuter: '#333',
        colorBorderOuterEnd: '#111',
        colorBorderMiddle: '#222',
        colorBorderMiddleEnd: '#111',
        colorBorderInner: '#111',
        colorBorderInnerEnd: '#333',
        colorNeedleShadowDown: '#333',
        colorNeedleCircleOuter: '#333',
        colorNeedleCircleOuterEnd: '#111',
        colorNeedleCircleInner: '#111',
        colorNeedleCircleInnerEnd: '#222',
        valueBoxBorderRadius: 0,
        colorValueBoxRect: '#222',
        colorValueBoxRectEnd: '#333',
      });

      gauge.draw();

      const usbWriter = this.store.state.UsbLayer.writer;
      if (usbWriter) {
        const command = 20;
        const subcommand = 10;
        const rawData = Array(127).fill(0x0);
        rawData[0] = 1;

        rawData[1] = (command >> 8) & 0xff;
        rawData[2] = command & 0xff;

        rawData[3] = (subcommand >> 8) & 0xff;
        rawData[4] = subcommand & 0xff;

        rawData[126] = 0xfa;
        rawData[127] = 0xfa;
        /* 
        
        const data = new Uint8Array(rawData); */
        /* 
        console.debug(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `Frame enviado\nProtocolo: ${1}\nComando: ${command}\nPayload: ${rawData}\nChecksum: ${0xfa}`
        );
 */
        void usbWriter.write(new Uint8Array(rawData));
      }
    },
  },
  setup() {
    const store = useStore(storeKey);
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta, store };
  },
});
</script>
