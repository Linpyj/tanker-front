 <template>
  <div>
    これはTimelineのページです
    <post-card />
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
    name: 'Timeline',
    data() {
        return {

        }
    },
    components: {
        PostCard
    }
}
</script>