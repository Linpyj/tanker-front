import axios from 'axios'

export default {

state: {
  status: false
},
mutations: {
  setStatus(state, payload) {
    state.status = payload
  }
},
actions: {

  // フォローする
  async createFollow({commit}, {id}) {
    const res = await axios.post(`http://localhost:3000/users/${id}/follow`)
    console.log('currentUser in follow.js')
    console.log(res)
    commit('setCurrent', res.user, {root: true})
    commit('setStatus', res.status)
  },

  // フォローを外す
  async removeFollow({commit}, {id}) {
    console.log('ok')
    console.log(id)
    const res = await axios.post(`http://localhost:3000/users/${id}/remove`)
    console.log(res.data.user)
    commit('setCurrent', res.data.user, {root: true})
    commit('setStatus', res.data.follow_status)
  }

	}
}
