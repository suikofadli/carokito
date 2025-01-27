<template>
    <div class="grid grid-cols-2 gap-7">
        <div class="grid grid-cols-1 divide-y">
            <PostCard v-for="post in newestPosts" :post="post" :key="post.id" />
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
    categories: Array,
    newestPosts: Array,
    popularPosts: Array
});
</script>