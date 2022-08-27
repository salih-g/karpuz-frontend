<template>
	<Navbar />
	<NuxtPage />
</template>

<script setup>
	import { useAuthStore } from '@/stores/auth.store';
	const authStore = useAuthStore();
	onMounted(() => {
		if (process.client) {
			authStore.user = JSON.parse(window.localStorage.getItem('user'));
		}
	});
</script>
