<template>
	<v-app>
		<v-container>
			<v-row>
				<v-col cols="12">
					<Header />
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<Menu />
				</v-col>
			</v-row>
		</v-container>
		<v-content>
			<router-view />
		</v-content>
		<v-footer app>
			<span><a href="https://github.com/openefi/" target="new"> &copy; OpenEFI 2020</a> </span>
		</v-footer>
	</v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Menu from '@/components/Menu.vue';
export default {
	name: 'App',

	components: { Header, Menu },

	data: () => ({
		//
	}),
};
</script>
