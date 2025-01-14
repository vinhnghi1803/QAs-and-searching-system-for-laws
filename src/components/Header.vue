<template>
  <v-app-bar app clipped-right flat height="72" color="grey darken-4" dark>
    <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn v-if="isAdmin" href="/admin/users" color="cyan lighten-5" class="switch-btn" dark :disabled="isAdminRoute">Admin</v-btn>
    <v-btn :href="path" color="cyan lighten-5" class="switch-btn" dark>Switch to {{ endpoint }}</v-btn>
    <v-menu bottom min-width="200px" rounded offset-y :nudge-top="-15">
      <template v-slot:activator="{ on }">
        <v-btn icon x-large v-on="on">
          <v-avatar color="indigo" dark>
            <v-icon dark> mdi-account-circle </v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <h5 class="mt-1">{{ user.fullName }}</h5>
            <h5 class="mt-1">{{ user.email }}</h5>
            <p class="text-caption mt-1">Số dư: {{ balance }}</p>
            <v-divider class="my-3"></v-divider>
            <v-layout column>
              <v-btn disabled depressed rounded text> Đổi mật khẩu </v-btn>
              <v-btn depressed rounded @click="openTransactionHistoryDialog"> Lịch sử giao dịch </v-btn>
              <v-btn depressed rounded @click="openStatisticsDialog"> Thống kê </v-btn>
              <v-btn depressed rounded @click="openDepositDialog"> Nạp tiền (Momo) </v-btn>
            </v-layout>
            <v-divider class="my-3"></v-divider>
            <logout-button />
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
    <momo-payment ref="depositDialog" />
    <transaction-history ref="transactionHistoryDialog" />
    <statistics ref="statisticsDialog" />
  </v-app-bar>
</template>

<script>
import LogoutButton from '@/components/LogoutButton.vue'
import { mapGetters } from 'vuex'
import MomoPayment from '@/views/transaction/MomoPayment.vue'
import TransactionHistory from '@/views/transaction/TransactionHistory.vue'
import Statistics from '@/views/transaction/Statistics.vue'

export default {
  components: {
    LogoutButton,
    MomoPayment,
    TransactionHistory,
    Statistics
  },
  props: {
    title: { type: String, required: true }
  },
  data() {
    return {
      path: '',
      endpoint: ''
    }
  },
  computed: {
    ...mapGetters({
      isAdmin: 'isAdmin',
      user: 'getLoginUserInfo',
      token: 'getToken',
      balance: 'getBalance'
    }),
    isAdminRoute() {
      return this.$route.path.startsWith('/admin')
    }
  },
  created() {
    this.endpoint = this.$route.path === '/home' ? 'Search' : 'Chat'
    this.path = this.$route.path === '/home' ? '/laws' : '/home'
    this.$store.dispatch('fetchBalance')
  },
  methods: {
    toggleDrawer() {
      this.$emit('toggle-drawer')
    },
    openDepositDialog() {
      this.$refs.depositDialog.open()
    },
    openTransactionHistoryDialog() {
      this.$refs.transactionHistoryDialog.open()
    },
    openStatisticsDialog() {
      this.$refs.statisticsDialog.open()
    }
  }
}
</script>

<style scoped>
.switch-btn {
  margin-right: 8px;
  color: #000 !important;
}
</style>
