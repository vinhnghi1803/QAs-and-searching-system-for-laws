<template>
  <v-app-bar app clipped-right flat height="72" color="grey darken-4" dark>
    <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn :href="path" color="cyan lighten-5" class="switch-btn" light>Switch to {{ endpoint }}</v-btn>
    <logout-button />
  </v-app-bar>
</template>

<script>
import LogoutButton from '@/components/LogoutButton.vue'

export default {
  components: {
    LogoutButton
  },
  props: {
    title: { type: String, require: true }
  },
  data() {
    return {
      path: '',
      endpoint: ''
    }
  },
  created() {
    this.endpoint = this.$route.path === '/home' ? 'Search' : 'Chat'
    this.path = this.$route.path === '/home' ? '/laws' : '/home'
  },
  methods: {
    toggleDrawer() {
      this.$emit('toggle-drawer')
    }
  }
}
</script>

<style scoped>
.switch-btn {
  margin-right: 8px;
  text-transform: none;
}
</style>
