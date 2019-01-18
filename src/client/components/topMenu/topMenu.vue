<template>
  <ul>
    <li v-for="(item, index) in menuItems" :key="index">
      <router-link :to="{ path: item.link}">
        {{ item.label }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: 'Home', link: '/' },
        { label: 'Playlists', link: '/playlists' },
        { label: 'Paramètres', link: '/settings' }
      ]
    };
  }
};
</script>
