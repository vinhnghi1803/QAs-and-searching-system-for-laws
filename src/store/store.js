import Vue from 'vue'
import Vuex from 'vuex'
import { setStore, getStore } from '@/config/utils'
import { ROLE_ADMIN } from '@/config/const'
import balance from '@/store/balance'

Vue.use(Vuex)

const user = getStore('user')

export default new Vuex.Store({
  modules: {
    balance
  },
  state: {
    loginUser: user,
    token: user?.token,
    roles: user?.roles
  },
  mutations: {
    setLoginUser(state, user) {
      state.loginUser = user
      state.token = user?.token || null
      state.roles = user?.roles || []
      setStore('user', user)
    }
  },
  actions: {},
  getters: {
    getLoginUserInfo(state) {
      return state.loginUser
    },
    getToken(state) {
      return state.token
    },
    getRoles(state) {
      return state.roles
    },
    isAdmin(state) {
      return state.roles.includes(ROLE_ADMIN)
    }
  }
})
