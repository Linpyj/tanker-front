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
		state.posts.push(payload)
	}
},
actions: {
	async createPost({commit}, {content}) {
		const post = await axios.post('http://localhost:3000/posts/create', {content})
		console.log(post)
		commit('setContent', post.data)
	},
	async fetchMyPosts({commit}) {
		var id = this.$store.state.user.current.id
		const posts = await axios.get('http://localhost:3000/users/'+id)
			// .then((res) => {
			// 	commit('setPosts', res)
		console.log(posts)
		commit('setPosts', posts.data)
		}
	}
}
