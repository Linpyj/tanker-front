<template>
  <v-container>
    <v-card>
      <v-card-title>
        Signup
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="uid"
            :counter="10"
            label="uid"
            required
          ></v-text-field>
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
          <v-text-field
            v-model="password2"
            :counter="10"
            label="password2"
            required
          ></v-text-field>
          <v-btn
            class="mr-4"
            @click="submitSignupDatas"
          >
            Signup
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <v-row class="button">
      <v-col>
        <v-btn
          style="margin-top: 4px;"
          to="/"
        >
          Login
        </v-btn>
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