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
    // follows#createを叩く
    const currentUser = await axios.post(`http://localhost:3000/users/${id}/follow`)
    console.log('currentUser in follow.js')
    console.log(currentUser.data.user)
    // フォロー数を新しくしたcurrentUserを新たにセットする。
    // 別のstoreにアクセスする方法が知りたい
    commit('setCurrent', currentUser, {root: true})
    // console.log(state.myFollowee)
    // commit('changeStatus')
  },

  // フォローを外す
  async removeFollow({commit}, {id}) {
    const currentUser = await axios.post(`http://localhost:3000/users/${id}/remove`)
    commit('setCurrent', currentUser, {root: true})
  }

	}
}
