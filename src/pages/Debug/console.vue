<template>
  <div>
    <h4 class="q-mt-md q-mb-md">Debug Utils</h4>
    <h6 class="q-mt-md q-mb-lg">
      por ahora solo una consolita con colorinche'
    </h6>

    <q-toggle
      class="q-mr-md"
      v-model="pollMessages"
      size="md"
      label="Poll for messages"
    />
    <q-scroll-area
      class="debug__console q-mt-md"
      style="height: 35vw; width: 100%"
      v-if="messages"
    >
      <p
        v-for="message in messages"
        :class="getMessageClass(message.type)"
        :key="message.msg"
      >
        {{ getMessageDecorator(message) }}
      </p>
    </q-scroll-area>
  </div>
</template>

<script setup lang="ts">
import './styles.scss';

import { computed, onUnmounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { storeKey } from '../../store';
import { IDebugMessage } from '../../store/debug/state';

const store = useStore(storeKey);
const pollMessages = ref(false);
let enableInterval = false;
let pollInterval: null | NodeJS.Timeout = null;

watch(pollMessages, () => {
  if (pollMessages.value === true && enableInterval === false) {
    pollInterval = setInterval(() => {
      store.dispatch('Debug/pollMessages');
    }, 100);
    enableInterval = true;
  }

  if (pollMessages.value === false && enableInterval === true) {
    if (pollInterval !== null) {
      clearInterval(pollInterval);
    }
    enableInterval = false;
  }
});

onUnmounted(() => {
  enableInterval = false;
  if (pollInterval !== null) {
    clearInterval(pollInterval);
  }
});
const messages = computed(() => store.state.Debug.messages);

const getMessageClass = (type: string) => {
  if (type === 'LOG') return '';
  if (type === 'INFO') return 'debug__console--info';
  if (type === 'EVENT') return 'debug__console--event';
  if (type === 'ERROR') return 'debug__console--error';
  return '';
};

const getMessageDecorator = (message: IDebugMessage) => {
  if (message.type === 'LOG') return `${message.msg}`;
  if (message.type === 'INFO') return `${message.msg}`;
  if (message.type === 'EVENT') return `[E] ${message.msg}`;
  if (message.type === 'ERROR') return `[!] ${message.msg}`;

  return message.msg;
};
</script>
