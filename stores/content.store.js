import { defineStore } from 'pinia';

import content from '~~/fetch/content';

export const useContentStore = defineStore('content', {
	state: () => ({
		feed: [],
		fetchError: null,
		loading: false,
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
		async initCreatePost(postBody, user) {
			this.loading = true;
			try {
				await content.createPost(
					{ userId: user.id, body: postBody },
					user.token,
				);
				await this.initFetchPosts().then(() => {
					this.loading = false;
				});
			} catch (error) {
				this.fetchError = error.response.data;
			}
		},
	},
});
