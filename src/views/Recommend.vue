<template>
	<v-container>
		<v-row justify="center">
      <v-col cols="9" class="py-0">
				<h2 class="ml-2 mt-2">おすすめユーザー</h2>
				<recommend-card 
					v-for="user in users"
					:key="user.id"
					:user="user"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import RecommendCard from '@/components/RecommendCard.vue'
export default {
	name: 'Recommend',
	components: {
		RecommendCard
	},
	data() {
		return {
			users: [
					{
						name: 'ケン吉田',
						uid: '@kenyoshida',
						intro: '私は吉田腱と申します。短歌が好きで、毎日100首詠んで暮らしています。仲良く短歌を読んで遊びましょう。私は吉田腱と申します。短歌が好きで、毎日100首詠んで暮らしています。仲良く短歌を読んで遊びましょう。',
						followee: '3',
						follower: '5 billion'        
					},
					{
						name: 'ジョン吉田',
						uid: '@johnyoshida',
						intro: 'ジョン吉田です！',
						followee: '30',
						follower: '50 billion'        
					},
					{
						name: '吉田件',
						uid: '@kenyoshida',
						intro: '私は吉田ケンと申します。',
						followee: '13',
						follower: '15 billion'        
					},
					{
						name: 'ケンジ吉田',
						uid: '@kenyoshida',
						intro: '私は吉田腱時と申します。短歌が好きで、毎日100首詠んで暮らしています。仲良く短歌を読んで遊びましょう。私は吉田腱と申します。短歌が好きで、毎日100首詠んで暮らしています。仲良く短歌を読んで遊びましょう。',
						followee: '30',
						follower: '5 billion'        
					},
					{
						name: '吉田',
						uid: '@yoshida',
						intro: '私は吉田と申します。短歌が好きで、毎日100首詠んで暮らしています。仲良く短歌を読んで遊びましょう。',
						followee: '31',
						follower: '52 billion'        
					}

				]
		}
	}


}

</script>