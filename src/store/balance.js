import axios from 'axios'

const state = {
  balance: 0
}

const getters = {
  getBalance: (state) => {
    return state.balance.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
  }
}

const actions = {
  async fetchBalance({ commit, rootGetters }) {
    try {
      const response = await axios.get(`${process.env.VUE_APP_BE_URL}/api/wallet/balance`, {
        headers: {
          Authorization: `Bearer ${rootGetters.getToken}`
        }
      })
      commit('setBalance', response.data)
    } catch (error) {
      console.error('Error fetching user balance:', error)
    }
  }
}

const mutations = {
  setBalance: (state, balance) => {
    state.balance = balance
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
