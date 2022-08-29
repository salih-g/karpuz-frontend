<template>
	<div>
		<div v-if="feed.length === 0">
			<main class="w-full max-w-4xl items-center mx-auto">
				<PostInput class="centerDiv20" v-if="user" />
				<PostCardSkeleton class="centerDiv20" />
				<PostCardSkeleton class="centerDiv20" />
				<PostCardSkeleton class="centerDiv20" />
			</main>
		</div>
		<div v-if="feed.length > 0">
			<main class="w-full max-w-4xl items-center mx-auto">
				<PostInput class="centerDiv20" v-if="user" />

				<!-- loading -->
				<div
					class="translate-x-1/2 translate-y-1/2 mb-12 centerLoading"
					v-if="fetchLoading"
				>
					<div
						class="border-t-transparent border-solid animate-spin rounded-full border-primary border-8 h-12 w-12"
					></div>
				</div>

				<PostCard
					class="centerDiv20"
					v-for="(post, key) in feed"
					:key="key"
					:postId="post.id"
				/>
			</main>
		</div>
	</div>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
	import { useAuthStore } from '@/stores/auth.store';
	import { useContentStore } from '@/stores/content.store';

	const authStore = useAuthStore();
	const contentStore = useContentStore();
	const { user } = storeToRefs(authStore);
	const { feed, fetchLoading } = storeToRefs(contentStore);

	onBeforeMount(async () => {
		await contentStore.initFetchPosts();
	});
</script>

<style>
	.centerDiv20 {
		margin: 20px auto;
	}
	.centerLoading {
		margin-left: auto;
		margin-right: auto;
		margin-top: -20px;
		margin-bottom: 40px;
	}

	.maxWidth {
		max-width: 250px;
	}
</style>
