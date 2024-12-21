<template>
  <v-app dark>
    <!-- Header -->
    <Header @toggle-drawer="toggleDrawer" :title="title" />

    <!-- Sidebar -->
    <v-navigation-drawer dark v-model="drawer" app width="250" color="grey darken-4">
      <v-list dense>
        <v-subheader class="white--text">Quản lý</v-subheader>
        <v-divider></v-divider>

        <v-list-item link @click="$router.push('/admin/users')">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Quản lý tài khoản</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="$router.push('/admin/statistics')">
          <v-list-item-icon>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Thống kê thu chi</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="$router.push('/admin/law-documents')">
          <v-list-item-icon>
            <v-icon>mdi-book-open-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Quản lý tài liệu luật</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="custom-main">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/Header.vue')
  },
  data() {
    return {
      drawer: null,
      title: 'Admin'
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style scoped>
.custom-main {
  background-color: #e0e0e0;
}
</style>
