 <template>
  <div>
    <prof-card
      :udata="user"
    >
      ユーザーページ
    </prof-card>

    <post-content
      v-for="post in posts"
      :key="post.id"
      :item="post"
      class="py-0"
    />


    
  </div>
</template>

<script>
import PostContent from '@/components/PostContent.vue'
import ProfCard from '@/components/ProfCard.vue'

export default {
    name: 'ShowUser',
    components: {
      PostContent,
      ProfCard
    },
    methods: {
      // fetchMyPosts: function() {
      //   this.$store.dispatch('fetchMyPosts', { id: this.$store.state.user.current.id })
      // }
    },
    computed: {
      posts() {
        return this.$store.state.user.thisUserPosts
      },
      id() {
        return this.$route.params['id']
      },
      user() {
        return this.$store.state.user.thisUser
      }
    },
    mounted() {
      // this.$route.params['id']でuser_idが取得できるので、
      // userの情報とそのuserが持つpostsをfetch
      this.$store.dispatch('fetchUser', {id: this.$route.params['id']})
}

}
</script>