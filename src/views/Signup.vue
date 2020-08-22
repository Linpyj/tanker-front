<template>
  <v-container>
    <v-card>
      <v-card-title>
        Signup
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
        name: '',
        password: ''
    }
    },
    methods: {
      submitSignupDatas: function() {
        var name = this.name
        var password = this.password
        console.log(name + password);
      }
    }
  }
</script>