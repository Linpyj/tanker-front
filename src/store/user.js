import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const user = new Vuex.Store({
	state: {
        current: ''
    },
	mutations: {
        setCurrent(state, payload) {
            state.current = payload
        }
    },
	actions: {
        signin({commit}, {uid, password}) {
            try {
                const user = $axios.$post('http://localhost:3000/login', { uid, password })
                commit('setCurrent', user)
            } catch {

            }
        },
        signout({commit}) {
            try {
                commit('setCurrent', null)
            } catch {
                
            }
        } 
    }
})

export default user;