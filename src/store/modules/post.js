import axios from 'axios'

export default {

state: {
	content: [],
	posts: [],
	followeePosts: [],
	likesCount: null,
	likeStatus: false,
	likePosts: []
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
	setLikePosts(state, payload) {
		state.likePosts = payload
	},
},
actions: {
	async createPost({commit}, {content, tag_list}) {
    const post = await axios.post(process.env.VUE_APP_BASE_API+'/api/posts/create', {content, tag_list})
		commit('setContent', post.data)
	},
	async fetchMyPosts({commit}, {id}) {
		const posts = await axios.get(process.env.VUE_APP_BASE_API+'/api/users/'+id)
		commit('setPosts', posts.data.posts)
	},
	async fetchOthersPosts({commit}) {
		// followeeのpostsを取得するコントローラーを呼び出す
    const posts = await axios.get(process.env.VUE_APP_BASE_API+'/api/posts/timeline')
		commit('setFolloweePosts', posts.data.posts)
},
	async fetchLikePosts({commit}, {id}) {
		const res = await axios.get(process.env.VUE_APP_BASE_API+'/api/users/'+id)
		commit('setLikePosts', res.data.liked_posts)
	},
	async createLikes({commit}, {id}) {
		const res = await axios.post(process.env.VUE_APP_BASE_API+`/api/posts/${id}/like`)
		commit('setLikesCount', res.data.likes_count)
		commit('setLikesStatus', res.data.like_status)
	},
	async deleteLikes({commit}, {id}) {
		const res = await axios.post(process.env.VUE_APP_BASE_API+`/api/posts/${id}/unlike`)
		commit('setLikesCount', res.data.likes_count)
		commit('setLikesStatus', res.data.like_status)
	}
	}
}
