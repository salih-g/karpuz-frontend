import { defineStore } from 'pinia';

import content from '~~/fetch/content';

export const useContentStore = defineStore('content', {
	state: () => ({
		feed: [],
		fetchError: null,
	}),
	actions: {
		async initFetchPosts() {
			try {
				const { data: feed } = await content.fetchPosts();
				this.feed = feed;
			} catch (error) {
				this.fetchError = error.response.data;
			}
		},
		async createPost(postData, user) {
			try {
				await this.initFetchPosts();
			} catch (error) {
				this.fetchError = error.response.data;
			}
		},
	},
});
