 <template>
  <div>
    <post-modal />
    <post-card
			v-for="result in results" 
			:key="result.id"
			:item="result"
			class="py-0"
    />

		<div class="title ml-5 mt-5">
			ここにフォローしてる人の投稿一覧を表示する
		</div>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'
import PostModal from '@/components/PostModal.vue'

export default {
	name: 'Timeline',
	data() {
		return {
			results: [
				// ダミーデータ
				{"id": 1, "user_id": 7, "content": '山彦や　やまびこやまびこ　山彦や', "created_at": "2020-08-03"},
				{"id": 2, "user_id": 4, "content": '古池や　買わず買わず買わず　古池や', "created_at": "2020-08-03"},
				{"id": 3, "user_id": 3, "content": '春過ぎて夏来にけらし白妙の衣干すてふ天の香具山', "created_at": "2020-08-04"},
				{"id": 4, "user_id": 6, "content": '秋の田のかりほの庵の苫をあらみわが衣手は露にぬれつつ', "created_at": "2020-08-05"},
				{"id": 5, "user_id": 17, "content": '山彦や　やまびこ　山彦や', "created_at": "2020-08-03"},
				{"id": 6, "user_id": 2, "content": '古池や　買わず買わず　古池や', "created_at": "2020-08-03"},
				{"id": 7, "user_id": 1, "content": '春過ぎて衣干すてふ天の香具山', "created_at": "2020-08-04"},
				{"id": 8, "user_id": 5, "content": '秋の田のらみわが衣手は露にぬれつつ', "created_at": "2020-08-05"}
			]
		}
	},
	components: {
			PostCard,
			PostModal
	},
	computed: {
		posts() {
			return this.$store.state.post.posts
		}
	},
	mounted() {
		// フォローしてる人達の投稿をstateにsetする処理を書く
	}
}
</script>