<template>
	<v-container>
		<v-row justify="center" v-if="$mq==='pc'">
			<v-col cols="7">
				<h2 class="ml-2 mt-5">タイムライン</h2>
				<v-card
					outlined
				>
					<v-card-text>
						
            <v-textarea
              v-model="content"
              :rules="[limit_length]"
              auto-grow
              counter="30"
              label="短歌を入力してください。"
              rows="1"
            ></v-textarea>

            <multiselect
              v-model="selected"
              :options="tags"
              :multiple="true"
              :close-on-select="true"
              placeholder="タグを選択してください。">
            </multiselect>
                        
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

    <v-row justify="center" v-if="$mq==='sp'">
			<v-col cols="12">
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
              label="短歌を入力してください。"
              rows="1"
            ></v-textarea>

            <multiselect
              v-model="selected"
              :options="tags"
              :multiple="true"
              :close-on-select="true"
              placeholder="タグを選択してください。">
            </multiselect>
                        
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
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
	data() {
		return {
      content: '',
      tag: '',
      tags: [
        '季節の短歌',
        '日常',
        '生活'
      ],
      selected: null,
      selectedTags: [],
      tagValue: '',

			// 入力のバリデーション
			limit_length: value => value.length <= 30 || "30文字以内で入力してください。"
		}
	},
	methods: {
		async registerContent() {
			await this.$store.dispatch('createPost', {
        content: this.content,
        tag_list: this.selected
			}
				)
      this.content = ''
      this.selected = ''
      await this.$store.dispatch('fetchOthersPosts')
    }
  },
	computed: {
		getCurrent() {
			return this.$store.state.user.current
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>