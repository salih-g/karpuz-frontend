<template>
	<form
		class="card bg-white rounded-lg mb-6 p-4 w-full md:w-3/4 mt-10 text-gray-600"
	>
		<textarea
			name="message"
			placeholder="Type something..."
			class="focus:outline-none w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 textarea"
			maxlength="240"
			rows="3"
		></textarea>
		<!-- footer -->
		<div class="flex justify-between mt-2">
			<div class="flex gap-2 mt-1">
				<!-- process bar -->
				<div
					class="radial-progress text-error"
					style="--value: 10; --size: 2rem; --thickness: 6px"
				></div>
			</div>
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
