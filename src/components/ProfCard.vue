<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="7">
        <div class="flex">
          <h2 class="ml-2 mt-5"><slot>マイページ</slot></h2>
          <v-spacer />
          <div>
            <v-btn
              v-if="user.id!=currentUser.id"
              color="blue"
              style="color: white;"
              text
              @click.native="createFollow"
            >
              Follow
            </v-btn>
          </div>
        </div>
        <v-card
          outlined
        >
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://prtimes.jp/i/22901/578/resize/d22901-578-199927-0.jpg"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            
            <v-list-item-title>
              {{ user.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ user.uid }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          {{ user.intro }}
        </v-card-text>

        <v-card-actions>
          <v-btn
            text
          >
            {{ user.followee }} フォロー
          </v-btn>
          <v-btn
            text
          >
            {{ user.follower }} フォロワー
          </v-btn>
        </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
	data: function() {
		return {
			user: {
        id: '5',
				name: 'ケン吉田',
				uid: '@kenyoshida',
        intro: '私は吉田腱と申します。短歌が好きで、毎日100首詠んで暮らしています。仲良く短歌を読んで遊びましょう。私は吉田腱と申します。短歌が好きで、毎日100首詠んで暮らしています。仲良く短歌を読んで遊びましょう。',
        followee: '3',
        follower: '5 billion'        
			}
		}
  },
  computed: {
    currentUser() {
      return this.$store.state.user.current
    }
  },
  methods: {
    createFollow: function() {
      var id = this.user.id
      this.$store.dispatch('createFollow', {id})
    }
  }
}
</script>