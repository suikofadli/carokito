<template>
    <div>
        <SectionTitle>
            Berita Terkini
        </SectionTitle>

        <PostCard v-for="post in posts.data" :post="post" :key="post.id" />

        <p v-if="posts.meta.total === 0">Belum ada artikel.</p>

        <PostPagination :meta="posts.meta" />
    </div>
</template>

<script setup>
import PostCard from '@/Components/PostCard.vue';
import BaseLayout from '@/Layouts/BaseLayout/Index.vue';
import SectionTitle from '@/Layouts/SectionTitle.vue';
import PostPagination from '@/Shared/PostPagination.vue';

defineOptions({
    layout: BaseLayout
})

defineProps({
    posts: {
        type: Object,
        required: true
    }
})
</script>
