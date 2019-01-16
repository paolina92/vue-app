<template>
  <div>
    <topNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import TopNavbar from './components/topNavbar/topNavbar.vue';

export default {
  components: {
    topNavbar: TopNavbar
  }
};
</script>
