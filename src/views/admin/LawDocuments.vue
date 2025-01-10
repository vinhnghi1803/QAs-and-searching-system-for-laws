<template>
  <v-container fluid>
    <!-- Card Wrapper -->
    <v-card>
      <v-card-title>
        <span class="text-h6">Quản lý tài liệu luật</span>
        <v-spacer></v-spacer>
        <v-btn class="mx-2" :class="{ 'custom-loader': isLoading }" fab dark small color="cyan" @click="fetchLaws">
          <v-icon dark> mdi-cached </v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small color="green" @click="openAddLawsDialog()">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </v-card-title>

      <!-- Data Table -->
      <v-data-table
        :loading="isLoading"
        :headers="headers"
        :items="laws"
        :items-per-page="pageSize"
        :page.sync="page"
        :server-items-length="totalElements"
        :options.sync="options"
        @update:options="fetchLaws"
        @update:items-per-page="updatePageSize"
        :footer-props="{ itemsPerPageOptions: [10, 20, 50] }"
        class="elevation-1"
      >
        <template slot="item.stt" slot-scope="{ index }">
          {{ index + 1 + (page - 1) * pageSize }}
        </template>
        <template slot="item.actions" slot-scope="{ item }">
          <v-btn icon color="red" @click="openConfirmDialog(item.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
    <file-input-dialog ref="openFileInputDialog" :token="token" />
    <confirm-dialog ref="confirmDialog" :message="'Bạn có chắc muốn xóa tài liệu này?'" @confirm="handleConfirm" />
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout">
      {{ snackbar.message }}
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import FileInputDialog from '@/components/FileInputDialog'
import ConfirmDialog from '@/components/ConfirmDialog'

export default {
  components: {
    FileInputDialog,
    ConfirmDialog
  },
  data() {
    return {
      headers: [
        { text: 'STT', value: 'stt', align: 'start', sortable: false },
        { text: 'ID', value: 'id', align: 'start', sortable: true },
        { text: 'Tên', value: 'name', sortable: true },
        { text: 'Danh mục', value: 'lawsCategory.name', sortable: true },
        { text: '', value: 'actions', sortable: false }
      ],
      page: 1,
      pageSize: 10,
      totalElements: 0,
      laws: [],
      options: {},
      isLoading: false,
      isDialogOpen: false,
      deleteId: null,
      snackbar: {
        show: false,
        message: '',
        color: '',
        timeout: 2000
      }
    }
  },
  methods: {
    async fetchLaws() {
      const { sortBy, sortDesc } = this.options

      const params = {
        page: this.page - 1,
        size: this.pageSize,
        sort: sortBy.length ? `${sortBy[0]},${sortDesc[0] ? 'desc' : 'asc'}` : ''
      }

      this.isLoading = true

      try {
        const response = await axios.get(`${process.env.VUE_APP_BE_URL}/api/docs`, {
          params,
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        this.laws = response.data.content
        this.totalElements = response.data.totalElements
      } catch (error) {
        console.error('Error fetching laws:', error)
      }
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
    updatePageSize(newPageSize) {
      this.pageSize = newPageSize
      this.page = 1
      this.fetchLaws()
    },
    openAddLawsDialog() {
      this.$refs.openFileInputDialog.open()
    },
    openConfirmDialog(id) {
      this.deleteId = id
      this.$refs.confirmDialog.open()
    },
    async handleConfirm() {
      try {
        await axios.delete(`${process.env.VUE_APP_BE_URL}/api/admin/docs/delete/${this.deleteId}`, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        this.fetchLaws()
        this.showSnackbar('Xóa tài liệu thành công!', 'success')
      } catch (error) {
        console.error('Error delete laws document:', error)
        this.showSnackbar('Xóa tài liệu thất bại!', 'error')
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
      this.fetchLaws()
    }
  },
  computed: {
    ...mapGetters({
      token: 'getToken'
    })
  },
  mounted() {
    this.fetchLaws()
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
