<template>
  <v-container>
    <v-card
      class="mx-auto mt-5"
      max-width="70%"
    >
      <v-card-title>
        ログイン
      </v-card-title>
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
            class="mr-4"
            @click="submitLoginDatas()"
          >
            ログイン
          </v-btn>
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
