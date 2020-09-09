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
    const post = await axios.post('http://localhost:3000/posts/create', {content, tag_list})
		commit('setContent', post.data)
	},
	async fetchMyPosts({commit}, {id}) {
		const posts = await axios.get('http://localhost:3000/users/'+id)
		commit('setPosts', posts.data.posts)
		},
	async fetchOthersPosts({commit}) {
		// followeeのpostsを取得するコントローラーを呼び出す
    const posts = await axios.get('http://localhost:3000/posts/timeline')
    console.log(posts)
		commit('setFolloweePosts', posts.data.posts)
  }
	}
}
