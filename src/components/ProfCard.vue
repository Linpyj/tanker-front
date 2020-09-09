<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="7">
        <h2 class="ml-2 mt-5"><slot>マイページ</slot></h2>
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
              {{ udata.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              @{{ udata.uid }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          {{ udata.profile }}
          {{ udata }}
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
          <v-spacer />
          <div
            v-if="user.id!=currentUser.id"
          >
            <v-btn
              v-if="!isFollowing"
              color="blue"
              text
              @click.native="createFollow"
            >
              フォローする
            </v-btn>
            <v-btn
              v-else
              color="black"
              text
              @click.native="removeFollow"
            >
              フォローしています
            </v-btn>
          </div>
          <div
            v-else
          >
            <v-btn
              color="blue"
              text
              @click.native="linkToConfig"
            >
              プロフィールを編集
            </v-btn>
          </div>
        </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props:['udata'],
	data: function() {
		return {
			user: {
        id: '5',
				name: 'ケン吉田',
				uid: 'kenyoshida',
        intro: '私は吉田腱と申します。短歌が好きで、毎日100首詠んで暮らしています。仲良く短歌を読んで遊びましょう。私は吉田腱と申します。短歌が好きで、毎日100首詠んで暮らしています。仲良く短歌を読んで遊びましょう。',
        followee: '3',
        follower: '5 billion'        
			}
		}
  },
  computed: {
    currentUser() {
      return this.$store.state.user.current
    },
    isFollowing() {
      return this.$store.state.follow.state
    }
  },
  methods: {
    createFollow: function() {
      var id = this.user.id
      this.$store.dispatch('createFollow', {id})
    },
    removeFollow: function() {
      var id = this.user.id
      this.$store.dispatch('removeFollow', {id})
    },
    linkToConfig: function() {
      this.$router.push('/config')
    }
  }
}
</script>