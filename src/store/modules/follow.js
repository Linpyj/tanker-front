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
  async createFollow({commit}, {id}) {
    // idは相手ユーザーのuser_id
    // このstoreのstateにはuser_idのみいれる
    await axios.post(`http://localhost:3000/users/${id}/follow`)
    commit('setMyFollowee', id)
    commit('changeStatus')
  },
  async removeFollow({commit}, {id}) {
    await axios.post(`http://localhost:3000/users/${id}/remove`)
    const newArray = state.filter(n => n != id)
    commit('setMyFollowee', newArray)
    commit('changeStatus')
  }
	}
}
