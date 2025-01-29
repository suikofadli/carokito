<template>
    <h1 class="text-xl font-bold mb-6 border-l-4 border-indigo-600 pl-3">
        {{ category.name }}
    </h1>

    <div class="grid grid-cols-2 gap-7">
        <div class="grid grid-cols-1 divide-y">
            <PostCard v-for="post in posts.data" :post="post" :key="post.id" />

            <p v-if="posts.meta.total === 0">Belum ada artikel.</p>
        </div>
    </div>
</template>

<script setup>
import PostCard from '@/Components/PostCard.vue';
import BaseLayout from '@/Layouts/BaseLayout.vue';

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
