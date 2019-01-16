import { storiesOf } from '@storybook/vue';

import TopNavbar from './topNavbar.vue';

storiesOf('TopNavbar', module)
  .add('story as a component', () => ({
    components: { TopNavbar },
    template: '<TopNavbar />'
  }));
