import axios from 'axios'

export default {

state: {
	content: [],
	posts: [],
	followeePosts: [],
  likesCount: null,
  likeStatus: false
},
mutations: {
	setContent(state, payload) {
		state.content = payload
	},
	setPosts(state, payload) {
		state.posts = payload
	},
	setFolloweePosts(state, payload) {
		state.followeePosts = payload
	},
	setLikesCount(state, payload) {
		state.likesCount = payload
  },
  setLikesStatus(state, payload) {
		state.likeStatus = payload
	},
},
actions: {
	async createPost({commit}, {content, tag_list}) {
    const post = await axios.post('/api/posts/create', {content, tag_list})
		commit('setContent', post.data)
	},
	async fetchMyPosts({commit}, {id}) {
		const posts = await axios.get('/api/users/'+id)
		commit('setPosts', posts.data.posts)
	},
	async fetchOthersPosts({commit}) {
		// followeeのpostsを取得するコントローラーを呼び出す
    const posts = await axios.get('/api/posts/timeline')
		commit('setFolloweePosts', posts.data.posts)
  },


  // async createLikes({commit}, {id}) {
  //   const res = await axios.post(`/api/posts/#{id}/like`)
  //   // commit('setLikesCount', )
  //   // commit('setLikesStatus', )
  // },
  // async deleteLikes({commit}, {id}) {
  //   const res = await axios.post(`/api/posts/#{id}/unlike`)
  //   // commit('setLikesCount', )
  //   // commit('setLikesStatus', )
  // },
	}
}
