<template>
  <v-app>
    <header>
      <v-card
        class="mx-auto overflow-hidden"
        style="margin-bottom: 50px;"
      >
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
              <v-list-item>
                <v-btn
                  text
                  @click.native="linkToTl()"
                >
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Home</v-list-item-title>
                </v-btn>
              </v-list-item>

              <v-list-item>
                <v-btn
                  text
                  @click.native="linkToMypage"
                >
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>My Page</v-list-item-title>
                </v-btn>
              </v-list-item>

            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </header>
    <router-view />
  </v-app>
</template>

<script>

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
        });
    }
  }
}
//   computed: {
//     // XMLHttpRequestの設定かく
// };
</script>