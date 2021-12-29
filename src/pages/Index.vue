<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
    <q-btn @click="sendHello"> Send EFI HELLO </q-btn>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from 'vue';
import { storeKey } from '../store';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  methods: {
    sendHello() {
      const usbWriter = this.store.state.UsbLayer.writer;
      console.log(usbWriter);
      if (usbWriter) {
        const rawData = Array(127).fill(0xfd);

        rawData[124] = 0xfa;
        rawData[125] = 0xfa;
        rawData[126] = 0xfa;
        rawData[127] = 0xfa;
        /* 
        const data = new Uint8Array(rawData); */
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
