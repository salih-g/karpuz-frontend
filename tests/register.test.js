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

	test('Test password match', () => {
		const wrapper = mount(Register);

		wrapper.vm.user.username = 'test';
		wrapper.vm.user.password = 'test';
		wrapper.vm.user.repeatPassword = 'test2';

		wrapper.vm.handleRegister();

		expect(authStore.registerError.message).toEqual("Password doesn't match");
	});
});
