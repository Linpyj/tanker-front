<template>
  <v-container>
    <v-row justify="center" v-if="$mq==='pc'">
      <v-col cols="7">
        <h2 class="ml-2 mt-5"><slot>マイページ</slot></h2>
        <v-card
          outlined
        >
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="udata.image_name.url"
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
          <br>
          <br>
          {{ udata }}
          <br>
          <br>
          {{ currentUser }}
          <br>
          <br>
          {{ udata.image_name.url }}
        </v-card-text>

        <v-card-actions>
          <v-btn
            text
          >
            {{ follow_count }} フォロー
          </v-btn>
          <v-btn
            text
          >
            {{ follower_count }} フォロワー
          </v-btn>
          <v-spacer />
          <div
            v-if="udata.id!=currentUser.id"
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
            <v-row
              justify="center"
            >
              <v-dialog
                v-model="dialog"
                width="500"
                class="mx-auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    v-on="on"
                  >
                    プロフィールを編集
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline grey lighten-2">
                    プロフィール編集
                  </v-card-title>

                  <v-card-text>
                    <v-form>
                      <v-text-field
                        v-model="name"
                        label="ユーザー名"
                      ></v-text-field>
                      <v-text-field
                        v-model="image_name"
                        label="プロフィール画像"
                      ></v-text-field>
                      <v-text-field
                        v-model="profile"
                        label="自己紹介文"
                      ></v-text-field>


                      <v-checkbox v-model="v0" label="パスワードを変更"></v-checkbox>
                      <v-banner v-model="v0" single-line transition="slide-y-transition">
                        <v-text-field
                          v-model="old_password"
                          type="password"
                          label="古いパスワード"
                        ></v-text-field>
                        <v-text-field
                          v-model="new_password"
                          type="password"
                          label="新しいパスワード"
                        ></v-text-field>
                        <v-text-field
                          v-model="new_password_confirmation"
                          type="password"
                          label="新しいパスワードを再度入力"
                        ></v-text-field>
                      </v-banner>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      v-if="this.name||this.image_name||this.profile||(this.old_password&&this.new_password&&this.new_password_confirmation)"
                      class="mr-4"
                      text
                      color="blue"
                      @click.native="updateUser"
                    >
                      編集を完了
                    </v-btn>
                    <v-btn
                      v-else
                      class="mr-4"
                      style="pointer-events:none;"
                      text
                      color="black"
                    >
                      編集を完了
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </div>
        </v-card-actions>

        </v-card>
      </v-col>
    </v-row>






    <v-row v-if="$mq==='sp'">
      <v-col cols="12">
        <div class="flex">
          <div>
            <h2 
              class="ml-2 mt-5"
            ><slot>マイページ</slot></h2>
          </div>
          <v-spacer />
          {{ udata }}
          <br>
          {{ currentUser }}
          <div
            v-if="udata.id!=currentUser.id"
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
            <v-row
              justify="center"
            >
              <v-dialog
                v-model="dialog"
                width="500"
                class="mx-auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    v-on="on"
                  >
                    プロフィールを編集
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline grey lighten-2">
                    プロフィール編集
                  </v-card-title>

                  <v-card-text>
                    <v-form>
                      <v-text-field
                        v-model="name"
                        label="ユーザー名"
                      ></v-text-field>
                      <v-text-field
                        v-model="image_name"
                        label="プロフィール画像"
                      ></v-text-field>
                      <v-text-field
                        v-model="profile"
                        label="自己紹介文"
                      ></v-text-field>


                      <v-checkbox v-model="v0" label="パスワードを変更"></v-checkbox>
                      <v-banner v-model="v0" single-line transition="slide-y-transition">
                        <v-text-field
                          v-model="old_password"
                          type="password"
                          label="古いパスワード"
                        ></v-text-field>
                        <v-text-field
                          v-model="new_password"
                          type="password"
                          label="新しいパスワード"
                        ></v-text-field>
                        <v-text-field
                          v-model="new_password_confirmation"
                          type="password"
                          label="新しいパスワードを再度入力"
                        ></v-text-field>
                      </v-banner>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      v-if="this.name||this.image_name||this.profile||(this.old_password&&this.new_password&&this.new_password_confirmation)"
                      class="mr-4"
                      text
                      color="blue"
                      @click.native="updateUser"
                    >
                      編集を完了
                    </v-btn>
                    <v-btn
                      v-else
                      class="mr-4"
                      style="pointer-events:none;"
                      text
                      color="black"
                    >
                      編集を完了
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
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
              {{ udata.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              @{{ udata.uid }}
            </v-list-item-subtitle>
            
          </v-list-item-content>
        </v-list-item>


        <v-card-text>
          {{ udata.profile }}

          <!-- {{ udata }} -->
        </v-card-text>

        <v-card-actions>
          <v-btn
            text
          >
            {{ follow_count }} フォロー
          </v-btn>
          <v-btn
            text
          >
            {{ follower_count }} フォロワー
          </v-btn>
          
        </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props:['udata'],
	data() {
		return {
			user: {
        id: '5',
				name: 'ケン吉田',
				uid: 'kenyoshida',
        intro: '私は吉田腱と申します。短歌が好きで、毎日100首詠んで暮らしています。仲良く短歌を読んで遊びましょう。私は吉田腱と申します。短歌が好きで、毎日100首詠んで暮らしています。仲良く短歌を読んで遊びましょう。',
        followee: '3',
        follower: '5 billion'        
      },
      dialog: '',

      name: '',
      image_name: '',
      profile: '',
      old_password: '',
      new_password: '',
      new_password_confirmation: '',
      v0: false
		}
  },
  computed: {
    currentUser() {
      return this.$store.state.user.current
    },
    isFollowing() {
      return this.$store.state.follow.status
    },
    follower_count() {
      return this.$store.state.user.thisUserFollowerCount
    },
    follow_count() {
      return this.$store.state.user.thisUserFollowCount
    }
  },
  methods: {
    createFollow() {
      var id = this.$route.params['id']
      this.$store.dispatch('createFollow', {id})
    },
    removeFollow() {
      var id = this.$route.params['id']
      console.log(id)
      // console.log(this.$route.params['id'])
      this.$store.dispatch('removeFollow', {id})
    },
    updateUser() {
      var name = this.name
      var image_name = this.image_name
      var profile = this.profile
      var old_password = this.old_password
      var password = this.new_password
      var password_confirmation = this.new_password_confirmation
      if (!password) {
        this.$store.dispatch('updateUser', {
          name,
          image_name,
          profile
        })
      } else {
        this.$store.dispatch('updateUser', {
          name, 
          image_name, 
          profile,
          old_password,
          password,
          password_confirmation
        })
      }
    }
  }
}
</script>