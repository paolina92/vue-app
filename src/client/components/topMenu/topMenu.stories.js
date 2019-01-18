import { storiesOf } from '@storybook/vue';

import TopMenu from './topMenu.vue';

storiesOf('TopMenu', module)
  .add('story as a component', () => ({
    components: { TopMenu },
    template: '<TopMenu />'
  }));
