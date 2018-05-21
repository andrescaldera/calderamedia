import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: [],
  },
  actions: {
    GET_PHOTOS(state, data) {
      console.log('from store', data);
      state.commit('SET_PHOTOS', data);
    },
  },
  mutations: {
    SET_PHOTOS(state, data) {
      // eslint-disable-next-line
      state.photos = data;
    },
  },
});
