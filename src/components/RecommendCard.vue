<template>
  <v-container>
    <v-row justify="center" v-if="$mq==='pc'">
      <v-col cols="7">
        <v-card
          outlined
        >
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="user.image_name.url"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            
            <v-list-item-title>
              {{ user.name }}

            </v-list-item-title>
            <v-list-item-subtitle>
              @{{ user.uid }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          {{ user.profile }}
        </v-card-text>

        <v-card-actions>
          <v-btn
            text
          >
            {{ user.followee_count }} フォロー
          </v-btn>
          <v-btn
            text
          >
            {{ user.follower_count }} フォロワー
          </v-btn>
          <v-spacer />
          {{ user.follow_status }}
          <div>
            <v-btn
              v-if="!!user.follow_status"
              color="black"
              text
              @click.native="removeFollow"
            >
              フォローしています
            </v-btn>
            <v-btn
              v-else
              color="blue"
              text
              @click.native="createFollow"
            >
              フォローする
            </v-btn>
          </div>
        </v-card-actions>

        </v-card>
      </v-col>
    </v-row>






    <v-row v-if="$mq==='sp'">
      <v-col cols="12">
        <div class="flex">
          {{ user.follow_status }}
          <v-btn
              v-if="!!user.follow_status"
              color="black"
              text
              @click.native="removeFollow"
            >
              フォローしています
            </v-btn>
            <v-btn
              v-else
              color="blue"
              text
              @click.native="createFollow"
            >
              フォローする
            </v-btn>
        </div>
        <v-card
          outlined
        >
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="user.image_name.url"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            
            <v-list-item-title>
              {{ user.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              @{{ user.uid }}
            </v-list-item-subtitle>
            
          </v-list-item-content>
        </v-list-item>


        <v-card-text>
          {{ user.profile }}

          <!-- {{ user }} -->
        </v-card-text>

        <v-card-actions>
          <v-btn
            text
          >
            {{ user.followee_count }} フォロー
          </v-btn>
          <v-btn
            text
          >
            {{ user.follower_count }} フォロワー
          </v-btn>
          
        </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    createFollow() {
      var id = this.user.id
      //id取得できてる
      console.log(id)
      this.$store.dispatch('createFollow', {id})
      this.$store.dispatch('fetchRecommend')
    },
    removeFollow() {
      var id = this.user.id
      //id取得できてる
      console.log(id)
      this.$store.dispatch('removeFollow', {id})
      this.$store.dispatch('fetchRecommend')
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.user.current
    },
    isFollowing() {
      return this.$store.state.follow.status
    },
  }
	
}

</script>