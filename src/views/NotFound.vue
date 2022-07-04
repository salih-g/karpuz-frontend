<template>
	<h1 class="text-center">Not Found</h1>
</template>

<script setup>
	import { onMounted } from 'vue';
	import { useRouter } from 'vue-router';
	const router = useRouter();

	onMounted(() => {
		router.push({ path: '/' });
	});
</script>

<style></style>
