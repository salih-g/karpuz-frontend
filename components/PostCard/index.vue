<template>
	<div class="card bg-white rounded-lg p-4 w-full md:w-3/4">
		<!-- card header -->
		<NuxtLink :to="`/user/${post.user.username}`">
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
						{{ timeSince(new Date(post.createdAt)) }} ago
					</small>
				</div>
			</div>
		</NuxtLink>
		<!-- card body -->
		<div>
			<p class="text-gray-500 text-sm mb-3 mx-3 px-2" v-html="post.body"></p>
		</div>
		<!-- card actions -->
		<div class="card-actions flex justify-between items-center">
			<!-- comment count-->
			<NuxtLink :to="`/content/${post.id}`" class="mx-5 text-xs">
				<div class="flex text-gray-700 font-normal">
					Comments:
					<div class="ml-1 text-gray-400 text-ms">
						{{ post.comments.length }}
					</div>
				</div>
			</NuxtLink>
			<!-- likes -->
			<div class="flex text-gray-700 rounded-md items-center flex-end text-sm">
				<button
					class="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 p-2 rounded-full text-gray-100 cursor-pointer mr-2"
					@click="handleLike(post)"
					v-if="user !== null"
				>
					<svg
						v-if="!postLikeLoading"
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
						v-if="postLikeLoading"
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
		<!-- comments -->
		<PostCardComments
			v-for="(comment, key) in post.comments.slice(0, 3)"
			:comment="comment"
			:key="key"
			:commentsLenght="post.comments.length"
			:postId="post.id"
		/>
		<!-- create comment -->
		<form
			class="flex items-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400"
			@submit.prevent="handleComment(post)"
			v-if="user !== null"
		>
			<NuxtLink :to="`/user/${user.username}`" class="mr-2">
				<img
					class="w-10 h-10 object-cover rounded-full cursor-pointer"
					alt="User avatar"
					:src="`https://avatars.dicebear.com/api/big-smile/${user.username}.svg?b=%23c8ccd5&r=50&scale=82`"
				/>
			</NuxtLink>
			<input
				type="search"
				class="w-full py-2 pl-4 pr-4 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
				style="border-radius: 25px"
				placeholder="Post a comment..."
				required
				autocomplete="off"
				maxlength="240"
				v-model="comment"
			/>
			<button
				class="flex items-center py-2 px-4 mx-3 rounded-lg text-sm bg-red-500 text-white shadow-lg"
			>
				<svg
					v-if="!createCommentLoading"
					viewBox="0 0 24 24"
					width="16"
					height="16"
					stroke="currentColor"
					stroke-width="2"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="22" y1="2" x2="11" y2="13"></line>
					<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
				</svg>
				<svg
					v-if="createCommentLoading"
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
						stroke="currentColor"
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
		</form>
	</div>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
	import { useAuthStore } from '@/stores/auth.store';
	import { useContentStore } from '@/stores/content.store';
	// import content from '~~/fetch/content';
	import { isOnlyWhiteSpace, timeSince } from '~~/utils';
	const props = defineProps({
		post: Object,
	});

	const postLikeLoading = ref(false);
	const createCommentLoading = ref(false);
	const comment = ref('');

	const authStore = useAuthStore();
	const contentStore = useContentStore();
	const { user } = storeToRefs(authStore);

	const isPostLiked = computed(() => {
		const liked = props.post.postLikes.filter(
			(like) => like.userId === user.value.id,
		);
		return liked.length > 0;
	});

	async function handleLike(post) {
		postLikeLoading.value = true;
		const likeData = { postId: post.id, userId: user.value.id };
		await contentStore
			.initLikePost(likeData, user.value.token)
			.then(() => (postLikeLoading.value = false));
		// props.post = await content.fetchPostById(props.post.id);
	}

	async function handleComment(post) {
		createCommentLoading.value = true;
		if (isOnlyWhiteSpace(comment.value)) {
			comment.value = '';
		}

		const commentData = {
			userId: user.value.id,
			postId: post.id,
			body: comment.value,
		};
		comment.value = '';
		await contentStore
			.initCreateComment(commentData, user.value.token)
			.then(() => (createCommentLoading.value = false));
	}
</script>
