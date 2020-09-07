<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="7">
				<h2 class="ml-2 mt-5">タイムライン</h2>
				<v-card
					outlined
				>
					<v-card-text>
						<!-- <v-text-field
							v-model="content"
							:rules="[required, limit_length]"
							counter="15"
						>
						</v-text-field> -->
            <v-textarea
              v-model="content"
              :rules="[limit_length]"
              auto-grow
              counter="30"
              label="短歌を記入してください。"
              rows="1"
            ></v-textarea>
            <v-autocomplete
              v-model="tag"
              :items="tags"
              @click="selected.push(tag)"
              hide-no-data
              hide-selected
              placeholder="タグを入力してください。"
              return-object
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  :input-value="data.selected"
                  close
                  class="chip--select-multi"
                  @input="addTag(data.item)"
                  @click:close="removeTag(data.item)"
                >
                  {{ data.item }}
                </v-chip>
              </template>
            </v-autocomplete>
                        
					</v-card-text>

					<v-card-actions>
						<v-btn
							v-if="this.content.length<=8"
              style="pointer-events:none;"
							text
							color="black"
						>
							投稿する
						</v-btn>
						<v-btn
							v-else
							text
							color="blue"
							@click.native="registerContent"
						>
							投稿する
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
      content: '',
      tag: '',
      tags: [
        '季節の短歌',
        '日常',
        '生活'
      ],
      selected: [],

			// 入力のバリデーション
			limit_length: value => value.length <= 30 || "30文字以内で入力してください。"
		}
	},
	methods: {
		async registerContent() {
			await this.$store.dispatch('createPost', {
				content: this.content
			}
				)
			this.content = ''
    },
    addTag() {
      // this.selected.push(item)
      // console.log(this.selected)
      console.log(this.tags)
      console.log(this.selected)
      console.log(this.data.selected)
      console.log(this.item)
    },
    removeTag(item) {
      const index = this.tags.indexOf(item)
      if (index >= 0) this.tags.splice(index, 1)
    }
	},
	computed: {
		getCurrent() {
			return this.$store.state.user.current
    },
    selectedTags() {
        const selectedTags = []

        for (const tag of this.selected) {
          selectedTags.push(tag)
        }
        return selectedTags
      }
	}
}
</script>