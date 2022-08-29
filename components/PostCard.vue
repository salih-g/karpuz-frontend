<template>
	<div class="card bg-white rounded-lg p-4 w-full md:w-3/4">
		<!-- card header -->
		<NuxtLink :to="`/user/${user.username}`">
			<div class="rounded-full flex flex-row px-2 py-3 mx-3">
				<img
					class="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
					alt="User avatar"
					:src="`https://avatars.dicebear.com/api/big-smile/${post.user.username}.svg?b=%23c8ccd5&r=50&scale=82`"
				/>
				<div class="flex flex-col mb-2 ml-4 mt-1">
					<div class="text-gray-600 text-sm font-semibold">
						{{ post.user.username }}
					</div>
					<small class="text-gray-400 font-thin text-xs">
						12 days ago
						<!-- {{ timeSince(new Date(post.createdAt)) }} ago -->
					</small>
				</div>
			</div>
		</NuxtLink>
		<!-- card body -->
		<NuxtLink :to="`/content/${post.id}`">
			<p class="text-gray-500 text-sm mb-3 mx-3 px-2" v-html="post.body"></p>
		</NuxtLink>
		<!-- card actions -->
		<div class="card-actions flex justify-between items-center">
			<div class="mx-5 text-xs">
				<div class="flex text-gray-700 font-normal">
					Comments:
					<div class="ml-1 text-gray-400 text-ms">
						<!-- {{ post.comments.length }} -->10
					</div>
				</div>
			</div>
			<div class="flex text-gray-700 rounded-md items-center flex-end text-sm">
				<button
					class="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 p-2 rounded-full text-gray-100 cursor-pointer mr-2"
					@click="handleLike(post)"
					v-if="user !== null"
				>
					<svg
						v-if="!singlePostLoading"
						class="h-4 w-4 text-red-500"
						:fill="isPostLiked ? 'currentColor' : 'none'"
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
						v-if="singlePostLoading"
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
				Likes:
				<div class="ml-1 text-gray-400 text-ms">
					{{ post?.postLikes.length }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
	import { useAuthStore } from '@/stores/auth.store';
	import { useContentStore } from '@/stores/content.store';
	import content from '~~/fetch/content';
	const props = defineProps({
		post: Object,
	});

	const authStore = useAuthStore();
	const contentStore = useContentStore();
	const { user } = storeToRefs(authStore);
	const { singlePostLoading } = storeToRefs(contentStore);

	const isPostLiked = computed(() => {
		let liked;
		props.post.postLikes.forEach((like) => {
			liked = like.userId === user.value.id;
		});
		return liked;
	});

	async function handleLike(post) {
		const likeData = { postId: post.id, userId: user.value.id };
		await contentStore.initLikePost(likeData, user.value.token);
		props.post = await content.fetchPostById(props.post.id);
	}
</script>
