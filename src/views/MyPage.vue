 <template>
  <div>
    <prof-card />

    <v-tabs
      v-model="tab"
      centered
    >
      <v-tab>自分の短歌</v-tab>
      <v-tab>お気に入り</v-tab>
    </v-tabs>
    <v-tabs-items
      v-model="tab"
    >
      <v-tab-item>
        <post-card
          v-for="result in results" 
          :key="result.id"
          :item="result"
          class="py-0"
        />
      </v-tab-item>
      <v-tab-item>
        <h1>Tab2の内容ですよ</h1>
        <post-card 
          v-for="result in results" 
          :key="result.id"
          :item="result"
          class="py-0"
        />
      </v-tab-item>
    </v-tabs-items>
    
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'
import ProfCard from '@/components/ProfCard.vue'

export default {
    name: 'Mypage',
    data() {
      return {
        tab: '',
        results: [
            // ダミーデータ
            {"id": 1, "user_id": 7, "name": "Takahashi", "content": '山彦や　やまびこやまびこ　山彦や', "created_at": "2020-08-03"},
            {"id": 2, "user_id": 4, "name": "Takahashi", "content": '古池や　買わず買わず買わず　古池や', "created_at": "2020-08-03"},
            {"id": 3, "user_id": 3, "name": "Takahashi", "content": '春過ぎて夏来にけらし白妙の衣干すてふ天の香具山', "created_at": "2020-08-04"},
            {"id": 4, "user_id": 6, "name": "Takahashi", "content": '秋の田のかりほの庵の苫をあらみわが衣手は露にぬれつつ', "created_at": "2020-08-05"},
            {"id": 5, "user_id": 17, "name": "Takahashi", "content": '山彦や　やまびこ　山彦や', "created_at": "2020-08-03"},
            {"id": 6, "user_id": 2, "name": "Takahashi", "content": '古池や　買わず買わず　古池や', "created_at": "2020-08-03"},
            {"id": 7, "user_id": 1, "name": "Takahashi", "content": '春過ぎて衣干すてふ天の香具山', "created_at": "2020-08-04"},
            {"id": 8, "user_id": 5, "name": "Takahashi", "content": '秋の田のらみわが衣手は露にぬれつつ', "created_at": "2020-08-05"}
        ]
      }
    },
    components: {
        PostCard,
        ProfCard
    }
}
</script>