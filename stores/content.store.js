import { defineStore } from 'pinia';

import content from '~~/fetch/content';

export const useContentStore = defineStore('content', {
	state: () => ({
		feed: [],
		fetchError: null,
		fetchLoading: false,
		postLikeLoading: false,
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
			this.fetchLoading = true;
			try {
				await content.createPost(
					{ userId: user.id, body: postBody },
					user.token,
				);
				await this.initFetchPosts().then(() => {
					this.fetchLoading = false;
				});
			} catch (error) {
				this.fetchError = error.response.data;
			}
		},

		async initLikePost(likeBody, token) {
			this.postLikeLoading = true;
			try {
				await content.likePost(likeBody, token);
				await this.initFetchPosts().then(() => {
					this.postLikeLoading = false;
				});
			} catch (error) {
				this.fetchError = error.response.data;
			}
		},
	},
});
