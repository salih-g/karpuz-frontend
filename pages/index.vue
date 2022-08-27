<template>
	<div>
		<div v-if="feed.length === 0">
			<main class="w-full max-w-4xl items-center mx-auto px-6">
				<PostInputSkeleton class="centerDiv50" />
				<PostCardSkeleton class="centerDiv50" />
				<PostCardSkeleton class="centerDiv50" />
				<PostCardSkeleton class="centerDiv50" />
			</main>
		</div>
		<div v-if="feed.length > 0">
			<main class="w-full max-w-4xl items-center mx-auto px-6">
				<PostInput class="centerDiv50" v-if="user" />
				<div>
					<div class="translate-x-1/2 translate-y-1/2 mb-12" v-if="loading">
						<div
							class="border-t-transparent border-solid animate-spin rounded-full border-primary border-8 h-12 w-12"
						></div>
					</div>
				</div>

				<pre>{{ feed }}</pre>
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
	const { feed, loading } = storeToRefs(contentStore);

	onBeforeMount(async () => {
		await contentStore.initFetchPosts();
	});
</script>

<style>
	.centerDiv50 {
		margin: 50px auto;
	}

	.maxWidth {
		max-width: 250px;
	}
</style>
