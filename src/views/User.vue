<template>
	<div class="w-full max-w-4xl items-center mx-auto px-6">
		<PostCard
			class="centerDiv50"
			v-for="(post, key) in feed"
			:key="key"
			:post="post"
		/>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { useRoute } from 'vue-router';
	import PostCard from '@/components/PostCard.vue';
	import content from '@/api/content';

	const route = useRoute();
	const username = route.params.username;

	let feed = ref([]);
	content.getContentByUsername(username).then((r) => (feed.value = r.data));

	console.log(feed);
</script>

<style></style>
