<template>
  <div>
    <v-dialog v-model="isOpen" max-width="800px">
      <v-card>
        <v-card-title class="headline">Lịch sử giao dịch</v-card-title>
        <v-card-actions class="action">
          <v-menu v-model="picker" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Chọn tháng"
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                readonly
                v-on="on"
                outlined
                solo
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" type="month" locale="vi" @input="getTransactionHistory()"></v-date-picker>
          </v-menu>
        </v-card-actions>
        <v-card-text>
          <v-data-table
            :loading="isLoading"
            :headers="headers"
            :items="transitionList"
            :no-data-text="noData"
            :items-per-page="pageSize"
            class="elevation-1"
            :options.sync="options"
            :page.sync="page"
            :server-items-length="totalElements"
            @update:options="getTransactionHistory"
            @update:items-per-page="updatePageSize"
            dark
          >
            <template slot="item.amount" slot-scope="{ item }">
              {{ formatCurrency(item.amount) }}
            </template>
          </v-data-table>
        </v-card-text>
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
      date: new Date().toISOString().substr(0, 7),
      picker: false,
      noData: 'Không có dữ liệu',
      headers: [
        { text: 'Mã giao dịch', value: 'requestId', sortable: false },
        { text: 'Số tiền', value: 'amount' },
        { text: 'Nội dung', value: 'description', sortable: false },
        { text: 'Ngày', value: 'createdAt' }
      ],
      transitionList: [],
      isLoading: false,
      page: 1,
      pageSize: 5,
      totalElements: 0,
      options: {
        sortBy: ['createdAt'],
        sortDesc: ['desc']
      }
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
    async getTransactionHistory() {
      this.picker = false
      this.loading = true
      const { sortBy, sortDesc } = this.options

      try {
        const params = {
          yearMonth: this.date,
          page: this.page - 1,
          size: this.pageSize,
          sort: sortBy.length ? `${sortBy[0]},${sortDesc[0] ? 'desc' : 'asc'}` : ''
        }
        const response = await axios.get(`${process.env.VUE_APP_BE_URL}/api/wallet/transactions`, {
          headers: {
            Authorization: `Bearer ${this.token}`
          },
          params
        })
        this.transitionList = response.data.content
        this.totalElements = response.data.totalElements
      } catch (error) {
        console.error(error)
      }
      this.loading = false
    },
    updatePageSize(newPageSize) {
      this.pageSize = newPageSize
      this.page = 1
      this.getTransactionHistory()
    },
    formatCurrency(value) {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
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
</style>
