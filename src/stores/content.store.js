import content from '@/api/content';
import { defineStore } from 'pinia';

export const useContentStore = defineStore('content', {
	state: () => {
		return { feed: [], contentError: '', singlePost: {}, searchParam: '' };
	},
	actions: {
		async createContent(data) {
			try {
				await content.createContent(data);
				await this.getAllContents();
			} catch (error) {
				this.contentError = error.response.data;
			}
		},

		async likeContent(data) {
			try {
				await content.likeContent(data);
				await this.getAllContents();
			} catch (error) {
				this.contentError = error.response.data;
			}
		},

		async createComment(data) {
			try {
				await content.createComment(data);
				await this.getAllContents();
			} catch (error) {
				this.contentError = error.response.data;
			}
		},

		async getAllContents() {
			try {
				const response = await content.getAllContents();
				this.feed = response.data;
			} catch (error) {
				this.contentError = error.response.data;
			}
		},
		async getContentById(contentId) {
			try {
				const response = await content.getContentById(contentId);
				this.singlePost = response.data;
			} catch (error) {
				this.contentError = error.response.data;
			}
		},
	},
});
