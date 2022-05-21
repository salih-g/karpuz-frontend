<template>
	<div class="w-full max-w-4xl items-center mx-auto">
		<PostInput class="centerDiv50" />
		<PostCard
			class="centerDiv50"
			v-for="(post, key) in posts"
			:key="key"
			:post="post"
		/>

		<!-- <Template msg="Karpuz" /> -->
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	import PostInput from '../components/PostInput.vue';
	import PostCard from '../components/PostCard.vue';
	import Template from '../components/Template.vue';

	const aDay = 24 * 60 * 60 * 1000;

	const posts = ref([
		{
			id: '1',
			username: 'abbas',
			content:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Incidunt, aspernatur!',
			comments: [],
			likes: 5,
			createdAt: new Date(Date.now() - aDay / 10),
		},
		{
			id: '2',
			username: 'sudanmerinosu',
			content:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Incidunt, aspernatur!',
			comments: ['', '', ''],
			likes: 5,
			createdAt: new Date(Date.now() - aDay * 2),
		},
		{
			id: '3',
			username: 'cabbar',
			content:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Incidunt, aspernatur!',
			comments: [''],
			likes: 20,
			createdAt: new Date(Date.now() - aDay * 10),
		},
	]);
</script>

<style></style>
