import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import user from './modules/user'
import post from './modules/post'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		user,
		post
	},
	plugins: [createPersistedState({
        key: 'tanker',
        // paths: ['user.token'],
        storage: window.sessionStorage
    })]
	// plugins: [createPersistedState({
	// 	key: "tanker",
	// 	paths: ["auth.state.token"],
	// 	storage: localStorage
  // })]
})

export default store;