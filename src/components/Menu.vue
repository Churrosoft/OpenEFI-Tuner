<template>
	<v-navigation-drawer v-model="Drawer" app clipped :mini-variant="mini">
		<v-list dense>
			<v-list-item v-for="(child, i) in items" :key="i" :to="child.link" link>
				<v-list-item-action>
					<v-icon>{{child.icon}}</v-icon>
				</v-list-item-action>
				<v-list-item-content>
					<v-list-item-title>{{child.title}}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { mdiCarInfo, mdiCogTransfer } from '@mdi/js';
export default {
	name: 'Menu',
	data() {
		return {
			drawer: null,
			items: [
				{ title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/' },
				{ title: 'DTC', icon: mdiCarInfo, link: '/dtc' },
				{ title: 'Settings', icon: mdiCogTransfer, link: '/settings' },
				{ title: 'About', icon: 'mdi-help-box', link: '/about' },
			],
		};
	},
	computed: {
		Drawer: {
			get() {
				return this.$vuetify.breakpoint.smAndUp
					? true
					: this.$store.getters.toogle_menu;
			},
			set(v) {
				return this.$store.commit('toogle_menu', v);
			},
		},
		mini() {
			return (
				this.$vuetify.breakpoint.smAndUp &&
				this.$store.getters.toogle_menu
			);
		},
	},
};
</script>