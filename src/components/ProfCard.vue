<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="7">
      <h2 class="ml-2 mt-5"><slot>マイページ</slot></h2>
        <v-card
          outlined
        >
          <v-card-text
						class="headline pb-0"
						style="display:flex;"
					>
						<img
							src="https://i0.wp.com/masamunenet.com/wp-content/uploads/2018/05/zzzzzz-8.png?fit=500%2C316&ssl=1"
							height="50px;"
							width="50px"
              style="border-radius: 50%"
						>
						<div>
							<div class="title ml-3 mb-0 pb-0">
								{{ user.name }}
							</div>
							<div
								class="subtitle-2 ml-3 mt-0 pt-0"
								style="opacity: 0.8;"
							>
								{{ user.uid }}
							</div>
							<div class="ml-3 subtitle-1 pt-3">
								{{ user.intro }}
							</div>
							<div class="mt-5">
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
							</div>
						</div>
						<v-spacer />
            <div
              v-if="user.id!=currentUser.id"
            >
              <v-btn
                color="blue"
                style="color: white;"
              >
                Follow
              </v-btn>
            </div>
          </v-card-text>
          
          <v-card-actions
            class="py-0">
						
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
  }
}
</script>