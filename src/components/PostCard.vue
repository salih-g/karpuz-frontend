<template>
	<div class="bg-white shadow rounded-lg mb-6 p-4 w-full md:w-3/4 mt-10 ">
		<div class="flex flex-row px-2 py-3 mx-3">
			<div class="w-auto h-auto rounded-full">
				<img class="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
					alt="User avatar"
					:src="`https://avatars.dicebear.com/api/big-smile/${post.username}.svg?b=%23c8ccd5&r=50&scale=82`">
			</div>
			<div class="flex flex-col mb-2 ml-4 mt-1">
				<div class="text-gray-600 text-sm font-semibold">{{ post.username }}
				</div>
				<small class="text-gray-400 font-thin text-xs">
					{{ post.createdAt }} seconds ago
				</small>
			</div>
		</div>
		<div class="text-gray-500 text-sm mb-2 mx-3 px-2">{{ post.content }} </div>

		<div class="flex w-full border-t border-gray-100">
			<div class="mt-3 mx-5 flex flex-row text-xs">
				<div
					class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
					Comments:<div class="ml-1 text-gray-400 text-ms">
						{{ post.comments.length }} </div>
				</div>

			</div>
			<div class="mt-3 mx-5 w-full flex justify-end text-xs">

				<div class="flex text-gray-700 rounded-md items-center">
					<span
						class="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer mr-2 ">
						<svg class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24"
							stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round"
								d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">
							</path>
						</svg>
					</span>
					Likes: <div class="ml-1 text-gray-400  text-ms">{{ post.likes }}
					</div>
				</div>
			</div>
		</div>

		<div
			class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
			<img
				class="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
				alt="User avatar"
				:src="`https://avatars.dicebear.com/api/big-smile/${post.username}.svg?b=%23c8ccd5&r=50&scale=82`">
			<span class="absolute inset-y-0 right-0 flex items-center pr-6">

			</span>
			<input type="search"
				class="w-full py-2 pl-4 pr-4 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
				style="border-radius: 25px" placeholder="Post a comment..."
				autocomplete="off">
		</div>
	</div>
</template>

<script setup>

defineProps({
	post: Object,
});


</script>


<style scoped>
</style>
