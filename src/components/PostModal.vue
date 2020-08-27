<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="9">
				<h2 class="ml-2">Home</h2>
				{{ value }}
				<v-card
					outlined
				>
					<v-card-text>
						<v-text-field
							v-model="content"
							:rules="[required, limit_length]"
							counter="15"
						>
						</v-text-field>
					</v-card-text>

					<v-card-actions>
						<v-btn
							v-if="this.content.length<=8"
							text
							color="black"
						>
							Submit
						</v-btn>
						<v-btn
							v-else
							text
							color="blue"
							@click.native="registerContent"
						>
							Submit
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	props: ['value'],
	data() {
		return {
			content: '',

			// 入力のバリデーション
			required: value => !!value || "入力必須です。",
			limit_length: value => value.length <= 15 || "15文字以内で入力してください。"
		}
	},
	methods: {
		registerContent: function() {
			var content = this.content
			console.log(content)
			this.content = ''
		}
	}
}
</script>