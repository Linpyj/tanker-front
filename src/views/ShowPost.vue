<template>
	<post-card />
</template>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
	props: ['post'],
	components: {
		PostCard
	}
}
</script>