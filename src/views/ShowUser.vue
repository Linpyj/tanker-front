 <template>
  <div>
    <prof-card />
    <post-card
      v-for="post in posts" 
      :key="post.id"
      :item="post"
      class="py-0"
    />
    
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'
import ProfCard from '@/components/ProfCard.vue'

export default {
    name: 'Mypage',
    components: {
      PostCard,
      ProfCard
    },
    methods: {
      // fetchMyPosts: function() {
      //   this.$store.dispatch('fetchMyPosts', { id: this.$store.state.user.current.id })
      // }
    },
    computed: {
      posts() {
        return this.$store.state.post.posts
      }
    },
    mounted: function() {
      this.$store.dispatch('fetchMyPosts', { id: this.$store.state.user.current.id })
    }

}
</script>