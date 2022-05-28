<script setup>
	import { useTemplateStore } from '@/stores/template';

	const store = useTemplateStore();
	// console.log(store);

	defineProps({
		msg: String,
	});
</script>

<template>
	<h1 class="text-3xl font-bold underline">{{ msg }}</h1>

	<h2>Count is {{ store.count }}</h2>
	<h2>Double count is {{ store.doubleCount }}</h2>
	<button @click="store.increment(1)">Increment</button>
</template>

<style scoped></style>
