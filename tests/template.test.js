import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';

import Template from '../src/components/Template.vue';

beforeEach(async () => {
	setActivePinia(createPinia());
});

test('Template.vue', async () => {
	expect(Template).toBeTruthy();

	const msg = 'new message';

	const wrapper = mount(Template, {
		props: { msg },
	});

	await wrapper.get('button').trigger('click');
	expect(wrapper.text()).toContain('1');
	expect(wrapper.text()).toContain('2');
	expect(wrapper.text()).toContain(msg);
});
