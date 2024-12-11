<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card :loading="loading" elevation="1" class="law-detail-card">
          <!-- Nút quay lại -->
          <v-card-actions>
            <v-btn text class="back-btn" @click="$router.go(-1)"> <v-icon left>mdi-arrow-left</v-icon>Quay lại danh sách </v-btn>
          </v-card-actions>

          <!-- Tiêu đề và loại luật -->
          <v-card-title class="title">{{ law.name }}</v-card-title>
          <v-card-subtitle class="subtitle"> <strong>Loại luật:</strong> {{ law.lawsCategory?.name }} </v-card-subtitle>

          <!-- Nội dung -->
          <v-card-text>
            <div class="a4">
              <div class="content" v-html="law.content"></div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import store from '@/store/store'

export default {
  data() {
    return {
      id: this.$route.params.id,
      law: '',
      user: store.getters.getLoginUserInfo,
      loading: false
    }
  },
  methods: {
    async fetchLawDetail() {
      try {
        this.loading = true
        const response = await axios.get(`${process.env.VUE_APP_BE_URL}/api/docs/${this.id}`, {
          headers: {
            Authorization: `Bearer ${this.user.token}`
          }
        })
        this.law = response.data
        this.loading = false
      } catch (error) {
        console.error('Error fetching law details:', error)
      }
    }
  },
  created() {
    this.fetchLawDetail()
  }
}
</script>

<style scoped>
.law-detail-card {
  background-color: #1e1e2f;
  color: white;
  padding: 16px;
  border-radius: 8px; /* Bo góc nhẹ */
}

/* Nút quay lại */
.back-btn {
  font-size: 14px;
  font-weight: 500; /* Làm nổi bật chữ nhẹ */
  text-transform: none;
}

.back-btn v-icon {
  margin-right: 4px;
}

/* Tiêu đề */
.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
}

/* Loại luật */
.subtitle {
  font-size: 16px;
  text-align: left; /* Giữ nguyên align text left */
  margin-bottom: 16px;
}

/* Nội dung chi tiết */
.a4 {
  width: 21cm;
  margin: 0 auto;
  padding: 2cm;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  min-height: 29.7cm;
  height: auto;
  overflow: hidden;

  transform: scale(1.2);
  transform-origin: top;
}

.law-detail-card ::v-deep(.v-card__text) {
  color: black !important;
}

.content {
  font-family: 'Times New Roman', serif;
  font-size: 12pt;
  line-height: 1.5;
  text-align: justify;
  word-wrap: break-word;
}

.content ::v-deep(a) {
  color: black !important;
  text-decoration: none;
}
</style>
