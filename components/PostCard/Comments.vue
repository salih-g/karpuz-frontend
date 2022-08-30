<template>
	<div>
		<div class="text-gray-600 p-4 flex">
			<img
				class="rounded-full h-8 w-8 mr-2 mt-1"
				:src="`https://avatars.dicebear.com/api/big-smile/${comment.username}.svg?b=%23c8ccd5&r=50&scale=82`"
			/>

			<div>
				<div class="flex flex-row mb-1">
					<!-- comment body -->
					<div class="bg-gray-100 rounded-lg px-4 pt-2 pb-2.5 maxWidth">
						<NuxtLink
							:to="`/user/${comment.user.username}`"
							class="font-semibold text-sm leading-relaxed"
						>
							{{ comment.user.username }}
						</NuxtLink>
						<div
							class="text-xs leading-snug md:leading-normal"
							v-html="comment.body"
						></div>
					</div>
					<!-- comment like -->
					<div
						class="flex text-gray-700 rounded-md items-center flex-end text-sm ml-2"
					>
						<button
							class="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 p-2 rounded-full text-gray-100 cursor-pointer mr-2"
							@click="handleLike(comment)"
							v-if="user !== null"
						>
							<svg
								v-if="!commentLikeLoading"
								class="h-4 w-4 text-red-500"
								:fill="isCommentLiked ? 'currentColor' : 'none'"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
								></path>
							</svg>

							<svg
								v-if="commentLikeLoading"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								style="
									margin: auto;
									background: none;
									display: block;
									shape-rendering: auto;
								"
								width="16px"
								height="16px"
								viewBox="0 0 100 100"
								preserveAspectRatio="xMidYMid"
							>
								<circle
									cx="50"
									cy="50"
									fill="none"
									stroke="#e15b64"
									stroke-width="10"
									r="35"
									stroke-dasharray="164.93361431346415 56.97787143782138"
								>
									<animateTransform
										attributeName="transform"
										type="rotate"
										repeatCount="indefinite"
										dur="1s"
										values="0 50 50;360 50 50"
										keyTimes="0;1"
									></animateTransform>
								</circle>
							</svg>
						</button>
						<div class="text-gray-400 text-ms">
							{{ comment?.commentLikes.length }}
						</div>
					</div>
				</div>
				<div class="text-xs mt-0.5 text-gray-500">
					{{ timeSince(new Date(comment.createdAt)) }} ago
				</div>
			</div>
		</div>
		<!-- show more -->
		<div v-if="commentsLenght > 3" class="ml-14">
			<NuxtLink :to="`/content/${postId}`" class="text-xs text-gray-500">
				Show more
			</NuxtLink>
		</div>
		<!-- create comment -->
	</div>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
	import { useAuthStore } from '@/stores/auth.store';
	import { useContentStore } from '@/stores/content.store';
	import { timeSince } from '~~/utils';

	const props = defineProps({
		comment: Object,
		commentsLenght: Number,
		postId: String,
	});
	const authStore = useAuthStore();
	const contentStore = useContentStore();
	const { user } = storeToRefs(authStore);

	const commentLikeLoading = ref(false);

	const isCommentLiked = computed(() => {
		let liked;
		props.comment.commentLikes.forEach((like) => {
			liked = like.userId === user.value.id;
		});
		return liked;
	});

	async function handleLike(comment) {
		commentLikeLoading.value = true;
		const likeData = { commentId: comment.id, userId: user.value.id };
		await contentStore.initLikeComment(likeData, user.value.token).then(() => {
			commentLikeLoading.value = false;
		});
	}
</script>
