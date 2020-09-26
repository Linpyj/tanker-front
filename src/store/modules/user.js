import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.headers['SameSite'] = 'none'
axios.defaults.headers['Secure']

export default {

state: {
		current: null,
    thisUser: null,
    thisUserPosts: [],
    thisUserFollowerCount: null,
    thisUserFollowCount: null
},
mutations: {
    setCurrent(state, payload) {
        state.current = payload
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
      const user = await axios.post(process.env.VUE_APP_BASE_API+'/api/login', {
				uid, 
				password
        },
      )
      sessionStorage.setItem('current', user.data.user)
      commit('setCurrent', user.data.user)
},
		signout({commit}) {
      sessionStorage.clear()
      commit('setCurrent', null)
    },

		async signup({commit}, {uid, name, password, password_confirmation}) {
      sessionStorage.clear()
			const user = await axios.post(process.env.VUE_APP_BASE_API+'/api/users/create', {
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
      const user = await axios.get(process.env.VUE_APP_BASE_API+`/api/users/${id}`)
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
        const user = await axios.post(process.env.VUE_APP_BASE_API+`/api/users/${id}/update`, {
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