<template>
	<div
		class="card bg-white rounded-lg mb-6 p-4 w-full md:w-3/4 mt-10 text-gray-600 animate-pulse"
	>
		<div
			class="focus:outline-none w-full rounded-lg p-2 text-sm border border-transparent appearance-none rounded-tg h-20 bg-gray-300"
		></div>
		<!-- footer -->
		<div class="flex justify-between mt-2">
			<div class="flex gap-2 mt-1">
				<!-- process bar -->
				<div
					class="radial-progress text-gray-300"
					style="--value: 50; --size: 2rem; --thickness: 6px"
				></div>
			</div>
			<button
				class="btn border-none mt-2 flex items-center rounded-lg text-sm bg-gray-300 shadow-lg w-24"
			></button>
		</div>
	</div>
</template>
