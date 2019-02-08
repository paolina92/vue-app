<template>
  <ul class="topmenu">
    <li v-for="(item, index) in menuItems" :key="index" class="topmenu__item">
      <router-link :to="{ path: item.link}" class="topmenu__item__link">
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
        { label: 'Paramètres', link: '/settings' },
      ]
    };
  }
};
</script>

<style scoped>
  .topmenu__item {
    list-style-type: none;
    display: inline-block;
    margin: 0 10px;
  }
  .topmenu__item__link {
    text-decoration: none;
  }
</style>
