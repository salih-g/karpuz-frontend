<template>
	<div class="w-full max-w-4xl items-center mx-auto px-6">
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

	import PostInput from '@/components/PostInput.vue';
	import PostCard from '@/components/PostCard.vue';

	const aDay = 24 * 60 * 60 * 1000;

	const posts = ref([
		{
			id: '1',
			username: 'abbas',
			content:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Incidunt, aspernatur!',
			comments: [
				{
					username: 'omerbaba34',
					message: 'test comment',
					createdAt: new Date(Date.now() - aDay / 10),
				},
				{
					username: 'yagizbaba01.',
					message: 'ceyhanprensi',
					createdAt: new Date(Date.now() - aDay / 10),
				},
				{
					username: 'dsds',
					message: 'test comment',
					createdAt: new Date(Date.now() - aDay / 10),
				},
				{
					username: 'sgfhfhf',
					message: 'test comment',
					createdAt: new Date(Date.now() - aDay / 10),
				},
				{
					username: 'sdsds',
					message: 'test comment',
					createdAt: new Date(Date.now() - aDay / 10),
				},
			],
			likes: 5,
			createdAt: new Date(Date.now() - aDay / 10),
		},
		{
			id: '2',
			username: 'sudanmerinosu',
			content:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Incidunt, aspernatur!',
			comments: [],
			likes: 5,
			createdAt: new Date(Date.now() - aDay * 2),
		},
		{
			id: '3',
			username: 'cabbar',
			content:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Incidunt, aspernatur!',
			comments: [],
			likes: 20,
			createdAt: new Date(Date.now() - aDay * 10),
		},
	]);
</script>

<style></style>
