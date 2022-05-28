import config from '@/config';
import axios from 'axios';

export default () => {
	return axios.create({
		baseURL: config.BACKEND_URL,
	});
};
