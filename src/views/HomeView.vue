<template>
	<div class="w-full max-w-4xl items-center mx-auto px-6">
		<PostInput class="centerDiv50" v-if="user" />
		<PostCard
			class="centerDiv50"
			v-for="(post, key) in feed"
			:key="key"
			:post="post"
		/>

		<!-- <Template msg="Karpuz" /> -->
	</div>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
	import { useContentStore } from '@/stores/content.store';
	import { useAuthStore } from '@/stores/auth.store';

	import PostInput from '@/components/PostInput.vue';
	import PostCard from '@/components/PostCard.vue';

	const contentStore = useContentStore();
	const authStore = useAuthStore();

	contentStore.getAllContents();

	const { user } = storeToRefs(authStore);
	const { feed } = storeToRefs(contentStore);
</script>

<style></style>
