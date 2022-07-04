<template>
	<Navbar />
	<div class="container items-center mx-auto">
		<router-view />
	</div>
</template>

<script setup>
	import Navbar from '@/components/Navbar.vue';
</script>
<style>
	body {
		background-color: #202023;
	}
</style>
