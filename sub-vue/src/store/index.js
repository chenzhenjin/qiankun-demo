import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age: 18
  },
  mutations: {
    SET_AGE(state, playLoad) {
      state.age = playLoad
    }
  },
  actions: {
  },
  modules: {
  }
})
