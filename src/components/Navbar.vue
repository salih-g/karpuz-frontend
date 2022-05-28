<template>
	<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-b">
		<div class="container flex flex-wrap justify-between items-center mx-auto">
			<a href="/" class="flex items-center">
				<img
					src="../assets/karpuz.png"
					class="mr-3 h-6 sm:h-9"
					alt="Karpuz Logo"
				/>
				<span
					class="self-center text-xl font-semibold whitespace-nowrap text-gray-600"
					>Karpuz</span
				>
			</a>
			<div class="flex items-center md:order-2" v-if="user">
				<img
					class="w-8 h-8 rounded-full"
					src="https://avatars.dicebear.com/api/big-smile/male/sudanmerinosu.svg?b=%23c8ccd5&r=50&scale=82"
					alt="user photo"
				/>
				<a
					type="button"
					class="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center ml-4"
					@click="handleLogout"
				>
					Logout
				</a>
			</div>
			<div v-if="!user">
				<router-link
					type="button"
					class="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center"
					to="/login"
				>
					Login
				</router-link>

				<router-link
					type="button"
					class="text-red-500 hover:text-white border border-red-400 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center ml-2"
					to="/register"
				>
					Register
				</router-link>
			</div>
		</div>
	</nav>
</template>

<script setup>
	import { storeToRefs } from 'pinia';

	import { useAuthStore } from '@/stores/auth.store';

	const authStore = useAuthStore();
	const { user } = storeToRefs(authStore);

	function handleLogout() {
		return authStore.logout();
	}

	defineProps({
		msg: String,
	});
</script>

<style scoped></style>
