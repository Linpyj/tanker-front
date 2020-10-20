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
    thisUserFollowCount: null,
    recommendUsers: []
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
    setRecommendUsers(state, payload) {
			state.recommendUsers = payload
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

    async twitterSignin({commit}, {currentUser}) {

      sessionStorage.clear()
      sessionStorage.setItem('current', currentUser)
      commit('setCurrent', currentUser)
      // const user = await axios.post()
      
    },

    async googleSignin({commit}, {isNewUser}) {
      sessionStorage.clear()
      if (!isNewUser) {
        // アカウント作成済の場合、Tokenと紐づいたTankerアカでログイン

      } else {
        // アカウント未作成の場合、Tokenを持たせたTankerアカを新規作成

      }
      // sessionStorage.setItem('current', currentUser)
      commit('setCurrent', currentUser)
      // const user = await axios.post()
      
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
			commit('setCurrent', user.data.user)
    },

    async fetchUser({commit}, {id}) {
      const user = await axios.get(process.env.VUE_APP_BASE_API+`/api/users/${id}`)
      commit('setThisUser', user.data.user)
      commit('setThisUserPosts', user.data.posts)
      commit('setStatus', user.data.follow_status, {root: true})
      commit('setThisUserFollowerCount', user.data.follower_count)
      commit('setThisUserFollowCount', user.data.follow_count)
    },

    async updateUser({state, commit}, {name,
      image_name,
      profile,
      old_password,
      new_password,
      new_password_confirmation}) {
        var id = state.current.id
        // var config = {
        //   headers: {
        //     'content-type': 'multipart/form-data'
        //   }
        // }
        const user = await axios.post(process.env.VUE_APP_BASE_API+`/api/users/${id}/update`, {
          user: {
              name,
              image_name, 
              profile,
              old_password,
              new_password,
              new_password_confirmation
                }}
        )
        console.log(user)
        commit('setCurrent', user.data.user)
      },
    async fetchRecommend({commit}) {
      const users = await axios.get(process.env.VUE_APP_BASE_API+'/api/users/recommend')
      commit('setRecommendUsers', users.data.users)
    }
},
    
}