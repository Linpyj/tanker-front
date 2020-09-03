 <template>
  <div>
    <!-- <div class="mt-5 ml-5">
      {{ this.$store.state.user.current }}
    </div>
    <div class="mt-5 ml-5">
      {{ this.$store.state.post }}
    </div> -->

    <prof-card />
    
    <v-tabs
      v-model="tab"
      centered
    >
      <v-tab>
        <v-btn
          text
          @click.native="fetchMyPosts"
        >
          自分の短歌
        </v-btn>
      </v-tab>
      <v-tab>
        <v-btn
          text
          @click.native="fetchLikePosts"
        >
          お気に入り
        </v-btn>
      </v-tab>
    </v-tabs>
    <v-tabs-items
      v-model="tab"
    >
      <v-tab-item>
        <post-card
          v-for="post in posts" 
          :key="post.id"
          :item="post"
          class="py-0"
        />
      </v-tab-item>
      <v-tab-item>
        <h1>Tab2の内容ですよ</h1>
        <post-card 
          v-for="post in posts" 
          :key="post.id"
          class="py-0"
        />
      </v-tab-item>
    </v-tabs-items>
    
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
    data() {
      return {
        tab: ''
      }
    },
    methods: {
      fetchMyPosts: function() {
        this.$store.dispatch('fetchMyPosts', { id: this.$store.state.user.current.id })
      },
      fetchLikePosts: function() {
        // likeしたPostsをstateにセットする処理を書く
      }
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