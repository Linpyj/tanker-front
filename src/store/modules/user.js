// import Vue from 'vue';
// import Vuex from 'vuex';
// import axios from 'axios'
// Vue.use(Vuex);

// export default {
// 	// namespaced: true,
// 	state: {
// 		current: null,
// 		name: 'John'
// 	},
// 	mutations: {
// 		setCurrent(state, payload) {
// 			state.current = payload
// 		}
// 	},
// 	actions: {
// 		signin({commit}, {name, password}) {
// 			axios.$post('http://localhost:3000/login', {name, password})
// 				.then((response) => {
// 					commit('setCurrent', response.data)
// 				})
// 			},
// 		// setCurrent({vuexContext, current}) {
// 		// 	vuexContext.commit('SET_CURRENT', current)
// 		// },
// 		signout({commit}) {
// 			commit('setCurrent', null)
// 		} 
// 	}
// }


import axios from 'axios'

export default {

state: {
    current: null
},
mutations: {
    setCurrent(state, payload) {
        state.current = payload
    }
},
actions: {
    async signin({commit}, {uid, password}) {
        const user = await axios.post('http://localhost:3000/login', {uid, password})
				commit('setCurrent', user)
        },  
   signout({commit}) {
        commit('setCurrent', null)
    } 
}
}