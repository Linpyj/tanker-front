<template>
  <v-app>
    <header style="margin: 40px;">
      <v-app-bar
        app
        color="indigo"
        dark
        scroll-target="#scrolling-techniques"
      >
        <v-toolbar-title>
          <v-btn
            to="/timeline"
            text
          >
            Tanker
          </v-btn>
        </v-toolbar-title>
      </v-app-bar>
    </header>
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
