<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="7">
				<h2 class="ml-2">Home</h2>
				<v-card
					outlined
				>
					<v-card-text>
						<v-text-field
							v-model="content"
							label="歌を入力しましょう！">
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
	data() {
		return {
			content: ''
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