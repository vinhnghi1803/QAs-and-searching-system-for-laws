<template>
  <v-container fluid>
    <v-card>
      <v-card-title class="headline">Thống kê</v-card-title>
      <v-card-actions class="action">
        <v-menu v-model="picker" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" outlined class="custom-date-picker-btn">
              <v-icon left>mdi-calendar</v-icon>
              {{ date }}
            </v-btn>
          </template>
          <v-date-picker v-model="date" type="month" locale="vi" @input="loadData()"></v-date-picker>
        </v-menu>
        <v-spacer></v-spacer>
        <v-chip color="success" class="ma-2" outlined>
          Income:
          <strong>{{ totalsAmount }}</strong>
        </v-chip>
      </v-card-actions>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-sheet height="600">
              <v-calendar
                v-model="calendarValue"
                :events="events"
                @click:event="showEvent"
                @click:more="handleClickMore"
                @click:date="handleClickMore"
                color="primary"
              >
                <template v-slot:event="{ event }">
                  <div class="event-tooltip">
                    <strong>{{ event.time }}</strong> {{ event.amount }}
                  </div>
                </template>
              </v-calendar>

              <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
                <v-card :color="`${selectedEvent.color} lighten-5`" min-width="350px" flat>
                  <v-card-text class="text-left">
                    <span>
                      <strong>Request ID:</strong> {{ selectedEvent.requestId }}<br />
                      <strong>Amount:</strong> {{ selectedEvent.amount }}<br />
                      <strong>Time:</strong> {{ selectedEvent.time }}
                    </span>
                  </v-card-text>
                </v-card>
              </v-menu>
            </v-sheet>
          </v-col>

          <br />

          <v-col cols="12">
            <apexchart v-if="!isLoading" height="400" type="bar" :options="chartOptionsCom" :series="seriesCom" class="px-5" />
            <v-progress-circular v-else indeterminate color="primary" />
          </v-col>

          <br />

          <v-col cols="12">
            <apexchart v-if="!isLoading" height="400" type="bar" :options="chartOptionsEm" :series="seriesEm" class="px-5" />
            <v-progress-circular v-else indeterminate color="primary" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-dialog v-model="moreEventsDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ moreEventsDate }}</span>
        </v-card-title>
        <v-card-text>
          <v-list rounded>
            <v-list-item v-for="event in moreEvents" :key="event.requestId" @click="showEvent({ nativeEvent: $event, event })" :class="event.color">
              <v-list-item-content>
                <v-list-item-title class="custom-item-title"
                  ><strong>{{ event.time }}</strong> {{ event.amount }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import vi from 'apexcharts/dist/locales/vi.json'

export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      picker: false,
      isLoading: false,
      seriesCom: [],
      seriesEm: [],
      chartOptionsCom: {
        chart: {
          type: 'bar',
          defaultLocale: 'vi',
          locales: [vi],
          stacked: true
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
          min: 0,
          max: 0.01,
          tickAmount: 5,
          labels: {
            formatter: function (val) {
              return val.toFixed(6)
            }
          },
          title: {
            text: 'USD',
            style: {
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bolder',
              fontSize: '16px'
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: '',
          style: {
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bolder',
            fontSize: '18px'
          },
          align: 'center'
        },
        subtitle: {
          text: '',
          style: {
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bold',
            fontSize: '14px'
          },
          align: 'center'
        },
        noData: {
          text: 'Không có dữ liệu',
          align: 'center',
          verticalAlign: 'middle',
          style: {
            fontSize: '18px',
            fontFamily: 'Roboto, sans-serif'
          }
        }
      },
      chartOptionsEm: {
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
          min: 0,
          max: 0.5,
          tickAmount: 4,
          labels: {
            formatter: function (val) {
              return val.toFixed(4)
            }
          },
          title: {
            text: 'USD',
            style: {
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bolder',
              fontSize: '16px'
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: '',
          style: {
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bolder',
            fontSize: '18px'
          },
          align: 'center'
        },
        subtitle: {
          text: '',
          style: {
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bold',
            fontSize: '14px'
          },
          align: 'center'
        },
        noData: {
          text: 'Không có dữ liệu',
          align: 'center',
          verticalAlign: 'middle',
          style: {
            fontSize: '18px',
            fontFamily: 'Roboto, sans-serif'
          }
        }
      },
      calendarValue: new Date().toISOString().substr(0, 10),
      events: [],
      colors: [
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'amber',
        'orange',
        'blue-grey'
      ],
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      moreEventsDialog: false,
      moreEvents: [],
      moreEventsDate: '',
      totalsAmount: '0'
    }
  },
  computed: {
    ...mapGetters({
      token: 'getToken'
    }),
    yearMonth() {
      return this.date.split('-')
    },
    year() {
      return this.yearMonth[0]
    },
    month() {
      return this.yearMonth[1]
    },
    totalsCom() {
      return this.seriesCom.reduce((acc, series) => acc + series.data.reduce((acc, value) => acc + value, 0), 0)
    },
    totalsEm() {
      return this.seriesEm.reduce((acc, series) => acc + series.data.reduce((acc, value) => acc + value, 0), 0)
    }
  },
  methods: {
    updateChartTitles() {
      this.chartOptionsCom.title.text = 'Chat trong tháng ' + this.month + '-' + this.year
      this.chartOptionsCom.subtitle.text = 'Tổng chi phí: ' + this.totalsCom + ' USD'
      this.chartOptionsEm.title.text = 'Embedding trong tháng ' + this.month + '-' + this.year
      this.chartOptionsEm.subtitle.text = 'Tổng chi phí: ' + this.totalsEm + ' USD'
    },
    async fetchStatistic() {
      this.picker = false
      this.isLoading = true

      const daysInMonth = new Date(this.year, this.month, 0).getDate()

      const startTime = Math.floor(Date.UTC(this.year, this.month - 1, 1) / 1000)
      const endTime = Math.floor(Date.UTC(this.year, this.month - 1, daysInMonth, 23, 59, 59) / 1000)

      try {
        const response = await axios.get(`${process.env.VUE_APP_BE_URL}/api/admin/openai/costs`, {
          headers: { Authorization: `Bearer ${this.token}` },
          params: { startTime, endTime }
        })

        const data = response.data || []
        const categories = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString().padStart(2, '0'))
        const seriesEmData = Array(daysInMonth).fill(0)
        const seriesComData = {}

        data.forEach((bucket) => {
          const date = new Date(bucket.start_time * 1000).getUTCDate()
          bucket.results.forEach((result) => {
            const modelName = result.line_item.split(',')[0].trim()
            if (modelName === 'ada v2') {
              seriesEmData[date - 1] += result.amount.value
            } else {
              if (!seriesComData[modelName]) {
                seriesComData[modelName] = Array(daysInMonth).fill(0)
              }
              seriesComData[modelName][date - 1] += result.amount.value
            }
          })
        })

        this.seriesEm = seriesEmData.every((value) => value === 0) ? [] : [{ name: 'ada v2', data: seriesEmData }]
        this.seriesCom = Object.keys(seriesComData).map((key) => ({
          name: key,
          data: seriesComData[key]
        }))

        this.chartOptionsEm.xaxis.categories = categories
        this.chartOptionsCom.xaxis.categories = categories

        const maxEmValue = Math.max(...seriesEmData)
        const maxComValue = Math.max(...[].concat(...Object.values(seriesComData)))
        this.chartOptionsEm.yaxis.max = maxEmValue > 0.5 ? Math.ceil(maxEmValue) : 0.5
        this.chartOptionsCom.yaxis.max = maxComValue > 0.01 ? Math.ceil(maxComValue) : 0.01
      } catch (error) {
        console.error('Lỗi khi gọi API:', error)
        this.seriesEm = []
        this.seriesCom = []
      } finally {
        this.isLoading = false
        this.updateChartTitles()
      }
    },
    async fetchMonthIncome() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_BE_URL}/api/admin/income`, {
          headers: { Authorization: `Bearer ${this.token}` },
          params: { year: this.year, month: this.month }
        })

        const data = response.data || []
        this.totalsAmount = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
          data.reduce((acc, item) => acc + item.amount, 0).toFixed(0)
        )
        this.events = data.map((item) => ({
          requestId: item.requestId || 'N/A',
          amount: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.amount.toFixed(0)),
          time: new Date(item.createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
          start: new Date(item.createdAt).toISOString().substr(0, 10),
          end: new Date(item.createdAt).toISOString().substr(0, 10),
          color: this.randomColor()
        }))
      } catch (error) {
        console.error('Lỗi khi gọi API:', error)
        this.events = []
      }
    },
    randomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)]
    },
    loadData() {
      this.fetchStatistic()
      this.calendarValue = `${this.date}-01`
      this.fetchMonthIncome()
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() => requestAnimationFrame(() => (this.selectedOpen = true)))
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    handleClickMore({ date }) {
      this.moreEventsDate = date
      this.moreEvents = this.events.filter((event) => event.start === date)
      if (this.moreEvents > 0) this.moreEventsDialog = true
    }
  },
  created() {
    this.loadData()
  }
}
</script>
<style scoped>
.headline {
  background-color: #e0e0e0;
  margin-bottom: 20px;
  font-weight: bold !important;
}
.event-tooltip {
  cursor: pointer;
}
.custom-item-title {
  color: white;
}
.action {
  padding: 0 16px;
}
</style>
