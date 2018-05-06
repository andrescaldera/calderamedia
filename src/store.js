import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: []
  },
  mutations: {
    GET_PHOTOS (state, data) {
      console.log(data)
      state.commit('SET_PHOTOS', data)
    }
  },
  actions: {
    SET_PHOTOS (state, data) {
      state.photos = data
    }
  }
})
