<template>
  <v-container>
      <v-row justify="center" v-if="$mq==='pc'">
        <v-col cols="7">
          <h2 class="mt-5 ml-2">ログイン</h2>
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
              </v-form>
            </v-card-text>
            <v-card-actions>
              {{ $mq }}
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
              </v-form>
            </v-card-text>
            <v-card-actions>
              {{ $mq }}
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
export default {
    data() {
      return {
        name: '',
        uid: '',
        password: ''
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
        console.log('currentUser: ')
        console.log(currentUser)
        if (!currentUser) {
          this.$router.push('/')
        } else {
          this.$router.push('/timeline')
        }
      }
    }
  }
</script>
