 <template>
  <div>
    <post-modal />
		<div v-if="followeePosts!=null">
			<post-content
				v-for="post in followeePosts" 
				:key="post.id"
				:item="post"
				class="py-0"
			/>
		</div>
  </div>
</template>

<script>
import PostContent from '@/components/PostContent.vue'
import PostModal from '@/components/PostModal.vue'

export default {
	name: 'Timeline',
	components: {
			PostContent,
			PostModal
	},
	computed: {
		followeePosts() {
			return this.$store.state.post.followeePosts
		}
	},
	mounted() {
		// フォローしてる人達の投稿をstateにsetする処理を書く
		this.$store.dispatch('fetchOthersPosts')
	}
}
</script>