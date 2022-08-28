<template>
	<form
		class="card bg-white rounded-lg mb-6 p-4 w-full md:w-3/4 mt-10 text-gray-600 flex flex-row items-center"
		@submit.prevent="handleSubmit"
	>
		<textarea
			name="message"
			placeholder="Type something..."
			class="focus:outline-none w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 textarea"
			maxlength="240"
			rows="1"
			v-model="postBody"
		></textarea>
		<!-- process bar -->
		<div
			class="radial-progress text-error absolute bottom-6 right-28"
			:style="`--value: ${postLenght}; --size: 1.5rem; --thickness: 6px`"
		></div>
		<!-- footer -->
		<button
			:class="
				loading
					? 'btn btn-primary loading flex items-center justify-center ml-2 rounded-lg  bg-red-500 '
					: 'btn btn-primary  ml-2 px-5 rounded-lg bg-red-500 h-fit'
			"
		>
			<svg
				v-if="!loading"
				class="mr-0.5"
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
		</button>
	</form>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
	import { useAuthStore } from '@/stores/auth.store';
	import { useContentStore } from '@/stores/content.store';
	import { isOnlyWhiteSpace } from '~~/utils';

	const contentStore = useContentStore();
	const authStore = useAuthStore();
	const { user } = storeToRefs(authStore);
	const { loading } = storeToRefs(contentStore);
	const postBody = ref('');
	const postLenght = computed(() => {
		return (postBody.value.length * 100) / 240;
	});
	async function handleSubmit() {
		if (isOnlyWhiteSpace(postBody.value)) {
			postBody.value = '';
			return;
		}
		await contentStore.initCreatePost(postBody.value, user.value);
		postBody.value = '';
	}
</script>
