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
              :src="udata.img_src"
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
            @click.native="open1"
          >
            {{ follow_count }} フォロー
          </v-btn>
          <v-btn
            text
            @click.native="open2"
          >
            {{ follower_count }} フォロワー
          </v-btn>

          <v-row justify="center">
            <v-dialog v-model="fo" scrollable max-width="80%" height="80%">
              <v-card>
                <v-tabs grow v-model="active_tab">
                  <v-tab v-for="tab of tabs" :key="tab.id">
                    {{tab.name}}
                  </v-tab>
                </v-tabs>

                <v-tabs-items
                  v-model="active_tab"
                >
                  <v-tab-item
                  >
                    <recommend-content
                      v-for="user in followee_index"
                      :key="user.id" 
                      :user="user"
                    />
                  </v-tab-item>

                  <v-tab-item
                  >
                    <recommend-content
                      v-for="user in follower_index"
                      :key="user.id" 
                      :user="user"
                    />
                  </v-tab-item>

                </v-tabs-items>
              </v-card>
            </v-dialog>
          </v-row>
        </v-card-actions>

        </v-card>
      </v-col>
    </v-row>


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
                      <div class="preview-item">
                        <img :src="avatar" alt="Avatar" class="image">
                        <div>
                        <input
                          type="file"
                          id="avatar_name"
                          accept="image/jpeg, image/png"
                          enctype='multipart/form-data'
                          @change="onImageChange"
                          />
                        </div>
                      </div>
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





    <v-row v-if="$mq==='sp'">
      <v-col cols="12">
        <div class="flex">
          <div>
            <h2 
              class="ml-2 mt-5"
            ><slot>マイページ</slot></h2>
          </div>
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


                      <div class="preview-item">
                        <img :src="avatar" alt="Avatar" class="image">
                        <div>
                        <input
                              type="file"
                              id="avatar_name"
                              accept="image/jpeg, image/png"
                              enctype='multipart/form-data'
                              @change="onImageChange"
                              />
                        </div>
                      </div>
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
                      v-if="this.name||this.avatar||this.profile||(this.old_password&&this.new_password&&this.new_password_confirmation)"
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
              :src="udata.img_src"
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
            @click.native="open1"
          >
            {{ follow_count }} フォロー
          </v-btn>
          <v-btn
            text
            @click.native="open2"
          >
            {{ follower_count }} フォロワー
          </v-btn>

          <v-row justify="center">
            <v-dialog v-model="fo" scrollable max-width="80%" height="80%">
              <v-card>
                <v-tabs grow v-model="active_tab">
                  <v-tab v-for="tab of tabs" :key="tab.id">
                    {{tab.name}}
                  </v-tab>
                </v-tabs>

                <v-tabs-items
                  v-model="active_tab"
                >
                  <v-tab-item
                  >
                    <recommend-content
                      v-for="user in followee_index"
                      :key="user.id" 
                      :user="user"
                    />
                  </v-tab-item>

                  <v-tab-item
                  >
                    <recommend-content
                      v-for="user in follower_index"
                      :key="user.id" 
                      :user="user"
                    />
                  </v-tab-item>

                </v-tabs-items>
              </v-card>
            </v-dialog>
          </v-row>
        </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RecommendContent from '@/components/RecommendContent.vue'
export default {
  name: 'ProfCard',
  props:['udata'],
  components: {
    RecommendContent
  },
	data() {
		return {
      dialog: '',
      uploadedImage: '',
      img_name: '',
      name: '',
      image_name: '',
      avatar: '',
      profile: '',
      old_password: '',
      new_password: '',
      new_password_confirmation: '',
      v0: false,
      fo: false,
      uploadFile: null,
      active_tab: 0,
      tabs: [
        { id: 1, name: 'フォロー' },
        { id: 2, name: 'フォロワー' }
      ]
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
    },
    follower_index() {
      return this.$store.state.follow.followerIndex
    },
    followee_index() {
      return this.$store.state.follow.followeeIndex
    }
  },
  methods: {
    open1() {
      this.fo = true
      this.active_tab = 0
    },
    open2() {
      this.fo = true
      this.active_tab = 1
    },
    createFollow() {
      var id = this.$route.params['id']
      this.$store.dispatch('createFollow', {id})
    },
    removeFollow() {
      var id = this.$route.params['id']
      this.$store.dispatch('removeFollow', {id})
    },
    getBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },
    onImageChange (e) {
      const images = e.target.files || e.dataTransfer.files
      this.getBase64(images[0])
        .then(image => this.avatar = image)
        .catch(error => this.setError(error, '画像のアップロードに失敗しました。'))
    },

    async updateUser() {
      var name = this.name
      var image_name = this.avatar
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

  },

  created() {
    this.$store.dispatch('followeeIndex', {id: this.udata.id})
    this.$store.dispatch('followerIndex', {id: this.udata.id})
  }
}
</script>

<style>
label > input {
  display: none;
}

.preview-item-file {
  max-height: 300px;
  max-width: 300px;
}


.input-item__label {
  padding: 0 1rem;
  border: solid 1px #888;  
  content: '+';
  font-size: 1rem;
  color: #888;
  padding-left: 1rem;
}

</style>