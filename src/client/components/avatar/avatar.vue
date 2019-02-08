<template>
  <div>
    <aside id="avatar-username">{{username}}</aside>
    <aside>
      <img :src="avatarImgSrc" alt='user avatar' />
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    avatarImgSrc: String
  }
};
</script>

<style scoped>

</style>
