import { beforeAll, describe, expect, test } from 'vitest';

import { setActivePinia, createPinia } from 'pinia';

import { useAuthStore } from '@/stores/auth.store';

beforeAll(async () => {
	setActivePinia(createPinia());
});

describe('Auth Store tests', async () => {
	let authStore;

	beforeAll(() => {
		authStore = useAuthStore();
	});

	afterEach(() => {
		authStore.$reset();
	});

	test('References a store', () => {
		expect(authStore).toBeDefined();
	});

	test('Has null user on init', () => {
		expect(authStore.user).toBeNull();
	});

	describe('Login tests', () => {
		test('Successfully login', async () => {
			await authStore.login({
				username: 'test',
				password: 'test',
			});

			console.log(authStore);
		});
	});
});
