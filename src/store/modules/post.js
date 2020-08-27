import axios from 'axios'

export default {

state: {
	content: ''
},
mutations: {
	setContent(state, payload) {
		state.content = payload
	}
},
actions: {
	async createPost({commit}, {content}) {
		const post = await axios.post('http://localhost:3000/posts/create', {content})
		commit('setContent', post.data)
}
}
}