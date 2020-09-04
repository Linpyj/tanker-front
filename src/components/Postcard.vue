<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="7" class="py-0">
        <v-card
          outlined
        >
          <v-card-text
            class="headline pb-0"
            style="display:flex;"
          >
            <img
              src="https://i.pinimg.com/280x280_RS/45/33/95/453395e8b5fb023351521c680fe85bef.jpg"
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
              <v-icon style="opacity:0.6">mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon style="opacity:0.6">mdi-message-text</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn
              text
            >
              {{ item.created_at | moment }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'
export default {
  props: ['item'],
  filters: {
    moment: function(date) {
      return moment(date).format('YYYY-MM-DD HH:mm')
    }
  }
  // computed: {
  //   posts() {
  //     return this.$store.state.post.posts
  //   }
  // }
}

</script>