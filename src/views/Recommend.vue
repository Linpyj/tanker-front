<template>
	<v-container>
    <h2 class="ml-2 mt-5">おすすめユーザー</h2>
    <v-spacer />
    <v-btn
      rounded color="primary" dark
      @click.native="linkToTl"
    >
      完了する
      </v-btn>
    <title />
    <recommend-content
      v-for="user in recommendUsers"
      :key="user.id"
      :user="user"
    />
	</v-container>
</template>

<script>
import RecommendContent from '@/components/RecommendContent.vue'
import Title from '@/components/Title.vue'
export default {
	name: 'Recommend',
	components: {
    RecommendContent,
    Title
  },
  computed: {
    recommendUsers() {
      return this.$store.state.user.recommendUsers
  }
  },
  methods: {
    linkToTl() {
      this.$router.push('/timeline')
    }
  },
  mounted() {
    this.$store.dispatch('fetchRecommend')
  }

}

</script>