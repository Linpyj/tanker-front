import axios from 'axios'

export default {

state: {
  status: false,
  myFollowee: [],
  myFollower: []
},
mutations: {
  changeStatus(state) {
    state.status = !state.status
  },
	addMyFollowee(state, payload) {
		state.myFollowee.push(payload)
	},
  addMyFollower(state, payload) {
		state.myFollower.push(payload)
  },
  setMyFollowee(state, payload) {
    state.myFollowee = payload
  }
},
actions: {

  // フォローする
  async createFollow({commit, state}, {id}) {
    // idは相手ユーザーのuser_id
    // このstoreのstateにはuser_idのみいれる
    console.log(typeof state.myFollowee)
    await axios.post(`http://localhost:3000/users/${id}/follow`)
    commit('addMyFollowee', id)
    console.log(state.myFollowee)
    commit('changeStatus')
  },

  // フォローを外す
  async removeFollow({commit}, {state, id}) {
    await axios.post(`http://localhost:3000/users/${id}/remove`)
    const newArray = state.myFollowee.filter(n => n != id)
    commit('setMyFollowee', newArray)
    commit('changeStatus')
  },

  // フォローされる
	}
}
