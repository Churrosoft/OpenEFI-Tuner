<template>
	<v-navigation-drawer v-model="drawer" app clipped v-if="$store.state.toogle_menu">
		<v-list dense>
			<v-list-item link>
				<v-list-item-action>
					<v-icon>mdi-view-dashboard</v-icon>
				</v-list-item-action>
				<v-list-item-content>
					<v-list-item-title>Dashboard</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-list-item link>
				<v-list-item-action>
					<v-icon>mdi-settings</v-icon>
				</v-list-item-action>
				<v-list-item-content>
					<v-list-item-title>Settings</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	name: 'Menu',
	data() {
		return {
			drawer: true,
			items: [
				{ title: 'Dashboard', icon: 'mdi-view-dashboard' },
				{ title: 'Photos', icon: 'mdi-image' },
				{ title: 'About', icon: 'mdi-help-box' },
			],
		};
	},
	computed: {
		bg() {
			return this.background
				? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg'
				: undefined;
		},
	},
};
</script>