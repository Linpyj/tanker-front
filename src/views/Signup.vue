<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="7">
        <h2 class="ml-2 mt-5">新規会員登録</h2>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="uid"
                :counter="10"
                label="ユーザーID (任意の文字列)"
                required
              ></v-text-field>
              <v-text-field
                v-model="name"
                :counter="10"
                label="ユーザー名"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :counter="10"
                label="パスワード"
                required
              ></v-text-field>
              <v-text-field
                v-model="password2"
                :counter="10"
                label="パスワードをもう一度入力してください。"
                required
              ></v-text-field>
              <v-btn
                v-if="!uid||!name||!password||!password2"
                class="mr-4"
                color="black"
                text
                style="pointer-events:none;"
              >
                この情報で登録
              </v-btn>
              <v-btn
                v-else
                class="mr-4"
                @click="submitSignupDatas"
                text
                color="primary"
              >
                この情報で登録
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              style="margin-top: 4px;"
              to="/"
              color="primary"
              text
            >
              ログインページへ
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
        uid: '',
        name: '',
        password: '',
        password2: ''
    }
    },
    methods: {
      submitSignupDatas: function() {
        var uid = this.uid
        var name = this.name
        var password = this.password
        var password_confirmation = this.password2
        this.$store.dispatch('signup', {uid,name,password,password_confirmation})
        console.log(name + password);
      }
    }
  }
</script>