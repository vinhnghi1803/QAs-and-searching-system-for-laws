<template>
  <div>
    <v-dialog v-model="isOpen" max-width="1200px">
      <v-card>
        <v-card-title class="headline">Thống kê</v-card-title>
        <v-card-actions class="action" v-if="!isMobile">
          <v-menu v-model="picker" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" outlined class="custom-date-picker-btn">
                <v-icon left>mdi-calendar</v-icon>
                {{ date }}
              </v-btn>
            </template>
            <v-date-picker v-model="date" type="month" locale="vi" @input="fetchRequestsByDay()"></v-date-picker>
          </v-menu>
        </v-card-actions>
        <v-card-text v-if="!isMobile">
          <apexchart v-if="!isLoading" height="400" type="bar" :options="chartOptions" :series="series" class="px-5" />
          <v-progress-circular v-else indeterminate color="primary" />
        </v-card-text>
        <v-card-text v-else>
          <div>Tính năng chỉ sử dụng được trên máy tính</div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import vi from 'apexcharts/dist/locales/vi.json'

export default {
  data() {
    return {
      isOpen: false,
      date: new Date().toISOString().substr(0, 7),
      picker: false,
      noData: 'Không có dữ liệu',
      transitionList: [],
      isLoading: false,
      series: [],
      chartOptions: {
        chart: {
          type: 'bar',
          defaultLocale: 'vi',
          locales: [vi]
        },
        xaxis: {
          categories: [],
          title: {
            text: 'Ngày',
            style: {
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bolder',
              fontSize: '16px'
            }
          }
        },
        yaxis: {
          title: {
            text: 'Request',
            offsetY: -170,
            offsetX: 60,
            rotate: 0,
            style: {
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bolder',
              fontSize: '16px'
            }
          },
          labels: {
            align: 'right'
          }
        },
        title: {
          text: 'Thống kê số lượng request theo ngày',
          style: {
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bolder',
            fontSize: '18px'
          },
          align: 'center'
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      token: 'getToken'
    }),
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    }
  },
  methods: {
    open() {
      this.isOpen = true
      if (!this.isMobile) this.fetchRequestsByDay()
    },
    close() {
      this.isOpen = false
      this.date = new Date().toISOString().substr(0, 7)
    },
    async fetchRequestsByDay() {
      this.picker = false
      this.isLoading = true

      const [year, month] = this.date.split('-')
      const daysInMonth = new Date(year, month, 0).getDate()

      try {
        const response = await axios.get(`${process.env.VUE_APP_BE_URL}/api/wallet/requests-by-day`, {
          headers: { Authorization: `Bearer ${this.token}` },
          params: { month, year }
        })

        const data = response.data || {}
        const categories = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString().padStart(2, '0'))
        const requestData = categories.map((date) => data[`${year}-${month}-${date}`] || 0)

        this.series = [{ name: 'Request', data: requestData }]
        this.chartOptions.xaxis.categories = categories
      } catch (error) {
        console.error('Lỗi khi gọi API:', error)
      } finally {
        this.isLoading = false
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
  padding: 8px 80px !important;
}
</style>
