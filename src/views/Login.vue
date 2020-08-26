<template>
  <v-container>
    <v-card>
      <v-card-title>
        Login
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="name"
            :counter="10"
            label="name"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :counter="10"
            label="password"
            required
          ></v-text-field>
          <v-btn
            class="mr-4"
            @click="submitLoginDatas()"
          >
            Login
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    {{ getName }}
    <v-row class="button">
      <v-col>
        <v-btn
          style="margin-top: 4px;"
          to="/signup"
        >
          Signup
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      async submitLoginDatas() {
        console.log('HI')
        console.log(this.$store.state.user.name)
        // ここまでは呼ばれてる
        // store自体も登録できている(下のgetNameから確認できる)
        await this.$store.dispatch("signin",
          {
            name: this.name, 
            password: this.password
          }, { root: true }
        )
        console.log(this.$store.state.user.current)
      }
    },
    // async fetch({store, axios}) {
    //   await axios.$post('http://localhost:3000/login', {name: this.name, password: this.password})
		// 		.then((response) => {
		// 			store.dispatch('user/setCurrent', response.data)
    // }
    //     )},
    computed: {
      getName() {
        return this.$store.state.user.name
      }
    }
  }
</script>
