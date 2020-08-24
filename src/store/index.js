import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from './module/auth'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		auth
	},
	state: {},
	mutations: {},
	actions: {},
	plugins: [createPersistedState({
    key: "tanker",
    paths: ["auth.token"],
    storage: localStorage
  })]
})

export default store;