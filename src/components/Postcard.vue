<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="9" class="py-0">
        <v-card
          outlined
        >
          <v-card-text
            class="headline pb-0"
            style="display:flex;"
          >
            <img
              src="https://img.game8.jp/1093756/119442862629bb2c0615084715bc7235_2017-08-10.png/show?1502349009"
              height="50px;"
              style="border-radius: 50%"
            />
            <div>
              <div class="title ml-3">
                {{ item.name }}
              </div>
              <div
                class="ml-3"
              >
                {{ item.content }}
              </div>
            </div>
          </v-card-text>
          
          <v-card-actions
            class="pt-0">
            <v-btn text icon color="lighten-5">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-message-text</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn
              text
            >
              {{ item.created_at }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['item']
  // computed: {
  //   posts() {
  //     return this.$store.state.post.posts
  //   }
  // }
}

</script>