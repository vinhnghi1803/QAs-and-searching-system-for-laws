<template>
  <!-- Dialog -->
  <v-dialog v-model="isOpen" max-width="500px">
    <v-card>
      <v-card-title class="title">
        <span class="headline">Tải lên file Word</span>
      </v-card-title>

      <v-card-text class="pb-0">
        <v-form ref="form" lazy-validation>
          <!-- Input file -->
          <v-file-input
            v-model="file"
            label="Chọn file"
            accept=".doc"
            outlined
            dense
            :error-messages="fileError"
            :disabled="isLoading"
          ></v-file-input>

          <!-- Select category -->
          <v-select
            v-model="categoryId"
            prepend-icon="mdi-text-box-outline"
            :items="categoriesList"
            item-text="name"
            item-value="id"
            label="Danh mục"
            outlined
            dense
            :error-messages="categoryError"
            :disabled="isLoading"
          ></v-select>
        </v-form>
      </v-card-text>

      <v-card-actions class="action">
        <v-spacer></v-spacer>
        <v-btn class="normal-btn" rounded dark color="primary" @click="submitFile" :disabled="isLoading">Tải lên</v-btn>
        <v-btn class="normal-btn" rounded dark color="red" @click="close" :disabled="isLoading">Hủy</v-btn>
      </v-card-actions>
      <v-progress-linear v-if="isLoading" indeterminate color="primary"></v-progress-linear>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    token: { type: String, required: true }
  },
  data() {
    return {
      file: null,
      categoriesList: [],
      categoryId: null,
      fileError: '',
      categoryError: '',
      isOpen: false,
      isLoading: false
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.$emit('update:open', false)
      this.isOpen = false
      this.file = null
      this.categoryId = null
      this.fileError = ''
      this.categoryError = ''
    },
    async submitFile() {
      let isValid = true

      if (!this.file) {
        this.fileError = 'Vui lòng chọn một file!'
        isValid = false
      } else if (!this.file.name.endsWith('.doc')) {
        this.fileError = 'Chỉ chấp nhận file .doc!'
        isValid = false
      } else {
        this.fileError = ''
      }

      if (!this.categoryId) {
        this.categoryError = 'Vui lòng chọn một danh mục!'
        isValid = false
      } else {
        this.categoryError = ''
      }

      if (!isValid) return

      const formData = new FormData()
      formData.append('file', this.file)
      formData.append('categoryId', this.categoryId)

      try {
        this.isLoading = true
        await axios.post(`${process.env.VUE_APP_BE_URL}/api/admin/docs/import-file`, formData, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
      } catch (error) {
        console.error('Error import laws document:', error)
      }
      this.isLoading = false
      this.close()
    },
    async fetchLawsCategories() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_BE_URL}/api/laws/categories`, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        this.categoriesList = response.data
      } catch (error) {
        console.error('Error fetching laws categories:', error)
      }
    }
  },
  created() {
    this.fetchLawsCategories()
  }
}
</script>

<style scoped>
.title {
  background-color: #e0e0e0;
  margin-bottom: 20px;
}
.headline {
  font-weight: bold;
}
.normal-btn {
  text-transform: none;
}
.action {
  padding-bottom: 20px !important;
}
</style>
