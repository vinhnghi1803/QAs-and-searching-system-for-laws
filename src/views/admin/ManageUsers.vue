<template>
  <v-container fluid>
    <!-- Card Wrapper -->
    <v-card>
      <v-card-title>
        <span class="text-h6">Quản lý tài khoản</span>
        <v-spacer></v-spacer>
        <v-btn class="mx-2" :class="{ 'custom-loader': isLoading }" fab dark small color="cyan" @click="fetchUser">
          <v-icon dark> mdi-cached </v-icon>
        </v-btn>
      </v-card-title>

      <!-- Data Table -->
      <v-data-table
        :loading="isLoading"
        :headers="headers"
        :items="users"
        :items-per-page="pageSize"
        :page.sync="page"
        :server-items-length="totalElements"
        :options.sync="options"
        @update:options="fetchUser"
        @update:items-per-page="updatePageSize"
        :footer-props="{ itemsPerPageOptions: [10, 20, 50] }"
        class="elevation-1"
      >
        <template slot="item.stt" slot-scope="{ index }">
          {{ index + 1 + (page - 1) * pageSize }}
        </template>
        <template slot="item.genders" slot-scope="{ item }">
          <v-chip :color="item.genders === 'Male' ? 'blue' : 'pink'" dark>
            {{ item.genders }}
          </v-chip>
        </template>
        <template slot="item.roles" slot-scope="{ item }">
          <v-chip-group>
            <v-chip v-for="role in item.roles" :key="role.id" :color="getRoleColor(role.name)" dark>
              {{ formatRoleName(role.name) }}
            </v-chip>
          </v-chip-group>
        </template>
        <template slot="item.status" slot-scope="{ item }">
          <v-chip :color="item.status === 'ACTIVE' ? 'green' : 'red'" dark>
            {{ item.status === 'ACTIVE' ? 'Hoạt động' : 'Khóa' }}
          </v-chip>
        </template>
        <template slot="item.actions" slot-scope="{ item }">
          <v-btn v-if="item.id !== user.id" icon :color="item.status === 'ACTIVE' ? 'red' : 'green'" @click="toggleUserStatus(item)">
            <v-icon>{{ item.status === 'ACTIVE' ? 'mdi-account-cancel' : 'mdi-account-check' }}</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
    <confirm-dialog ref="confirmDialog" :message="confirmMessage" @confirm="handleConfirm" />
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout">
      {{ snackbar.message }}
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import ConfirmDialog from '@/components/ConfirmDialog'

export default {
  components: {
    ConfirmDialog
  },
  data() {
    return {
      // Headers for the table
      headers: [
        { text: 'STT', value: 'stt', align: 'start', sortable: false },
        { text: 'ID', value: 'id', align: 'start', sortable: true },
        { text: 'Họ Tên', value: 'fullname', sortable: true },
        { text: 'Email', value: 'email' },
        { text: 'Điện thoại', value: 'phone' },
        { text: 'Giới tính', value: 'genders' },
        { text: 'Ngày sinh', value: 'birthdays' },
        { text: 'Quê quán', value: 'locales' },
        { text: 'Địa chỉ', value: 'addresses' },
        { text: 'Vai trò', value: 'roles' },
        { text: 'Nguồn', value: 'source' },
        { text: 'Trạng thái', value: 'status' },
        { text: '', value: 'actions', sortable: false }
      ],
      users: [],
      page: 1,
      pageSize: 10,
      totalElements: 0,
      options: {},
      isLoading: false,
      isDialogOpen: false,
      selectedUser: null,
      confirmMessage: '',
      snackbar: {
        show: false,
        message: '',
        color: '',
        timeout: 2000
      }
    }
  },
  methods: {
    async fetchUser() {
      const { sortBy, sortDesc } = this.options

      const params = {
        page: this.page - 1,
        size: this.pageSize,
        sort: sortBy.length ? `${sortBy[0]},${sortDesc[0] ? 'desc' : 'asc'}` : ''
      }

      this.isLoading = true

      try {
        const response = await axios.get(`${process.env.VUE_APP_BE_URL}/api/admin/user/list`, {
          params,
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        this.users = response.data.content
        this.totalElements = response.data.totalElements
      } catch (error) {
        console.error('Error fetching laws:', error)
      }
      setTimeout(() => {
        this.isLoading = false
      }, 1500)
    },
    getRoleColor(roleName) {
      switch (roleName) {
        case 'ROLE_ADMIN':
          return 'red lighten-3'
        case 'ROLE_USER':
          return 'green lighten-3'
        default:
          return 'grey'
      }
    },
    formatRoleName(roleName) {
      return roleName.replace('ROLE_', '')
    },
    updatePageSize(newPageSize) {
      this.pageSize = newPageSize
      this.page = 1
      this.fetchLaws()
    },
    toggleUserStatus(user) {
      this.selectedUser = user
      this.confirmMessage =
        user.status === 'ACTIVE' ? `Bạn có chắc muốn khóa người dùng ${user.fullname}?` : `Bạn có chắc muốn mở khóa người dùng ${user.fullname}?`
      this.$refs.confirmDialog.open()
    },
    async handleConfirm() {
      try {
        const action = this.selectedUser.status === 'ACTIVE' ? 'ban' : 'unban'
        await axios.put(
          `${process.env.VUE_APP_BE_URL}/api/admin/user/${this.selectedUser.id}/${action}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`
            }
          }
        )
        this.fetchUser()
        this.showSnackbar(
          `Đã được ${action === 'ban' ? 'khóa' : 'mở khóa'} ${this.selectedUser.fullname} thành công!`,
          action === 'ban' ? 'red' : 'green'
        )
      } catch (error) {
        console.error(`Error ${this.selectedUser.status === 'ACTIVE' ? 'banning' : 'unbanning'} user:`, error)
        this.showSnackbar(`Không thể ${this.selectedUser.status === 'ACTIVE' ? 'khóa' : 'mở khóa'} người dùng!`, 'error')
      }
    },
    showSnackbar(message, color) {
      this.snackbar.message = message
      this.snackbar.color = color
      this.snackbar.show = true
    }
  },
  watch: {
    page() {
      this.fetchUser()
    }
  },
  computed: {
    ...mapGetters({
      token: 'getToken',
      user: 'getLoginUserInfo'
    })
  },
  mounted() {
    this.fetchUser()
  }
}
</script>

<style scoped>
.v-card-title {
  font-weight: bold;
}

.v-data-table {
  margin-top: 16px;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
