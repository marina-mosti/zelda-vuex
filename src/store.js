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
  getters: {
    isGameOver (state) {
      return state.link.currentHealth <= 0
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
    loseHealth (state, hearts) {
      if (state.link.currentHealth - hearts < 0) {
        state.link.currentHealth = 0
        return
      }

      state.link.currentHealth -= hearts
    },
    increaseHeartContainers (state) {
      state.link.heartContainers++
    }
  },
  actions: {
    stalfosAttack (context, params) {
      const dmg = Math.floor(Math.random() * (params.maxDmg - params.minDmg) + params.minDmg)

      setTimeout(() => {
        context.commit('loseHealth', dmg)
      }, 500)
    }
  }
})
