<template>
  <v-app>
    <header>
      <v-app-bar
        app
        color="indigo"
        dark
      >
        <v-toolbar-title>
          <v-btn
            text
            @click.native="linkToTl(); $event.target.blur()"
          >
            Tanker
          </v-btn>
        </v-toolbar-title>
        <v-spacer />
        <v-app-bar-nav-icon @click="drawer=true" />
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            active-class="text--accent-4"
          >
            <v-list-item
              text
              @click="linkToTl"
            >
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>タイムライン</v-list-item-title>
            </v-list-item>

            <v-list-item
                text
                @click="linkToMypage"
            >
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>マイページ</v-list-item-title>
            </v-list-item>

            <v-list-item
              text
            >
              <v-list-item-icon>
                <v-icon>mdi-exit-to-app </v-icon>
              </v-list-item-icon>
              <v-list-item-title>ログアウト</v-list-item-title>
            </v-list-item>

            <v-list-item
              text
            >
              <v-list-item-icon>
                <v-icon>mdi-exit-run</v-icon>
              </v-list-item-icon>
              <v-list-item-title>退会する</v-list-item-title>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
    <router-view class="mt-10 mb-10 pb-10" />
    <v-footer
      app
      color="indigo"
      dark
      class="pt-5 pb-5 mt-10"
      text-xs-center
    >
      <div style="text-align:center; margin:0 auto;">
        <span>&copy; 2020 - {{ new Date().getFullYear() }} Tanker</span>
      </div>
  </v-footer>
  </v-app>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'App',

  data: () => ({
    drawer: false
  }),
  methods: {
    linkToTl: function() {
      this.$router.push('/timeline').catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
          }
        });
    },
    linkToMypage: function() {
      this.$router.push('/mypage').catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
          }
        })
    }
  }
}
//   computed: {
//     // XMLHttpRequestの設定かく
// };
</script>