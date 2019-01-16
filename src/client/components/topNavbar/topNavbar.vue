<template>
  <header>
    <aside>
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link :to="{ path: item.link}">
            {{ item.label }}
          </router-link>
        </li>
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
      menuItems: [
        { label: 'Home', link: '/' },
        { label: 'Playlists', link: '/playlists' },
        { label: 'Paramètres', link: '/settings' }
      ]
    };
  },
  components: {
    avatar: Avatar
  }
};
</script>
