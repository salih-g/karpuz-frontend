import auth from '@/api/auth';
import { defineStore } from 'pinia';
import router from '@/router';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		user: JSON.parse(localStorage.getItem('user')),
		loginError: null,
		registerError: null,
	}),
	actions: {
		async login(userData) {
			try {
				const user = await auth.login(userData);

				this.user = user.data;
				localStorage.setItem('user', JSON.stringify(user));

				router.push('/').then(() => window.location.reload());
			} catch (error) {
				this.loginError = error.response.data;
			}
		},

		async register(userData) {
			try {
				const user = await auth.register(userData);

				this.user = user.data;
				localStorage.setItem('user', JSON.stringify(user));

				router.push('/').finally(() => window.location.reload());
			} catch (error) {
				this.registerError = error.response.data;
			}
		},
		logout() {
			this.user = null;
			localStorage.clear('user');
		},
	},
});
