

<template>
	<div class="w-full">
		<PostInput class="centerDiv50" />
		<PostCard class="centerDiv50" v-for="(post, key) in posts" :key="key"
			:post="post" />

		<!-- <Template msg="Karpuz" /> -->
	</div>
</template>

<script setup>
import { ref } from 'vue';

import PostInput from '../components/PostInput.vue';
import PostCard from '../components/PostCard.vue';
import Template from '../components/Template.vue';


const posts = ref([{
	"id": "1",
	"username": "abbas",
	"content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Incidunt, aspernatur!",
	"comments": [],
	"likes": 5,
	"createdAt": "Sun May 15 2022 19:03:00 GMT+0300 (GMT+03:00)"
}, {
	"id": "2",
	"username": "sudanmerinosu",
	"content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Incidunt, aspernatur!",
	"comments": ["", "", ""],
	"likes": 5,
	"createdAt": "Sun May 15 2022 19:03:00 GMT+0300 (GMT+03:00)"
}, {
	"id": "3",
	"username": "cabbar",
	"content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Incidunt, aspernatur!",
	"comments": [""],
	"likes": 20,
	"createdAt": "Sun May 15 2022 19:03:00 GMT+0300 (GMT+03:00)"
},]);
</script>

<style>
</style>
