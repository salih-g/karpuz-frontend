import content from '@/api/content';
import { defineStore } from 'pinia';

export const useContentStore = defineStore('content', {
	state: () => {
		return { feed: [], contentError: '' };
	},
	actions: {
		async createContent(data) {
			try {
				const response = await content.createContent(data);
				this.feed.unshift(response);
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
	},
});
