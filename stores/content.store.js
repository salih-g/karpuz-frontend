import { defineStore } from 'pinia';

import content from '~~/fetch/content';

export const useContentStore = defineStore('content', {
	state: () => ({
		feed: [],
		fetchError: null,
		fetchLoading: false,
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

		async initCreateComment(commentBody, token) {
			try {
				await content.createComment(commentBody, token);
				await this.initFetchPosts();
			} catch (error) {
				this.fetchError = error.response.data;
			}
		},

		async initLikePost(likeBody, token) {
			try {
				await content.likePost(likeBody, token);
				await this.initFetchPosts();
			} catch (error) {
				this.fetchError = error.response.data;
			}
		},
		async initLikeComment(likeBody, token) {
			try {
				await content.likeComment(likeBody, token);
				await this.initFetchPosts();
			} catch (error) {
				this.fetchError = error.response.data;
			}
		},
	},
});
