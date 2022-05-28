import { beforeAll, describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import { setActivePinia, createPinia } from 'pinia';

import Register from '@/views/Register.vue';

import { useAuthStore } from '@/stores/auth.store';

beforeAll(async () => {
	setActivePinia(createPinia());
});

describe('Register view tests', async () => {
	let authStore;

	beforeEach(() => {
		authStore = useAuthStore();
	});

	afterEach(() => {
		authStore.$reset();
	});

	test('Register.vue', async () => {
		expect(Register).toBeTruthy();
	});

	test('References a store', () => {
		expect(authStore).toBeDefined();
	});

	test('Test', () => {
		const wrapper = mount(Register, {
			data() {
				return {
					username: 'test',
					password: 'sdsdsd',
					repeatPassword: 'testsdsds1',
				};
			},
		});

		wrapper.vm.handleRegister();

		console.log(authStore.registerError);
	});
});
