<template>
	<div class="bg-white shadow rounded-lg mb-6 p-4 w-full md:w-3/4 mt-10">
		<div class="flex flex-row px-2 py-3 mx-3">
			<div class="w-auto h-auto rounded-full">
				<img
					class="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
					alt="User avatar"
					:src="`https://avatars.dicebear.com/api/big-smile/${post.username}.svg?b=%23c8ccd5&r=50&scale=82`"
				/>
			</div>
			<div class="flex flex-col mb-2 ml-4 mt-1">
				<div class="text-gray-600 text-sm font-semibold">
					{{ post.username }}
				</div>
				<small class="text-gray-400 font-thin text-xs">
					{{ timeSince(new Date(post.createdAt)) }} ago
				</small>
			</div>
		</div>
		<div class="text-gray-500 text-sm mb-2 mx-3 px-2">{{ post.post }}</div>

		<div class="flex w-full border-t border-gray-100">
			<div class="mt-3 mx-5 flex flex-row text-xs">
				<div
					class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center"
				>
					Comments:
					<div class="ml-1 text-gray-400 text-ms">
						{{ post.comments.length }}
					</div>
				</div>
			</div>
			<div class="mt-3 mx-5 w-full flex justify-end text-xs">
				<div class="flex text-gray-700 rounded-md items-center">
					<button
						class="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer mr-2"
						@click="handleLike(post)"
					>
						<svg
							class="h-4 w-4 text-red-500"
							:fill="
								post.likes.includes(user.user.username)
									? 'currentColor'
									: 'none'
							"
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
					</button>
					Likes:
					<div class="ml-1 text-gray-400 text-ms">{{ post.likes.length }}</div>
				</div>
			</div>
		</div>

		<!-- Comments -->
		<div>
			<div
				class="text-gray-600 p-4 flex"
				v-if="showLess"
				v-for="(comment, index) in post.comments.slice(0, 3)"
				:key="index"
			>
				<img
					class="rounded-full h-8 w-8 mr-2 mt-1"
					:src="`https://avatars.dicebear.com/api/big-smile/${comment.username}.svg?b=%23c8ccd5&r=50&scale=82`"
				/>
				<div>
					<div class="bg-gray-100 rounded-lg px-4 pt-2 pb-2.5">
						<div class="font-semibold text-sm leading-relaxed">
							{{ comment.username }}
						</div>
						<div class="text-xs leading-snug md:leading-normal">
							{{ comment.comment }}
						</div>
					</div>
					<div class="text-xs mt-0.5 text-gray-500">
						{{ timeSince(new Date(comment.createdAt)) }} ago
					</div>
					<div
						class="bg-white border border-white rounded-full float-right mr-0.5 flex shadow items-center"
					></div>
				</div>
			</div>
			<div
				class="text-gray-600 p-4 flex"
				v-if="!showLess"
				v-for="(comment, index) in post.comments"
				:key="index"
			>
				<img
					class="rounded-full h-8 w-8 mr-2 mt-1"
					:src="`https://avatars.dicebear.com/api/big-smile/${comment.username}.svg?b=%23c8ccd5&r=50&scale=82`"
				/>
				<div>
					<div class="bg-gray-100 rounded-lg px-4 pt-2 pb-2.5">
						<div class="font-semibold text-sm leading-relaxed">
							{{ comment.username }}
						</div>
						<div class="text-xs leading-snug md:leading-normal">
							{{ comment.comment }}
						</div>
					</div>
					<div class="text-xs mt-0.5 text-gray-500">
						{{ timeSince(new Date(comment.createdAt)) }} ago
					</div>
					<div
						class="bg-white border border-white rounded-full float-right -mt-8 mr-0.5 flex shadow items-center"
					></div>
				</div>
			</div>
			<div v-if="post.comments.length > 3" class="ml-14">
				<button
					v-if="showLess"
					@click="showLess = false"
					class="text-xs text-gray-500"
				>
					Show more
				</button>
				<button
					v-if="!showLess"
					@click="showLess = true"
					class="text-xs text-gray-500"
				>
					Show less
				</button>
			</div>
		</div>

		<!-- Post a comment -->
		<form
			class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400"
			@submit.prevent="handleComment(post)"
		>
			<img
				class="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
				alt="User avatar"
				:src="`https://avatars.dicebear.com/api/big-smile/${post.username}.svg?b=%23c8ccd5&r=50&scale=82`"
			/>
			<span class="absolute inset-y-0 right-0 flex items-center pr-6"> </span>
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
			<progress-ring
				:percentage="postLenght"
				radius="10"
				decimal-size="0"
				int-size="0"
				duration="0"
				class="ml-2"
			></progress-ring>
		</form>
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue';
	import { storeToRefs } from 'pinia';
	import { useAuthStore } from '@/stores/auth.store';
	import { useContentStore } from '@/stores/content.store';
	import { timeSince } from '@/utils';

	const authStore = useAuthStore();
	const contentStore = useContentStore();
	const { user } = storeToRefs(authStore);

	defineProps({
		post: Object,
	});

	const showLess = ref(true);
	const comment = ref('');

	const postLenght = computed(() => {
		return (comment.value.length * 100) / 240;
	});

	async function handleLike(post) {
		const postData = {
			user: user.value.user,
			token: user.value.tokens.token,
			contentId: post._id,
		};
		await contentStore.likeContent(postData);
	}

	async function handleComment(post) {
		console.log(comment.value);
		const commentData = {
			user: user.value.user,
			token: user.value.tokens.token,
			contentId: post._id,
			comment: comment.value,
		};
		comment.value = '';
		await contentStore.createComment(commentData);
	}
</script>

<style scoped></style>
