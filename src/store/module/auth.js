import Vue from 'vue'

const auth = {
	state: {
		token: ''
	},
	mutations: {
		login(state, payload) {
			state.token = payload
		},
		logout(state) {
			state.token = null
		}
	},
	actions: {
		// mutationのloginとlogoutを発火するアクションを記述
	}
}

export default auth