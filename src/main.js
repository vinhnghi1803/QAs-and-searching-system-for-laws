import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Vuetify from 'vuetify'
import '@/assets/global.scss'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vuetify,
  render: (h) => h(App)
}).$mount('#app')
