<template>
  <v-container>
      <v-row justify="center" v-if="$mq==='pc'">
        <v-col cols="7">
          <h2 class="mt-5 ml-2">ログイン</h2>
          <div class="mt-2 mb-2"><v-btn color="primary" @click="twitterLogin">Twitter ログイン</v-btn></div>
          <v-card
            class="mx-auto"
          >
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="uid"
                  label="ユーザーID"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  type="password"
                  label="パスワード"
                  required
                ></v-text-field>
                <v-btn
                  v-if="!this.uid||!this.password"
                  class="mr-4"
                  style="pointer-events:none;"
                  text
                  color="black"
                >
                  ログイン
                </v-btn>
                <v-btn
                  v-else
                  text
                  color="blue"
                  @click="submitLoginDatas()"
                >
                  ログイン
                </v-btn>
                <v-alert
                  :value="alert"
                  border="left"
                  colored-border
                  type="error"
                  elevation="2"
                  transition="scale-transition"
                >
                  ログインに失敗しました。
                </v-alert>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                style="margin-top: 4px;"
                to="/signup"
                color="primary"
                text
              >
                新規登録ページへ
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" v-if="$mq==='sp'">
        <v-col cols="12">
          <h2 class="mt-5 ml-2">ログイン</h2>
          <div class="mt-2 mb-2"><v-btn color="primary" @click="twitterLogin">Twitter ログイン</v-btn></div>
          <v-card
            class="mx-auto"
          >
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="uid"
                  label="ユーザーID"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  type="password"
                  label="パスワード"
                  required
                ></v-text-field>
                <v-btn
                  v-if="!this.uid||!this.password"
                  class="mr-4"
                  style="pointer-events:none;"
                  text
                  color="black"
                >
                  ログイン
                </v-btn>
                <v-btn
                  v-else
                  text
                  color="blue"
                  @click="submitLoginDatas()"
                >
                  ログイン
                </v-btn>
                <v-alert
                  :value="alert"
                  border="left"
                  colored-border
                  type="error"
                  elevation="2"
                  transition="scale-transition"
                >
                  ログインに失敗しました。
                </v-alert>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                style="margin-top: 4px;"
                to="/signup"
                color="primary"
                text
              >
                新規登録ページへ
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>


  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
      return {
        name: '',
        uid: '',
        password: '',
        alert: false
      }
    },
    methods: {
      async submitLoginDatas() {

        await this.$store.dispatch("signin",
          {
            uid: this.uid, 
            password: this.password
          }
        )
        const currentUser = this.$store.state.user.current
        if (!currentUser) {
          this.alert = true
        } else if (currentUser.followee_count == 0) {
          this.$router.push('/recommend')
        } else {
          this.$router.push('/timeline')
        }
      },
    twitterLogin() {
      const provider = new firebase.auth.TwitterAuthProvider()

      firebase.auth().signInWithPopup(provider).then(result => {
        console.log(result.user)
        const user = result.user
        this.$store.dispatch('twitterSignin', user)
        // twitterログインしたユーザーをRailsに
        // CurrentUserとして登録する
        // this.$store.dispatch('googleSignin')
        this.$router.push('/timeline')
      }).catch(error => {
        console.log(error)
        this.errorMessage = error.message
        this.showError = true
      })
    }
    }
  }
</script>
