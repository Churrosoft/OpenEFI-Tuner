<template>
  <div class="about">
    <h1>This is an about page</h1>
    <GetRPM/>
  </div>
  
</template>

<script>
import GetRPM from '@/components/GetRPM.vue';
export default {
	name: 'About',

	components: { GetRPM },

	data: () => ({
		//
  }),
}
</script>