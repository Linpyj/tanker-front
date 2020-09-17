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
    const res = await axios.post(`/api/users/${id}/follow`)
    console.log('currentUser in follow.js')
    console.log(res.data)
    commit('setCurrent', res.data.user, {root: true})
    commit('setThisUserFollowerCount', res.data.follower_count, {root: true})
    commit('setStatus', res.data.follow_status)
  },

  // フォローを外す
  async removeFollow({commit}, {id}) {
    console.log('ok')
    console.log(id)
    const res = await axios.post(`/api/users/${id}/remove`)
    console.log('あああ')
    console.log(res.data)
    console.log(res.data.user)
    commit('setCurrent', res.data.user, {root: true})
    commit('setStatus', res.data.follow_status)
    commit('setThisUserFollowerCount', res.data.follower_count, {root: true})
  }

	}
}
