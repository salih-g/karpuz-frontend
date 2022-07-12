<template>
	<div class="w-full max-w-4xl center mx-auto px-6">
		<div
			class="bg-white alert alert-info shadow-lg centerDiv50 text-gray-500 w-full md:w-3/4"
		>
			<div>
				<img
					class="w-12 h-12 rounded-full"
					alt="User avatar"
					:src="`https://avatars.dicebear.com/api/big-smile/${username}.svg?b=%23c8ccd5&r=50&scale=82`"
				/>
				<span class="font-bold capitalize">{{ username }}'s posts</span>
			</div>
		</div>

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
