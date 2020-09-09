import axios from 'axios'
axios.defaults.withCredentials = true

export default {

state: {
		current: null,
		token: null,
		newUser: null,
		thisUser: null
},
mutations: {
    setCurrent(state, payload) {
        state.current = payload
		},
		setToken(state, payload) {
			state.token = payload
		},
		setNewUser(state, payload) {
			state.newUser = payload
		},
		setThisUser(state, payload) {
			state.thisUser = payload
		},
},
actions: {
    async signin({commit}, {uid, password}) {
      const user = await axios.post('http://localhost:3000/login', {
				uid, 
				password
			},
		)
		sessionStorage.setItem('current', user.data.user)
		commit('setCurrent', user.data.user)
		commit('setToken', user.data.user.token)
			// if (sessionStorage.getItem('tanker')) {
			// 	const strageData = JSON.parse(sessionStorage.getItem('tanker'))
			// 	if (strageData.user.token) {
			// 		axios.defaults.headers.common['Authorization'] = 'Bearer ' + strageData.user.token;
			// 	}
			// }

},
		signout({commit}) {
				commit('setCurrent', null)
			},
		async signup({commit}, {uid, name, password, password_confirmation}) {
			const user = await axios.post('http://localhost:3000/users/create', {
				uid: uid,
				name: name,
				password: password,
				password_confirmation: password_confirmation
			})
			commit('setNewUser', user)
    },
    async fetchUser({commit}, {id}) {
      const user = await axios.get(`http://localhost:3000/users/${id}`)
      console.log(user.data.user)
      commit('setThisUser', user.data.user)
    } 
}
}