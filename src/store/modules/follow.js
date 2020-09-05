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
  async createFollow({commit}, {id}) {
    // idは相手ユーザーのuser_id
    // このstoreのstateにはuser_idのみいれる
    await axios.post(`http://localhost:3000/users/${id}/follow`)
    commit('addMyFollowee', id)
    commit('changeStatus')
  },

  // フォローを外す
  async removeFollow({commit}, {id}) {
    await axios.post(`http://localhost:3000/users/${id}/remove`)
    const newArray = this.state.filter(n => n != id)
    commit('setMyFollowee', newArray)
    commit('changeStatus')
  },

  // フォローされる
	}
}
