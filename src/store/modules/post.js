import axios from 'axios'

export default {

state: {
	content: [],
	posts: [],
	followeePosts: []
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
	}
},
actions: {
	async createPost({commit}, {content, tag_list}) {
    const post = await axios.post('http://localhost:3000/api/posts/create', {content, tag_list})
		commit('setContent', post.data)
	},
	async fetchMyPosts({commit}, {id}) {
		const posts = await axios.get('http://localhost:3000/api/users/'+id)
		commit('setPosts', posts.data.posts)
		},
	async fetchOthersPosts({commit}) {
		// followeeのpostsを取得するコントローラーを呼び出す
    const posts = await axios.get('http://localhost:3000/api/posts/timeline')
		commit('setFolloweePosts', posts.data.posts)
  }
	}
}
