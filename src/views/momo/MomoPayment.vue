<template>
  <div>
    <v-dialog v-model="isOpen" max-width="500px">
      <v-card>
        <v-card-title class="headline">Chọn số tiền nạp</v-card-title>
        <v-card-text>
          <v-select v-model="amount" :items="amountOptions" label="Số tiền" item-text="label" item-value="value" outlined dense></v-select>
        </v-card-text>
        <v-card-actions class="action">
          <v-spacer></v-spacer>
          <v-btn rounded dark color="red" @click="close">Hủy</v-btn>
          <v-btn rounded dark color="primary" @click="getDeposit">Nạp tiền</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
      isOpen: false,
      amount: 50000,
      isProcessing: false,
      amountOptions: [
        { label: '50,000 VND', value: 50000 },
        { label: '100,000 VND', value: 100000 },
        { label: '200,000 VND', value: 200000 }
      ]
    }
  },
  computed: {
    ...mapGetters({
      token: 'getToken'
    })
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    async getDeposit() {
      if (this.isProcessing) {
        return // Ngăn người dùng gọi quá nhiều lần khi giao dịch đang xử lý
      }
      this.isProcessing = true // Đặt trạng thái giao dịch đang xử lý
      try {
        const currentUrl = this.$route.fullPath
        localStorage.setItem('previousUrl', currentUrl)
        const response = await axios.post(
          `${process.env.VUE_APP_BE_URL}/api/wallet/momo/create`,
          {
            orderInfo: 'Nạp tiền vào tài khoản',
            amount: this.amount
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`
            }
          }
        )
        window.location.href = response.data
      } catch (error) {
        console.error('Error during deposit for user:', error)
      } finally {
        this.isProcessing = false
        this.closeDialog()
      }
    }
  }
}
</script>
<style scoped>
.headline {
  background-color: #e0e0e0;
  margin-bottom: 20px;
  font-weight: bold !important;
}
.action {
  padding-bottom: 20px !important;
}
</style>
