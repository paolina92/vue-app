<template>
  <div>
    <header class="header">
      <aside>
        <topMenu v-bind:connectedUser='connectedUser' />
      </aside>
      <aside>
        <avatar
          v-bind:username='connectedUser.username'
          v-bind:avatarImgSrc='connectedUser.avatarImgSrc'
        />
      </aside>
    </header>
    <router-view v-bind:username='connectedUser.username'></router-view>
  </div>
</template>

<script>
import TopMenu from './components/topMenu/topMenu.vue';
import Avatar from './components/avatar/avatar.vue';

export default {
  components: {
    topMenu: TopMenu,
    avatar: Avatar
  },
  data() {
    return {
      connectedUser: {
        username: '',
        avatarImgSrc: ''
      }
    };
  },
  created() {
    fetch('/api/getConnectedUser')
      .then(res => res.json())
      .then((data) => {
        this.connectedUser.username = data.username;
        this.connectedUser.avatarImgSrc = data.avatar.src;
      });
  }
};
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }
</style>
