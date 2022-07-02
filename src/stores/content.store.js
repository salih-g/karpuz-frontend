import content from '@/api/content';
import { defineStore } from 'pinia';

export const useContentStore = defineStore('content', {
	state: () => ({
		feed: [],
		contentError: '',
	}),
	actions: {
		async createContent(data) {
			try {
				await content.createContent(data);
			} catch (error) {
				this.contentError = error.response.data;
			}
		},
	},
});
