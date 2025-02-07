<template>
    <div>
        <SectionTitle>
            {{ category.name }}
        </SectionTitle>

        <div class="grid grid-cols-1 gap-y-5">
            <PostCard v-for="post in posts.data" :post="post" :key="post.id" class="border-b" />
        </div>
        <PostPagination v-if="posts.meta.last_page > 1" :meta="posts.meta" />

        <p v-if="posts.meta.total === 0">Belum ada artikel.</p>
    </div>
</template>

<script setup>
import PostCard from '@/Components/PostCard.vue';
import BaseLayout from '@/Layouts/BaseLayout.vue';
import SectionTitle from '@/Layouts/SectionTitle.vue';
import PostPagination from '@/Shared/PostPagination.vue';

defineOptions({
    layout: BaseLayout
})

defineProps({
    category: Object,
    posts: {
        type: Object,
        required: true
    }
})
</script>
