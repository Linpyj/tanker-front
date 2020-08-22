 <template>
  <div>
    <post-card 
        v-for="result in results" 
        :key="result.id"
        :item="result"
        class="py-0"
    />
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
    name: 'Timeline',
    data() {
        return {
            results: [
                // ダミーデータ
                    '山彦や　やまびこやまびこ　山彦や',
                    '古池や　買わず買わず買わず　古池や',
                    '春過ぎて夏来にけらし白妙の衣干すてふ天の香具山',
                    '秋の田のかりほの庵の苫をあらみわが衣手は露にぬれつつ'
            ]
        }
    },
    components: {
        PostCard
    }
}
</script>