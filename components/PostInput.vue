<template>
	<form
		class="bg-white shadow rounded-lg mb-6 p-4 w-full md:w-3/4 mt-10 text-gray-600"
	>
		<textarea
			name="message"
			placeholder="Type something..."
			class="focus:outline-none w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
			maxlength="240"
			rows="3"
		></textarea>
		<!-- footer -->
		<div class="flex justify-end mt-2">
			<button
				class="flex items-center py-2 px-4 rounded-lg text-sm bg-red-500 text-white shadow-lg"
			>
				Send
				<svg
					class="ml-1"
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
		</div>
	</form>
</template>
