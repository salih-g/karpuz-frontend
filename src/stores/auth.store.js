import auth from '@/api/auth';
import { defineStore } from 'pinia';
import router from '@/router';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		// initialize state from local storage to enable user to stay logged in
		user: JSON.parse(localStorage.getItem('user')),
		returnUrl: null,
	}),
	actions: {
		async login(userData) {
			const user = await auth.login(userData);

			if (user.error) {
				return console.log(user.error);
			}
			this.user = user;
			localStorage.setItem('user', JSON.stringify(user));
			router.push('/');
		},

		async register(userData) {
			const user = await auth.register(userData);

			if (user.error) {
				return console.log(user.error);
			}
			this.user = user;
			localStorage.setItem('user', JSON.stringify(user));
			router.push('/');
		},
	},
});
