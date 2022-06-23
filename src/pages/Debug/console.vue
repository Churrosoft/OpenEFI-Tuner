<template>
  <div>
    <h4 class="q-mt-md q-mb-md">Debug Utils</h4>
    <h6 class="q-mt-md q-mb-lg">
      por ahora solo una consolita con colorinche'
    </h6>

    <q-btn icon="download" color="primary" @click="requestMessagePoll">
      <span class="q-mr-md">Poll for messages</span>
    </q-btn>

    <q-scroll-area class="debug__console" style="height: 40vw; width: 100%">
      <!--  <div class="debug__console"> -->
      <p>$ yo gulp-webapp</p>
      <p class="debug__console--info">
        [I] Out of the box I include HTML5 Boilerplate, jQuery, and a
        gulpfile.js to build your app.
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--error">[!] sdsfddfs</p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <p class="debug__console--event">
        [E] What more would you likeE (Press space to select)
      </p>
      <!--     </div>
 -->
    </q-scroll-area>
  </div>
</template>

<script setup lang="ts">
import './styles.scss';
import { onMounted, onBeforeUnmount, ref } from 'vue';

const liveTunning = ref(false);
import { storeKey } from '../../store';
import { useStore } from 'vuex';

const store = useStore(storeKey);

const requestMessagePoll = () => {
  store.dispatch('Debug/pollMessages');
};
</script>
