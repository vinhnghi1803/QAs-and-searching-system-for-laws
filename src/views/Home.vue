<template>
  <div class="home">
    <h1>Welcome Home!</h1>
    <p>This is your personal home page.</p>
    <p v-if="user">Hi, {{ user.displayName }}!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null // Assuming you have user data from login
    }
  },
  created() {
    this.user = this.$store.getters.getLoginUserInfo
    // console.log(this.user)
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>
