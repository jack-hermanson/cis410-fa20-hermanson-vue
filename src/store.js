import Vue from 'vue';
import Vuex from 'vuex';

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
        }
    },
    actions: {

    }
});