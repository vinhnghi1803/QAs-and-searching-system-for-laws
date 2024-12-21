<template>
  <v-app dark>
    <Header @toggle-drawer="toggleDrawer" :title="title" />

    <!-- Sidebar -->
    <v-navigation-drawer dark v-model="drawer" app width="250" color="grey darken-4">
      <v-list>
        <v-subheader class="white--text">Danh mục</v-subheader>
        <v-divider></v-divider>
        <v-list-item
          v-for="category in categories"
          :key="category.id"
          @click="selectCategory(category)"
          :class="{ 'selected-category': selectedCategory && selectedCategory.id === category.id }"
          class="hoverable"
        >
          <v-list-item-icon class="icon">
            <v-icon>{{ category.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="categories-name">
            <v-list-item-title>{{ category.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <!-- Search Box -->
            <v-text-field
              v-model="searchQuery"
              label="Tìm kiếm luật"
              outlined
              dense
              append-outer-icon="mdi-send"
              @click:append-outer="searchLaws"
              :loading="loading"
              :messages="totalElements > 0 ? `${totalElements} tài liệu liên quan` : ''"
              class="mb-4"
            ></v-text-field>

            <v-row v-if="laws.length === 0">
              <v-alert type="warning" dark border="left">Không tìm thấy tài liệu nào.</v-alert>
            </v-row>
            <v-row v-else class="mb-4" justify="center">
              <v-col cols="12" v-for="law in laws" :key="law.id">
                <v-card class="law-card" color="grey lighten-4" elevation="3" hover>
                  <v-card-title class="headline">{{ law.name }}</v-card-title>
                  <v-card-text>{{ law.description }}</v-card-text>
                  <v-card-actions>
                    <v-btn text color="primary" @click="viewLaw(law)">Xem chi tiết</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>

            <!-- Pagination -->
            <v-pagination v-if="pageCount > 1" v-model="page" :length="pageCount" :total-visible="5" @input="fetchLaws"></v-pagination>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
import store from '@/store/store'
import { mapCategoryIcons } from '@/config/const'

export default {
  components: {
    Header: () => import('@/components/Header.vue')
  },
  data() {
    return {
      drawer: null,
      title: 'Laws Search Engine',
      searchQuery: '',
      selectedCategory: null,
      categories: [],
      laws: [],
      page: 1,
      pageSize: 10,
      pageCount: 0,
      totalElements: 0,
      user: store.getters.getLoginUserInfo,
      loading: false
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    selectCategory(category) {
      this.selectedCategory = category
      this.page = 1
      this.fetchLaws()
    },
    async searchLaws() {
      if (!this.searchQuery || this.searchQuery?.trim() === '') return

      this.selectCategory(this.categories[0])

      const params = {
        query: this.searchQuery,
        page: this.page - 1,
        size: this.pageSize
      }

      this.loading = true

      try {
        const response = await axios.get(`${process.env.VUE_APP_BE_URL}/api/docs/search`, {
          params,
          headers: {
            Authorization: `Bearer ${this.user.token}`
          }
        })

        // Cập nhật danh sách luật dựa trên kết quả tìm kiếm
        this.laws = response.data.content
        this.pageCount = response.data.totalPages
        this.totalElements = response.data.totalElements
      } catch (error) {
        console.error('Error searching laws:', error)
      }
      setTimeout(2000)
      this.loading = false
    },
    async fetchLaws() {
      const params = {
        page: this.page - 1,
        size: this.pageSize
      }

      try {
        let url
        if (this.selectedCategory && this.selectedCategory.id === 0) {
          url = `${process.env.VUE_APP_BE_URL}/api/docs`
        } else {
          url = `${process.env.VUE_APP_BE_URL}/api/docs/category/${this.selectedCategory.id}/paginated`
        }

        const response = await axios.get(url, {
          params,
          headers: {
            Authorization: `Bearer ${this.user.token}`
          }
        })
        this.laws = response.data.content
        this.pageCount = response.data.totalPages
        this.totalElements = response.data.totalElements
      } catch (error) {
        console.error('Error fetching laws:', error)
      }
    },
    viewLaw(law) {
      this.$router.push({ name: 'Law Detail', params: { id: law.id } })
    },
    async fetchLawsCategories() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_BE_URL}/api/laws/categories`, {
          headers: {
            Authorization: `Bearer ${this.user.token}`
          }
        })
        this.categories = [{ id: 0, name: 'Xem tất cả', icon: 'mdi-eye' }, ...mapCategoryIcons(response.data)]
        if (this.categories.length > 0) {
          this.selectCategory(this.categories[0])
        }
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
.hoverable {
  transition: background-color 0.3s ease;
}
.icon {
  margin-right: 16px !important;
}
.categories-name {
  flex: none;
}
.hoverable:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.selected-category {
  background-color: rgba(255, 255, 255, 0.2);
}

.law-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  background-color: #1e1e2f;
}
.law-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
</style>
