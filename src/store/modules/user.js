import axios from 'axios'

export default {

state: {
		current: null,
		token: null,
		newUser: null
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
		}
},
actions: {
    async signin({commit}, {uid, password}) {
		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
        const user = await axios.post('http://localhost:3000/login', {
			uid, 
			password
		},
			xhr
		)
		commit('setCurrent', user.data.user)
		commit('setToken', user.data.user)
		// let d = new Date();                
		// d.setTime(d.getTime() + (1*24*60*60*1000));
		// let expires = "expires="+ d.toUTCString();
		// document.cookie = user.data.token + expires
				// console.log(this.$store.state.user.current)
				// console.log(this.$store.state.user.token)
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
		} 
}
}