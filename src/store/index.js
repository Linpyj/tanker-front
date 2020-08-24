import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from './module/auth'
import user from '@/store/user'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		auth,
		user
	},
	state: {},
	mutations: {},
	actions: {},
	plugins: [createPersistedState({
    key: "tanker",
    paths: ["auth.state.token"],
    storage: localStorage
  })]
})

export default store;