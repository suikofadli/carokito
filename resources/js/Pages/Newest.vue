<template>
    <div>
        <h2 class="text-xl font-bold border-l-4 border-primary  pl-3 mb-3">
            Berita Terkini
        </h2>

        <PostCard v-for="post in posts.data" :post="post" :key="post.id" />

        <p v-if="posts.meta.total === 0">Belum ada artikel.</p>

        <PostPagination :meta="posts.meta" />
    </div>
</template>

<script setup>
import PostCard from '@/Components/PostCard.vue';
import BaseLayout from '@/Layouts/BaseLayout.vue';
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
