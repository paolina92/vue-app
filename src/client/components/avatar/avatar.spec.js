import { mount } from '@vue/test-utils';
import Avatar from './avatar.vue';

describe('Avatar - with mount', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Avatar);
    wrapper.setProps({ username: 'John Doe', avatarImgSrc: 'foo/bar.jpg' });
  });

  it('has a username', () => {
    expect(wrapper.find('#avatar-username').text()).toBe('John Doe');
  });

  it('has a valid src for the avatar image', () => {
    expect(wrapper.find('img').attributes('src')).toBe('foo/bar.jpg');
  });
});
