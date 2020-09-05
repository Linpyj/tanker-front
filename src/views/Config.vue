<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="7">
        <h2 class="mt-5 ml-2">設定</h2>
        <v-card
          class="mx-auto mt-5"
        >
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="name"
                label="プロフ画像"
              ></v-text-field>              
              <v-text-field
                v-model="name"
                label="表示名"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="パスワード"
              ></v-text-field>
              <v-textarea
                v-model="intro"
                label="自己紹介"
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              text
            >
              変更を保存
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
      password: '',
      intro: ''
    }
  }
}
</script>