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
  console.log(device, comp)
  let a = true;
  while(a){
    let result = await reader.read();
    comp.$store.dispatch('recv', result);
  }
}
  export default {
    name: 'Connect',

    data: () => ({
    }),
    methods: {
      connectUsbDevice() {
        navigator.serial.requestPort({
          filters: [{vendorId: 0x1209, productId: 0xeef1}]
        }).then(device => {
          // return device.open;
          console.log('pas1', device);
          device.open({ baudrate: 115200 }).then(() => {
            //device.selectAlternateInterface(0x82)
            this.$store.dispatch('connected', device);
            this.$emit('on-usb-device-connected');
            fetch({device: device, comp: this});
            
            /*const bytes = new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
            console.log("en teoria mande algo");
            writer.write(bytes);
            writer.releaseLock();
                })
              }).catch(error => {
                alert('Error al conectar' + error)
                console.log(error);
              });*/
          });
        });
      }
    }
  }
</script>
