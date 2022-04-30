import { mount } from '@vue/test-utils';
import Template from '../src/components/Template.vue';
test('Mount Template.vue', async () => {
	expect(Template).toBeTruthy();

	const msg = 'new message';

	const wrapper = mount(Template, {
		props: {
			msg,
		},
	});

	expect(wrapper.text()).toBe(msg);
});
