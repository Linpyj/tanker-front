<template>
  <div>

    <prof-card
      :udata="currentUser"
    />
    
    <v-tabs
      v-model="tab"
      centered
      class="mb-5"
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
        <post-content
          v-for="post in posts" 
          :key="post.id"
          :item="post"
          class="py-0"
        />
      </v-tab-item>
      <v-tab-item>
        <post-content
          v-for="post in likePosts" 
          :key="post.id"
          :item="post"
          class="py-0"
        />
      </v-tab-item>
    </v-tabs-items>
    
  </div>
</template>

<script>
import PostContent from '@/components/PostContent.vue'
import ProfCard from '@/components/ProfCard.vue'

export default {
    name: 'Mypage',
    components: {
      PostContent,
      ProfCard
    },
    data() {
      return {
        tab: ''
      }
    },
    methods: {
      fetchMyPosts() {
        this.$store.dispatch('fetchMyPosts', { id: this.$store.state.user.current.id })
      },
      fetchLikePosts() {
        this.$store.dispatch('fetchLikePosts', { id: this.$store.state.user.current.id })
      }
    },
    computed: {
      posts() {
        return this.$store.state.post.posts
      },
      likePosts() {
        return this.$store.state.post.likePosts
      },
      currentUser() {
        return this.$store.state.user.current
      }
    },
    mounted() {
      this.$store.dispatch('fetchUser', {id: this.$store.state.user.current.id })
      this.$store.dispatch('fetchMyPosts', { id: this.$store.state.user.current.id })
      this.$store.dispatch('fetchLikePosts', { id: this.$store.state.user.current.id })
    }

}
</script>