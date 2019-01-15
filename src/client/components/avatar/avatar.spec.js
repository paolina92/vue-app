import { shallowMount } from '@vue/test-utils';
import Avatar from './avatar.vue';

describe('Avatar - with shallowMount', () => {
  const wrapper = shallowMount(Avatar);
  it('has a title', () => {
    expect(wrapper.contains('h1')).toBe(true);
  });
});
