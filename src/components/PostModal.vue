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
		}
	},
	computed: {
		getCurrent() {
			return this.$store.state.user.current
		}
	}
}
</script>