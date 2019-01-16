import { storiesOf } from '@storybook/vue';

import Avatar from './avatar.vue';

storiesOf('Avatar', module)
  .add('story as a component', () => ({
    components: { Avatar },
    template: '<Avatar />'
  }));
