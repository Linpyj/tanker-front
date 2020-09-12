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
    console.log('ok')
    console.log(typeof state.myFollowee)
    console.log(state.myFollowee)
    console.log(typeof parseInt(id))
    // follows#createを叩く
    const currentUser = await axios.post(`http://localhost:3000/users/${id}/follow`)
    console.log(currentUser.data.user)
    // ここでエラーを吐く
    commit('addMyFollowee', parseInt(id))
    // フォロー数を新しくしたcurrentUserを新たにセットする。
    // 別のstoreにアクセスする方法が知りたい
    commit('setCurernt', currentUser, {root: true})
    console.log(state.myFollowee)
    commit('changeStatus')
  },

  // フォローを外す
  async removeFollow({commit}, {state, id}) {
    await axios.post(`http://localhost:3000/users/${id}/remove`)
    const newArray = state.myFollowee.filter(n => n != id)
    commit('setMyFollowee', newArray)
    commit('changeStatus')
  }

	}
}
