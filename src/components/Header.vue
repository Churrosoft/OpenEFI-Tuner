<template>
	<v-app-bar app color="primary" dark clipped-left>
		<v-app-bar-nav-icon @click.stop="Drawer=!Drawer"  />
		<v-toolbar-title>OpenEFI Tuner</v-toolbar-title>

		<v-spacer></v-spacer>
		<div v-if="!$store.state.paired">Esperando terminal...</div>
		<div v-else>
			Firmware v
			<span
				v-html="$store.state.firmware_ver.major + '.' + $store.state.firmware_ver.minor + '.' + $store.state.firmware_ver.rev"
			/>
		</div>
		<!-- -->
	</v-app-bar>
</template>

<script>
export default {
	name: 'Header',
	components: {},
	data: () => ({}),

	computed: {
		Drawer: {
			get() {
				return this.$store.getters.toogle_menu;
			},
			set (v) { return this.$store.commit('toogle_menu',v) }
		},
		mini() {
			return this.$vuetify.breakpoint.mdAndDown;
		},
	},
};
</script>