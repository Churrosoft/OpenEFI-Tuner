<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="4">
				<v-btn color="primary" @click="connectUsbDevice">Conectar</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
async function fetch({device, comp}) {
  let reader = device.readable.getReader();
  console.log(device, comp);
  let a = true;
  while (a) {
    try {
      let result = await reader.read();
      comp.$store.dispatch('recv', result);
    } catch (error) {
      break;
    }
  }
  comp.$store.commit('setDisconnected');
}
export default {
	name: 'Connect',
    data: () => ({}),
    methods: {
      connectUsbDevice() {
        navigator.serial.getPorts().then((r) => {
          if(r.length > 0){
            this.deviceOpen(r[0]);
          }else{
            navigator.serial.requestPort({filters: [{vendorId: 0x1209, productId: 0xeef1}]})
              .then(device => this.deviceOpen(device));
          }
        });
      },
      deviceOpen(device){
        device.open({ baudrate: 115200 }).then(() => {
          this.$store.dispatch('connected', device);
          fetch({device: device, comp: this});
        });
      }
    }
  }
</script>
