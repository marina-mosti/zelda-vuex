import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    link: {
      heartContainers: 5,
      currentHealth: 3
    }
  },
  mutations: {
    increaseHealth (state, hearts) {
      if (state.link.currentHealth === state.link.heartContainers) return
      if (state.link.currentHealth + hearts > state.link.heartContainers) {
        state.link.currentHealth = state.link.heartContainers
      }

      state.link.currentHealth += hearts
    },
    increaseHeartContainers (state) {
      state.link.heartContainers++
    }
  },
  actions: {

  }
})
