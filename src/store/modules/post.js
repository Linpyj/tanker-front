import axios from 'axios'

export default {

state: {
	content: [],
	posts: []
},
mutations: {
	setContent(state, payload) {
		state.content = payload
	},
	setPosts(state, payload) {
		state.posts = payload
	}
},
actions: {
	async createPost({commit}, {content}) {
		const post = await axios.post('http://localhost:3000/posts/create', {content})
		commit('setContent', post.data)
	},
	async fetchMyPosts({commit}, {id}) {
		const posts = await axios.get('http://localhost:3000/users/'+id)
		console.log(posts)
			// .then((res) => {
			// 	commit('setPosts', res)
		commit('setPosts', posts.data.posts)
		}
	}
}
