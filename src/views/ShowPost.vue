<template>
	<post-content />
</template>

<script>
import PostContent from '@/components/PostContent.vue'

export default {
	props: ['post'],
	components: {
		PostContent
	}
}
</script>