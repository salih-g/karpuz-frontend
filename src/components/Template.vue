<template></template>

<script setup>
	import { useTemplateStore } from '../stores/template';

	const store = useTemplateStore();
	// console.log(store);

	defineProps({
		msg: String,
	});
</script>

<style scoped></style>
