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
            <!-- <v-btn
              @click.native="linkToShow(item.id)"
            > -->
            <router-link :to="{name:'showuser',params:{id:item.user_id}}">
              <img
                src="https://i.pinimg.com/280x280_RS/45/33/95/453395e8b5fb023351521c680fe85bef.jpg"
                height="50px;"
                style="border-radius: 50%"
              />
            </router-link>
            <!-- </v-btn> -->
            <div>
              <div
                class="ml-3"
              >
                {{ item.content }}
                {{ item.user_id }}
              </div>
              <div>
                <v-chip
                  v-for="tag in item.tag_list"
                  :key="tag.id"
                  color="primary"
                  small
                  class="ml-3"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </div>
            <v-spacer />
            <div>
              <v-menu>
                <template v-slot:activator="{ on }">
                  <v-btn 
                    text 
                    icon 
                    v-on="on"
                  >
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>
                <v-list
                  v-if="currentUser.id==item.user_id"
                  dense
                >
                  <v-list-item>
                    <v-list-item-title>
                      <v-btn
                        text
                        @click="destroyPost(item.id)"
                      >
                        削除
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>
                  <v-divider vertical />
                  <v-list-item>
                    <v-list-item-title>
                      <v-btn
                        text
                      >
                        キャンセル
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
                <v-list
                  v-else
                >
                  <v-list-item>
                    <v-list-item-title>
                      <v-btn
                        text
                      >
                        フォロー解除
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <v-btn
                        text
                      >
                        キャンセル
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
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
              @click.native="linkToShow"
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
  },
  methods: {
    linkToShow() {
      this.$router.push({name:'showuser',params:{id:this.item.user_id}})
    },
    destroyPost(id) {
      console.log(id)
      this.$store.dispatch('destroyPost', {id})
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.user.current
    }
  }
  // computed: {
  //   posts() {
  //     return this.$store.state.post.posts
  //   }
  // }
}

</script>