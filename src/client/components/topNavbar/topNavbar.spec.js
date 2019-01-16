import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import TopNavbar from './topNavbar.vue';

describe('TopNavbar - with shallowMount', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TopNavbar, {
      data() {
        return {
          menuItems: [
            { label: 'Home', link: '/' },
            { label: 'Playlists', link: '/playlists' },
            { label: 'Paramètres', link: '/settings' },
            { label: 'Foo', link: '/bar' }
          ]
        };
      },
      stubs: { 'router-link': RouterLinkStub }
    });
  });

  it('has the right number of items in the menu', () => {
    expect(wrapper.findAll('li').length).toBe(4);
  });

  it('has the right label in the list item', () => {
    const items = wrapper.findAll('li');
    const secondItem = items.at(1);
    expect(secondItem.text()).toBe('Playlists');
  });

  it('has <a> tag in the list item', () => {
    const items = wrapper.findAll('li');
    const secondItem = items.at(1);
    expect(secondItem.contains('a')).toBe(true);
  });
});
