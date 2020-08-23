<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="7">
        <v-card
          outlined
          height="100%"
        >
          <v-card-text class="headline">
            {{ item.content }}
          </v-card-text>
          
          <v-card-actions
            height="10%"
            class="mt-5">
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
}

</script>