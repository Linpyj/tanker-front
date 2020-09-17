import axios from 'axios'
axios.defaults.withCredentials = true

export default {

state: {
		current: null,
		token: null,
    thisUser: null,
    thisUserPosts: [],
    thisUserFollowerCount: null,
    thisUserFollowCount: null
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
    setThisUserFollowerCount(state, payload) {
      state.thisUserFollowerCount = payload
    },
    setThisUserFollowCount(state, payload) {
      state.thisUserFollowCount = payload
    },
},
actions: {
    
    async signin({commit}, {uid, password}) {
      sessionStorage.clear()
      const user = await axios.post('https://guarded-wildwood-22546.herokuapp.com/api/login', {
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
			const user = await axios.post('/api/users/create', {
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
      const user = await axios.get(`/api/users/${id}`)
      console.log('user.data in user.js')
      console.log(user.data)
      console.log(user.data.follow_status)
      console.log(id)
      commit('setThisUser', user.data.user)
      commit('setThisUserPosts', user.data.posts)
      commit('setStatus', user.data.follow_status, {root: true})
      commit('setThisUserFollowerCount', user.data.follower_count)
      commit('setThisUserFollowCount', user.data.follow_count)
    },

    async updateUser({state}, {name, 
      image_name, 
      profile,
      old_password,
      new_password,
      new_password_confirmation}) {
        var id = state.current.id
        const user = await axios.post(`/api/users/${id}/update`, {
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