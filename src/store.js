import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes';

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
    },
    clearAuthData(state) {
      state.token = null;
      state.user = null;
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
    },
    logout({commit, state}) {
      axios.post('/customers/logout', null, {
        headers: {
          Authorization: `Bearer ${state.token}`
        }
      });

      commit('clearAuthData');

      routes.replace('/');
    }
  }
});
