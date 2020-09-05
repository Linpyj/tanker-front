import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import user from './modules/user'
import post from './modules/post'
import follow from './modules/follow'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		user: user,
		post: post,
		follow: follow
	},
	plugins: [createPersistedState({
		key: 'tanker',
		storage: window.sessionStorage
    })]
})

export default store;