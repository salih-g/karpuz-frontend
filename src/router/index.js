import { storeToRefs } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from '@/stores/auth.store';

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('../views/HomeView.vue'),
	},
	{
		path: '/content/:id',
		name: 'content',
		component: () => import('../views/Content.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/Register.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.beforeEach((to, _, next) => {
	const authStore = useAuthStore();
	const { user } = storeToRefs(authStore);

	if ((to.name === 'login' || to.name === 'register') && user.value)
		next({ name: 'home' });
	else next();
});

export default router;
