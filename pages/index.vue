<template>
	<div v-if="false">
		<main class="w-full max-w-4xl items-center mx-auto px-6">
			<PostInput class="centerDiv50" />
		</main>
	</div>

	<div v-if="true">
		<main class="w-full max-w-4xl items-center mx-auto px-6">
			<PostInputSkeleton class="centerDiv50" />
			<PostCardSkeleton class="centerDiv50" />
			<PostCardSkeleton class="centerDiv50" />
			<PostCardSkeleton class="centerDiv50" />
		</main>
	</div>
</template>

<style>
	.centerDiv50 {
		margin: 50px auto;
	}

	.maxWidth {
		max-width: 250px;
	}
</style>
