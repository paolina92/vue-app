<template>
  <header>
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: ['Playlists', 'Paramètres']
    }
  }
}
</script>
