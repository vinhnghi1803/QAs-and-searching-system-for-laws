<template>
  <v-container fluid>
    <!-- Card Wrapper -->
    <v-card>
      <v-card-title>
        <span class="text-h6">Quản lý tài khoản</span>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="refreshData">Tải lại</v-btn>
      </v-card-title>

      <!-- Data Table -->
      <v-data-table :headers="headers" :items="users" :items-per-page="10" :footer-props="{ 'items-per-page-options': [] }" class="elevation-1">
        <!-- Custom Gender Column -->
        <template slot="item.genders" slot-scope="{ item }">
          <v-chip :color="item.genders === 'Male' ? 'blue' : 'pink'" dark>
            {{ item.genders }}
          </v-chip>
        </template>

        <!-- Actions Column -->
        <template slot="item.actions" slot-scope="{ item }">
          <v-btn icon color="primary" @click="editUser(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="red" @click="deleteUser(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // Headers for the table
      headers: [
        { text: 'ID', value: 'id', align: 'start', sortable: true },
        { text: 'Họ Tên', value: 'fullname', sortable: true },
        { text: 'Email', value: 'email' },
        { text: 'Điện thoại', value: 'phone' },
        { text: 'Giới tính', value: 'genders' },
        { text: 'Ngày sinh', value: 'birthdays' },
        { text: 'Quê quán', value: 'locales' },
        { text: 'Địa chỉ', value: 'addresses' },
        { text: 'Nguồn', value: 'source' },
        { text: '', value: 'actions', sortable: false }
      ],
      // Example User Data
      users: [
        {
          id: 1,
          fullname: 'Test',
          email: 'test@gmail.com',
          phone: '0123456789',
          genders: 'Male',
          birthdays: '2001-02-15',
          locales: '---',
          addresses: 'AAA',
          source: 'LOCAL'
        },
        {
          id: 2,
          fullname: 'Nghi Nguyễn Vĩnh',
          email: 'vinhnghi55@gmail.com',
          phone: '+84372739562',
          genders: 'Male',
          birthdays: '2001-09-02',
          locales: '---',
          addresses: 'Quận 7',
          source: 'GOOGLE'
        }
      ]
    }
  },
  methods: {
    // Method to refresh data
    refreshData() {
      console.log('Refresh User Data')
      // Call API here to reload data from DB
    },
    // Edit user method
    editUser(user) {
      console.log('Edit User', user)
      alert(`Edit user: ${user.fullname}`)
    },
    // Delete user method
    deleteUser(user) {
      console.log('Delete User', user)
      if (confirm(`Are you sure you want to delete ${user.fullname}?`)) {
        // Logic để xóa user trong DB
        this.users = this.users.filter((u) => u.id !== user.id)
        alert(`${user.fullname} has been deleted.`)
      }
    }
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
</style>
