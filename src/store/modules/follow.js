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
    const res = await axios.post(process.env.VUE_APP_BASE_API+`/api/users/${id}/follow`)
    commit('setCurrent', res.data.user, {root: true})
    commit('setThisUserFollowerCount', res.data.follower_count, {root: true})
    commit('setStatus', res.data.follow_status)
  },

  // フォローを外す
  async removeFollow({commit}, {id}) {
    const res = await axios.post(process.env.VUE_APP_BASE_API+`/api/users/${id}/remove`)
    commit('setCurrent', res.data.user, {root: true})
    commit('setStatus', res.data.follow_status)
    commit('setThisUserFollowerCount', res.data.follower_count, {root: true})
  }

	}
}
