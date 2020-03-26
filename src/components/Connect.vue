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
async function startWorking({device, comp}) {
  await device.selectConfiguration(1);
  await device.claimInterface(1);
  comp.$store.dispatch('connected', device);
  let a = true;
  while (a) {
    try {
      let result = await device.transferIn(2, 128);
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
        navigator.usb.getDevices().then((r) => {
          if(r.length > 0){
            this.deviceOpen(r[0]);
          }else{
            navigator.usb.requestDevice({filters: [{vendorId: 0x1209, productId: 0xeef1}]})
              .then(device => this.deviceOpen(device));
          }
        });
      },
      deviceOpen(device){
        device.open().then(() => {
          //fetch({device: device, comp: this});
          console.log(device)
          startWorking({device: device, comp: this})
        });
      }
    }
  }
</script>
