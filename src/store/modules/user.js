import axios from 'axios'
axios.defaults.withCredentials = true

export default {

state: {
		current: null,
		token: null,
    thisUser: null,
    thisUserPosts: [],
    follow_status: false
},
mutations: {
    setCurrent(state, payload) {
        state.current = payload
		},
		setToken(state, payload) {
			state.token = payload
		},
		// setNewUser(state, payload) {
		// 	state.newUser = payload
		// },
		setThisUser(state, payload) {
			state.thisUser = payload
    },
    setThisUserPosts(state, payload) {
      state.thisUserPosts = payload
    },
    setFollowStatus(state, payload) {
      state.follow_status = payload
    }
},
actions: {
    
    async signin({commit}, {uid, password}) {
      sessionStorage.clear()
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
      sessionStorage.clear()
      commit('setCurrent', null)
    },

		async signup({commit}, {uid, name, password, password_confirmation}) {
      sessionStorage.clear()
			const user = await axios.post('http://localhost:3000/users/create', {
				uid: uid,
				name: name,
				password: password,
				password_confirmation: password_confirmation
      })
      sessionStorage.setItem('current', user.data.user)
      console.log(user.data.user)
			commit('setCurrent', user.data.user)
    },

    async fetchUser({commit}, {id}) {
      const user = await axios.get(`http://localhost:3000/users/${id}`)
      console.log('user.data in user.js')
      console.log(user.data)
      commit('setThisUser', user.data.user)
      commit('setThisUserPosts', user.data.posts)
      commit('setFollowStatus', user.data.follow_status)
    },

    async updateUser({state}, {name, 
      image_name, 
      profile,
      old_password,
      new_password,
      new_password_confirmation}) {
        var id = state.current.id
        const user = await axios.post(`http://localhost:3000/users/${id}/update`, {
          name,
          image_name, 
          profile,
          old_password,
          new_password,
          new_password_confirmation
        })
        console.log(user)
        // commit('setCurrentUser', )
      }
}
}