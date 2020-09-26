<template>
  <v-container>
    <v-row justify="center" v-if="$mq==='pc'">
      <v-col cols="7">
        <h2 class="ml-2 mt-5">おすすめユーザー</h2>
     </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12">
        <div class="flex">
          <div>
            <h2 
              class="ml-2 mt-5"
            >おすすめユーザー</h2>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>