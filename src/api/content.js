import axios from './axios';

export default {
	createContent: async (data) => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${data.token}`,
		};
		const postData = {
			username: data.user.username,
			post: data.content,
		};

		const res = await axios().post('/v1/content/create', postData, {
			headers,
		});

		return res.data;
	},

	getAllContents: async () => {
		return await axios().get('v1/content/paginated');
	},
};
