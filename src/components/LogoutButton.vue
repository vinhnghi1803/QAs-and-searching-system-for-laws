<template>
  <v-btn @click="logout" color="red" dark>Đăng xuất</v-btn>
</template>

<script>
export default {
  methods: {
    logout() {
      // Clear the token from local storage
      localStorage.removeItem('user')

      // Clear the user state in Vuex store
      this.$store.commit('setLoginUser', null)

      // Redirect to the login page
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
<style scoped></style>
