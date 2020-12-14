import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: null
    // add more if needed
  },
  mutations: {
    storeTokenInApp(state, token) {
      state.token = token;
    },
    storeUserInApp(state, user) {
      state.user = user;
    },
    storeStrains(state, strains) {
        state.strains = strains;
    }
  },
  actions: {
    getStrains({
      commit
    }) {
      axios.get('/strains')
        .then(res => {
          console.log(res);
          commit('storeStrains', res.data);
        })
        .catch(err => {
            console.log('Error in /strains action', err);
        });
    }
  }
});
