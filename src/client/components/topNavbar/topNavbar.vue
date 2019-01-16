<template>
  <header>
    <aside>
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">{{ item }}</li>
      </ul>
    </aside>
    <aside>
      <avatar />
    </aside>
  </header>
</template>

<script>
import Avatar from '../avatar/avatar.vue';

export default {
  data() {
    return {
      menuItems: ['Playlists', 'Paramètres']
    };
  },
  components: {
    avatar: Avatar
  }
};
</script>
