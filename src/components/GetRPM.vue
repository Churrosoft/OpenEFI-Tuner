<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="4">
				<v-btn color="primary" @click="reqTEMP">Get TEMP</v-btn>
                <v-btn color="primary" @click="reqRPM">Get RPM</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
    data: () => ({}),
    methods:{
        reqTEMP(){
            if(this.$store.state.connected){
                this.$store.dispatch('sendMessage',{ command: 2, subcommand: 1 });
            }else{
                console.warn("todavia no se puede pelotudo");
            }
        },
        reqRPM(){
            if(this.$store.state.connected){
                this.$store.dispatch('sendMessage',{ command: 2, subcommand: 2 });
            }else{
                console.warn("todavia no se puede pelotudo");
            }
        }
    }
}
</script>